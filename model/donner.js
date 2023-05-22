const mongoose = require("mongoose");


// Schema design 
const donnerSchema = mongoose.Schema({
   name:{
     type: String,
     unique:true ,
     required:[true, "please provide a name for this product."],
     
   },
 
   email: {
     type: String,
     //unique: true,
     required: true,
   },
 
  number:{
    type:String,
    required:true,
    minlength:[11, 'You must hove to provide 11 size phone number'],
    maxlength:[11, 'You must hove to provide 11 size phone number']
  },
 
   bloodGroup: {
     type:String,
     required:true,
   
     enum:{
       values:['A+', 'A-' , 'B+' , 'B-' , 'O+' , 'O-' , 'AB+' , 'AB-'],
       message: "unit value can't be {VALUE} , mast be A+/A-/B+/B-/O+/O-/AB+/AB-"
     }
   },
 
   
  imageURL: {
    type: String,
    required: true
  },

    isAbleToDonateBlood:{
     type:String,
     enum:{
      values:['Yes' , 'No'],
      message: "unit value can't be {VALUE} , it mast be Yes or No"
    }
    
   } ,
 
   location:{
        type:String,
        required:true,
        enum:{
            values:['Feni', 'Daganbhuiyan' , 'Chhagalnaiya' , 'Sonagazi' , 'Parshuram', 'Fulgazi'],
            message: "unit value can't be {VALUE} ,it must have to be  Feni/Daganbhuiyan/Chhagalnaiya/Sonagazi/Parshuram/Fulgazi"
          }
   }
   
  
 
 },{
   timestamps:true
 })


   


const Donner = mongoose.model('Donner' , donnerSchema);


module.exports = Donner;
