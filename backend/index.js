import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import { verifyConnection } from './src/env/Email.Config.js';

// Importar las rutas

import emailRoutes from './src/routes/Email.Routes.js';

// Configuración de Express
const app = express();
app.use(cors());
const PORT = process.env.PORT;

// Middleware para parsear JSON en las peticiones
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para servir archivos estáticos
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

// Rutas de documentación
app.get("/docs", (req, res) => {
    res.render("documentation.ejs");
});

// Rutas de la API
app.use('/api/email', emailRoutes);



// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Error interno del servidor',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Iniciar el servidor
const startServer = async () => {
    try {
        // Verificar la conexión con el servidor de correo
        await verifyConnection();
        
        // Iniciar el servidor
        app.listen(PORT, () => {
            console.log(`Servidor en ejecución en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
        process.exit(1);
    }
};
startServer();