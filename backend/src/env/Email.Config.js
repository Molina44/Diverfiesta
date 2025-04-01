import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno
dotenv.config({ path: path.join(__dirname, '../env/.env') });

// Configuración específica para Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Usa el servicio predefinido de Gmail en lugar de host/puerto
  auth: {
    user: process.env.EMAIL_USER ,
    pass: process.env.EMAIL_PASS ,
  }
});

// Función para verificar la conexión
export const verifyConnection = async () => {
  try {
    // Imprimir la configuración para depuración (solo usuario, no contraseña)
    console.log(`Intentando conectar a Gmail con: ${process.env.EMAIL_USER}`);
    
    await transporter.verify();
    console.log('✅ Conexión con Gmail establecida correctamente');
    return true;
  } catch (error) {
    console.error('❌ Error al conectar con Gmail:', error);
    console.log('Por favor asegúrate de:');
    console.log('1. Tu dirección de correo es correcta');
    console.log('2. Estás usando una contraseña de aplicación (no tu contraseña normal)');
    console.log('3. Has activado "Permitir aplicaciones menos seguras" si no usas contraseña de aplicación');
    return false;
  }
};

export default transporter;