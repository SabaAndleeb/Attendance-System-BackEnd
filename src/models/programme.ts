import  mongoose, { Schema } from 'mongoose';
const ObjectId = Schema.Types.ObjectId;

export const programmeSchema = new Schema({
   name  : { type : String , required : true , unique : true } ,
   degree: { type : ObjectId , ref : 'Degree' },
   duration : { type : Number , required : true },
   isSemesterSystem : { type : Boolean , default : true }
});

export const Programme = mongoose.model('Programme', programmeSchema);
