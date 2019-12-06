import  mongoose, { Schema } from 'mongoose';

export const degreeSchema = new Schema({
   name  : { type : String , required : true , unique : true }
});

export const Degree = mongoose.model('Degree', degreeSchema);
