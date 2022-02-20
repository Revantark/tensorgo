import pkg from 'mongoose'

const { Schema, model } = pkg;

const User = new Schema({
  id:{
    type: Number,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  created_at :{
      type:Date,
      default:()=>{
          return Date.now()
      }
  }
  ,
  updated_at:{
      type:Date
  }
}, { id: false });

export const Users = model("Users", User);
