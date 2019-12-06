import { Classes, Student } from "../models";
import { Request, Response } from "express";

export class ClassesController {

    constructor(){}

    saveClass = (req : Request , res : Response) => {
        Classes.create(req.body , (error : any , response : any) => {
            if(error)
                return res.json({success : false, response : error});

            Student.updateMany(
                {
                    _id: { $in: req.body.students } 
                },
                { $set: { 
                    classInfo : { 
                        degree : req.body.degree,
                        programme: req.body.programme
                        } 
                    }  
                }
            , (error : any ,  updateResponse :  any) => {
                if(error)
                    return res.json({success : false, response : error});

                return res.json({success : true , response : response });
            })    
            
            
        });
    }

    getClass = (req : Request , res : Response) => {
        const query = req.params.id ? { id : req.params.id } : {};    
        Classes.find(query)
               .populate('degree')
               .populate('programme')
               .populate('students')
               .exec((error : any , docs : any) => {
                    if(error)
                        return res.json({success : false, response : error});
                    
                    return res.json({success : true , response : docs});
                });
    }

    getClassProgrammes = (req : Request, res : Response) => {
        const query  = { _id : req.params.classId };
        Classes.find(query)
               .populate('courses.course')
               .populate('courses.teacher')
               .exec((error : any , docs : any) => {
                if(error)
                    return res.json({success : false, response : error});                
                return res.json({success : true , response : docs});
            });

    }

    getClassStudents = (req : Request, res : Response) => {
        const query  = { _id : req.params.classId };
        Classes.find(query)
               .populate('students')
               .populate('courses.teacher')
               .exec((error : any , docs : any) => {
                if(error)
                    return res.json({success : false, response : error});                
                return res.json({success : true , response : docs});
            });
    }
}