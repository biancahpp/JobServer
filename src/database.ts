import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function mongooseConnection () {

try {
await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
console.log('Connected to MongoDB.')}
catch (err) {console.log(err)}
}

export default mongooseConnection