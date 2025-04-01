import transporter from "../env/Email.Config.js";


export const sendContactData = async (req, res) => {
    try {
        // Extraer datos del cuerpo de la solicitud
        const { nombre, apellido, correo, telefono } = req.body;
        
        // Validar que todos los campos estén presentes
        if (!nombre || !apellido || !correo || !telefono) {
            return res.status(400).json({
                success: false,
                message: 'Todos los campos son obligatorios: nombre, apellido, correo y telefono'
            });
        }
        
        // Configurar el correo electrónico
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.DESTINATION_EMAIL,
            subject: 'Nuevo Contacto Registrado',
            html: `
                <h1>Datos de Contacto</h1>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Apellido:</strong> ${apellido}</p>
                <p><strong>Correo:</strong> ${correo}</p>
                <p><strong>Teléfono:</strong> ${telefono}</p>
            `
        };
        
        // Enviar el correo electrónico
        await transporter.sendMail(mailOptions);
        
        // Responder al cliente
        return res.status(200).json({
            success: true,
            message: 'Datos de contacto enviados correctamente por correo'
        });
        
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return res.status(500).json({
            success: false,
            message: 'Error al enviar los datos por correo',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};