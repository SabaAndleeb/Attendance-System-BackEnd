import { Programme } from "../models";
import { Request , Response } from 'express';
const ObjectId = require("mongoose").Types.ObjectId;

export class ProgrammeController {

    constructor(){}

    saveProgramme = (req : Request , res : Response) => {
        Programme.create(req.body , (error : any , response : any) => {
            if(error)
                return res.json({success : false, response : error});
            
            return res.json({success : true , response : response });
        });
    }

    getProgramme = (req : Request , res : Response) => {
        const query = req.params.id ?  { _id    : req.params.id } 
                                    :  ( req.params.degreeId ? { degree : ObjectId(req.params.degreeId) }
                                    :  {} );
        Programme.find(query)
                 .populate('degree')
                 .exec((error : any , docs : any) => {
                    if(error)
                         return res.json({success : false, response : error});
                    return res.json({success : true , response : docs});    
                 });
    }
}