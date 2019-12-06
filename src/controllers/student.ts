import { Student } from '../models';
import { Request, Response } from 'express';
import { ObjectId } from 'bson';

export class StudentController {

    constructor(){}

    getStudents = (req : Request , res : Response) => {
        // Student.find({}, (error : any , docs : any) => {
        //     if(error)
        //         return res.json({success : false, response : error});
            
        //     return res.json({success : true , response : docs});
        // });

        Student.find({})
               .populate('classInfo.degree')
               .populate('classInfo.programme')
               .exec((error : any , docs :any) => {
                if(error)
                return res.json({success : false, response : error});
            
                return res.json({success : true , response : docs});
               });
    }

    addNewStudent = (req : Request , res : Response) => {
        Student.create(req.body, (error : any, response : any) => {
            if(error)
                return res.json({success : false , res : 'Something went wrong.'});

            return res.json({success: true, response : response});
        });
    }

    getStudent = (req : Request, res : Response) => {
        Student.aggregate([
            { $match : { _id : req.params.studentId } },
            { $lookup : { 
                from: "Degree",
                localField: "classInfo.degree",
                foreignField: "_id",
                as: "degreeDetails"
              }
            },
            { $lookup : { 
                from: "Programme",
                localField: "classInfo.programme",
                foreignField: "_id",
                as: "programmeDetails"
              }
            }
        ] , (error : any , response : any) => {
            if(error){
                console.error("Error in getting student details", error);
                return res.json({success : false, response : error });
            }
            return res.json({ success : true , response : response });                
        });
    }

    updateAllStudents = (req : Request , res : Response ) => {
        Student.updateMany(
            {},
            { $set: {"classInfo.degree": "5dc3f89d347ee4243251934b" , "classInfo.programme": "5dc4829700074f3e34b11000" } },
            { multi : true },
            (error : any , response : any) => {
                if(error){
                    console.error("Error in getting student details", error);
                    return res.json({success : false, response : error });
                }
                return res.json({ success : true , response : response });                
            });
          
    }
}