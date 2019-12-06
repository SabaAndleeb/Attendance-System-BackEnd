import  mongoose, { Schema } from 'mongoose';
const ObjectId = Schema.Types.ObjectId;

export const classesSchema = new Schema({
   degree     : { type : ObjectId , ref : 'Degree' , required : true },
   programme  : { type : ObjectId , ref : 'Programme' , required : true },
   courses    : [{
      course  : { type : ObjectId , ref : 'Course'  } ,
      teacher : { type : ObjectId , ref : 'Teacher' }       
   }],
   students   : [{ type : ObjectId , ref : 'Student' , default : [] } ],
   section    : String ,
   part       : Number ,
   semester   : Number ,
});

export const Classes = mongoose.model('Classes', classesSchema);
