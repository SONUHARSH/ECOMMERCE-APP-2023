import mongoose from "mongoose";
import colors from "colors";
const URL ="mongodb://localhost/e-commerce_db_dev"
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
