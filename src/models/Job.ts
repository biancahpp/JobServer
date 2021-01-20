import mongoose, { Schema } from 'mongoose';

export interface JobRaw{
  title: string,
  company: string,
  img: string,
  type: string,
  location: string,
  tags: string[],
  salary: number,
  featured: boolean,
}

export interface Job extends JobRaw {
  _id: string,
  __v?: number,
  isAvailable: boolean,
  date: string
}

const jobSchema:Schema = new mongoose.Schema ({
  title: String,
  company: String,
  img: String,
  type: String,
  location: String,
  tags: [String],
  salary: Number,
  featured: Boolean,
  isAvailable: Boolean,
  date: String
})

export default mongoose.model('Job', jobSchema);