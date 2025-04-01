import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';

// Importar las rutas
// import routes from './routes.js';



// Configuración de Express
const app = express();
app.use(cors());
const PORT = 4000;
app.use(express.json());
// Middleware para parsear JSON en las peticiones   
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware para servir archivos estáticos
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.get("documentation", (req, res) => {
    res.render("documentation.ejs");
});
// Middleware para manejar errores

// --------------------------------// Rutas

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
