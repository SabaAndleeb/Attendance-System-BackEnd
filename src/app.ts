import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { DATABASE_URL, JWTSECRET, CLIENT_URL } from './config/config';
import { Routes } from './routes/routes';

class App {

 public app : express.Application;
 public routePrv: Routes = new Routes();

 constructor(){
    this.app = express();
    this.config();
    this.mongoSetup();
    this.routePrv.routes(this.app);    
 }

    private config(): void {
        this.app.use( cors() );
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false}));
    }

    private mongoSetup(): void{
        mongoose.connect(DATABASE_URL, {useCreateIndex: true, useNewUrlParser: true , useUnifiedTopology : true});      
        const connection = mongoose.connection;
        connection.once('open', () => {
            console.log('MongoDB connection established successfullly.');
        });
    }
}

export default new App().app;