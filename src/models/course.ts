import  mongoose, { Schema } from 'mongoose';
const ObjectId = Schema.Types.ObjectId;

export const courseSchema = new Schema({
   name  : { type : String , required : true } 
});

export const Course = mongoose.model('Course', courseSchema);
