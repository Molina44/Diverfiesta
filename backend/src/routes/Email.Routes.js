import { Router } from 'express';
import { sendContactData } from '../controllers/Email.Controller.js';
import { validateContactForm } from '../validations/Email.Validation.js';

const router = Router();

// Ruta para enviar el formulario de contacto
router.post('/contact', validateContactForm, sendContactData);


export default router;