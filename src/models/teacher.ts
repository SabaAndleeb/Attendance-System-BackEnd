import  mongoose, { Schema } from 'mongoose';
export const teacherSchema = new Schema({
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
   userName  : { type : String, unique: true, required: true } ,
   joiningDate : { type : Date , default : new Date() },
   salary      : Number ,
   qualification : {
       degree : { type : String , default : 'MS' },
       programme : { type : String , default : 'CS' },
   },
   assignedCourses : { type : Array , ref : 'Course' , default : [] }
});

export const Teacher = mongoose.model('Teacher', teacherSchema);
