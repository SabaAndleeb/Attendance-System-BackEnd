import { Request , Response } from "express";
import { Attendance } from '../models';
import { Schema }from "mongoose";
const ObjectId = Schema.Types.ObjectId;

export class AttendanceController {
    
    constructor(){}

    saveAttendance = (req : Request , res : Response) => {
        Attendance.create(req.body , (error : any , response : any) => {
            if(error)
                return res.json({success : false, response : error});
            
            return res.json({success : true , response : response });
        });
    }

    getAttendance = (req : Request , res : Response) => {

        const query = req.query ? { classId : req.query.classId.toString() } : {};
        
        Attendance.find(query)
                  .populate({ path :'attendance.student' , select : 'firstName lastName'})
                  .populate({ path :'teacher' , select : 'firstName lastName'})
                  .exec((error : any , docs : any) => {
                    if(error)
                        return res.json({success : false, response : error});
                    
                    return res.json({success : true , response : docs});
                });
        
    //    console.log('Query', query);
    //     Attendance.aggregate([
    //         { $match : query },
    //         { $group : { _id : '$classId' , students: { $push: "$attendance" } , teacher : { $addToSet : "$teacher"} } },
    //         { $lookup : { localField : "classId" , foreignField : "_id", from : "classes" , as : "class"}}
    //     ], (error : any , docs : any) => {
    //         if(error)
    //             return res.json({success : false, response : error});
            
    //         return res.json({success : true , response : docs});
    //     })    
    }
}