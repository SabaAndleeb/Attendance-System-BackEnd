import { Degree } from "../models";
import { Request , Response } from 'express';

export class DegreeController {

    constructor(){}

    saveDegree = (req : Request , res : Response) => {
        Degree.create(req.body , (error : any , response : any) => {
            if(error)
                return res.json({success : false, response : error});
            
            return res.json({success : true , response : response });
        });
    }

    getDegree = (req : Request , res : Response) => {
        const query = req.params.name ? { name : req.params.name } : {};
        Degree.find( query , (error : any , docs : any) => {
            if(error)
                return res.json({success : false, response : error});
            
            return res.json({success : true , response : docs});
        });
    }
}