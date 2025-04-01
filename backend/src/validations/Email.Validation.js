// Middleware de validación para el formulario de contacto
export const validateContactForm = (req, res, next) => {
  const { nombre, apellido, correo, telefono } = req.body;
  
  // Errores de validación
  const errors = [];
  
  // Validar campos requeridos
  if (!nombre || nombre.trim() === '') {
    errors.push('El nombre es requerido');
  }
  
  if (!apellido || apellido.trim() === '') {
    errors.push('El apellido es requerido');
  }
  
  // Validar formato de correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correo || !emailRegex.test(correo)) {
    errors.push('Correo electrónico inválido');
  }
  
  // Validar que el teléfono contenga solo números
  const phoneRegex = /^\d{7,15}$/;
  if (!telefono || !phoneRegex.test(telefono)) {
    errors.push('Número de teléfono inválido (debe contener entre 7 y 15 dígitos)');
  }
  
  // Si hay errores, devolver respuesta con errores
  if (errors.length > 0) {
    res.status(400).json({ success: false, errors });
    return;
  }
  
  // Si no hay errores, continuar
  next();
};