import mongoose from "mongoose";

async function databaseConnect() {
  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  return mongoose.connect(
    "mongodb+srv://test:N9yaGAR0fMIDR03I@cluster0.rmgzz.gcp.mongodb.net/acg?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
}

export default { databaseConnect };
