const mongoose = require("mongoose");

const URI =
  "mongodb+srv://rajesh:admin@cluster0.dzaoe.mongodb.net/Vibes?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  console.log("CONNECTED TO MONGOdb ATLAS");
};

module.exports = connectDB;
