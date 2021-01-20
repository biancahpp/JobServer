import { Request, Response } from 'express';
import Job from '../models/Job';

export const addJob = async (req:Request, res:Response) => {
  try{
    const job = await Job.create({
      ...req.body,
      isAvailable: true,
      date: Date.now()
    });

    res.status(200).json(job)
  }
  catch (err) {
    console.log(err)
    res.status(400)
  }
}

export const getJobs = async (req:Request, res:Response) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs)
  }
  catch (err) {
    console.log(err)
    res.status(400)
  }
}