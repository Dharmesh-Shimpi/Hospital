import express from 'express';
import patientsController from '../controllers/patientsController.js';
import reportController from '../controllers/reportController.js';
import { jwtAuth } from '../middleware/jwt.js';
const router = express.Router();

router.post('/register', jwtAuth, patientsController.createPatient);
router.post('/:id/create_report', jwtAuth, reportController.createReport);
router.get('/:id/all_reports', jwtAuth, reportController.getReports);

export default router;
