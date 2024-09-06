import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Log the MONGODB_URI to check if it's correctly retrieved
console.log('MONGODB_URI:', MONGODB_URI);

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log('Using existing MongoDB connection');
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false, // Ensure no buffering of commands
    }).then((mongoose) => {
      console.log('MongoDB connected successfully');
      return mongoose;
    }).catch((err) => {
      console.error('MongoDB connection failed:', err.message); // Log the exact error message
      throw new Error(err);
    });
  }
  
  cached.conn = await cached.promise;
  if (cached.conn) {
    console.log('MongoDB connection is established');
  } else {
    console.log('MongoDB connection could not be established');
  }

  return cached.conn;
}

export default dbConnect;
