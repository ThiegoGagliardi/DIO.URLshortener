import shortId from 'shortid';
import {Request, Response } from 'express';
import { config } from '../config/Constants';
import { URL, URLModel} from '../model/URL';

export class URLController{

    public async shorten(req: Request, resp: Response): Promise<void>
    {
        const {originalURL} = req.body;

        const url = await URLModel.findOne({originalURL});

        if (url){
            resp.json(url);
            return;
        }

        const hash = shortId.generate();        
        const shortURL = `${config.API_URL}/${hash}}`;
        
        const newURL = URLModel.create(originalURL,hash,shortURL);

        resp.json(newURL);
    }

    public async redirect(req: Request, resp: Response) : Promise<void>{
       const {hash} = req.params;

       const url = await URLModel.findOne({hash});

       if (url){
           resp.redirect(url.originalURL);
           return;
       }    
       
       resp.status(400).json('Error: URL not found.');
       
    }
}