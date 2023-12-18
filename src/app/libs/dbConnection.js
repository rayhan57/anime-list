import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    await mongoose.connect(uri);
    console.log("Connect to mongodb database");
  } catch (error) {
    console.log("Error to connect mongodb database", error);
  }
};
