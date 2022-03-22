import express from "express";
import { MongoConnection } from "./db/mongoConnection";
import { URLController } from "./controller/urlController";

const api = express();
api.use(express.json());

const dataBase = new MongoConnection();
dataBase.connect();

const urlController = new URLController();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);

api.listen(5000, () => console.log('Express listening'));