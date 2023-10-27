import mongoose from "mongoose";

const Schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    departmentHead: [
      {
        type:String
      }
    ]
     ,
     team: [
      {
        type:String
      }
    ]
     ,
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
  yearFound: {
      type: String,
      required: true,
   
    },

    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Department = mongoose.model("Department", Schema);
