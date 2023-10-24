import mongoose from "mongoose";

const empSchema = mongoose.Schema(
  {
  
    department: {
      name: {
          type: String,
          require: true
      },
      id: {
          type: String,
          require: true
      },
  },
    name: {
      type: String,
      required: true,
    },
    image: {
      public_id: {
          type: String,
          require: true
      },
      image_url: {
          type: String,
          require: true
      },
  },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: String,
      required: true,
    },
    profileDesc: {
      type: String,
      required: true,
    },
    empId:{
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const Employee = mongoose.model("Employee", empSchema);
