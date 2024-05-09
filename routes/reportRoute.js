import express from 'express';
import reportController from '../controllers/reportController.js';
import {jwtAuth} from '../middleware/jwt.js';

const router = express.Router();
router.get('/:status', jwtAuth, reportController.getReportsByStatus);
export default router;