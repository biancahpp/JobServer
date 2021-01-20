import express from 'express';
import { addJob, getJobs } from './controllers/Jobs';

const router = express.Router();

router.post('/job', addJob);
router.get('/job', getJobs);

export default router