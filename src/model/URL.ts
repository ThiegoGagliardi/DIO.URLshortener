import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';

export class URL {
    
     @prop({required:true})
     originalURL : string;

     @prop({required:true})
     hash        : string;

     @prop({required:true})
     shortURL    : string;

     constructor(originalURL : string ,hash:string, shortURL: string )
     {
       this.originalURL = originalURL;
       this.hash        = hash;
       this.shortURL    = shortURL;
     }
}

export const URLModel = getModelForClass(URL);