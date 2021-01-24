import express from 'express';
import { addJob, getJobs, apiDeleteJob } from './controllers/Jobs';

const router = express.Router();

router.post('/job', addJob);
router.get('/job', getJobs);
router.delete('/job/:id', apiDeleteJob);

export default router