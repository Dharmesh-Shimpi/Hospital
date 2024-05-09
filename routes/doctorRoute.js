import express from 'express';
import doctorController from '../controllers/doctorController.js';
const router = express.Router();
router.post('/register', doctorController.createDoctor);
router.get('/register', doctorController.createDoctor);
router.post('/login', doctorController.loginDoctor);
router.get('/login', doctorController.loginDoctor);

export default router;
