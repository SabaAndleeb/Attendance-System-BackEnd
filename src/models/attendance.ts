import  mongoose, { Schema } from 'mongoose';
const ObjectId = Schema.Types.ObjectId;

export const attendanceSchema = new Schema({
   date      : { type : Date , default : new Date() },
   classId   : { type : ObjectId , ref : 'Classes' } ,
   attendance  : [ {
      status  : { type : Boolean  , default : true  },
      student : { type : ObjectId , ref : 'Student' }
   }],  
   teacher   : { type : ObjectId , ref : 'Teacher' },
});

export const Attendance = mongoose.model('Attendance', attendanceSchema);
