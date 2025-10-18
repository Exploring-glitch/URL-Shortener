import mongoose from 'mongoose';
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name : {
        type: String, 
        required: true, 
        unique: true
    },

    email : {
        type: String, 
        required: true, 
        unique: true
    },
    
    password : {
        type: String,
        required: true, 
        select: false //select:false means we dont include the password while fetching the user
    },  
})


userSchema.methods.comparePassword = async function(password){ //compares password and returns true or false accordingly
    return await bcrypt.compare(password, this.password);
}

userSchema.set('toJSON', { //this removes the password from json so that its not visible to anyone
  transform: function (doc, ret) {
    delete ret.password;
    delete ret.__v;
    return ret;
  }
});

userSchema.pre("save", async function (next) { //this runs before saving the schema 
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10); //hashing the raw password
  next();
});


const userModel = mongoose.model("user", userSchema);
export default userModel;