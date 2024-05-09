import express from 'express';
import doctorRoute from './routes/doctorRoute.js';
import patientsRoute from './routes/patientsRoute.js';
import reportRoute from './routes/reportRoute.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use('/doctor', doctorRoute);
app.use('/patients', patientsRoute);
app.use('/reports', reportRoute);
export default app;
