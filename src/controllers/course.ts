import { Course } from "../models";
import { Request , Response } from 'express';

export class CourseController {

    constructor(){}

    saveCourse = (req : Request , res : Response) => {
        Course.create(req.body , (error : any , response : any) => {
            if(error)
                return res.json({success : false, response : error});
            
            return res.json({success : true , response : response });
        });
    }

    getCourse = (req : Request , res : Response) => {
        const query = req.query.name ? { name : req.query.name } : (req.query.id ? { _id : req.query.id} : {} );
        Course.find( query , (error : any , docs : any) => {
            if(error)
                return res.json({success : false, response : error});            
            return res.json({success : true , response : docs});
        });
    }
}
