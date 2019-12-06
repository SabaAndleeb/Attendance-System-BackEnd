import { Teacher } from '../models';
import { Request, Response } from 'express';

export class TeacherController {

    constructor(){}

    getTeachers = (req : Request , res : Response) => {
        Teacher.find({}, (error : any , docs : any) => {
            if(error)
                return res.json({success : false, response : error});
            
            return res.json({success : true , response : docs});
        });
    }

    addNewTeacher = (req : Request , res : Response) => {
        Teacher.create(req.body, (error : any, response : any) => {
            if(error)
                return res.json({success : false , res : 'Something went wrong.'});

            return res.json({success: true, response : response});
        });
    }
}