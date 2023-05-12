const mongoose = require("mongoose");


// Schema design 
const donnerSchema = mongoose.Schema({
   name:{
     type: String,
     required:[true, "please provide a name for this product."],
     
   },
 
   email: {
     type: String,
     unique: true,
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
 

    lastBloodDonationDate:{
    required:true,
     type:String,
    
   } ,
 
   location:{
        type:String,
        required:true,
        enum:{
            values:['Feni', 'Dhaka' , 'Chattogram' ],
            message: "unit value can't be {VALUE} , mast be Feni/Dhaka/Chattogram"
          }
   }
   
 
 },{
   timestamps:true
 })

 
   


const Donner = mongoose.model('Donner' , donnerSchema);


module.exports = Donner;