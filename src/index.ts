import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongooseConnection from './database';
import router from './routes';

dotenv.config();

const app = express();
const corsConfig = {
  origin: [process.env.FRONT_END_URL], 
  credentials: true
}
app.use(bodyParser.json());
app.use(cors(corsConfig));
app.use(router);

(async () => {
  try{
    app.listen(+process.env.PORT || 3000, () => {
      console.log(`Server is up and listening on port ${process.env.PORT}.`)
      mongooseConnection()
    })
  } catch (err) {
    console.log(err)
  }
}) ();