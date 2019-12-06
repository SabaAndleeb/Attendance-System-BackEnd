import  mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'bson';

export const studentSchema = new Schema({
   avatar      : { type : String , default : null },   
   birthDate   : { type : String , default : null }, 
   created_at  : { type : Date , default : new Date() },  
   edited_at   : { type : Date , default : null },
   email       : { type : String , unique: true, required: true },
   firstName   : { type : String  },
   lastName    : { type : String , default : '' },
   location    : { 
    country    : { type : String, default : 'Pakistan' } , 
    city       : { type : String, default : '' } , 
    address    : { type : String, default : '' }
   },
   contactNumber   : { countryCode : { type : Number , default : 0 }, number : { type : Number , default : 0 } },
   registrationNum : { type : String  , unique : true },
   rollNum     :  { type : String  , unique : true },
   userName  : { type : String, unique: true, required: true }, 
   classInfo : { 
      degree : { type : ObjectId , ref : 'Degree'},
      programme: { type : ObjectId , ref : 'Programme'}
   }
});

export const Student = mongoose.model('Student', studentSchema);
