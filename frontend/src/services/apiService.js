/**
 * Servicio para gestionar las peticiones a la API
 */

// URL base de la API
const API_BASE_URL = 'http://localhost:4000/api';

/**
 * Realiza una solicitud a la API
 * @param {string} endpoint - Endpoint de la API
 * @param {string} method - Método HTTP
 * @param {object} data - Datos a enviar
 * @returns {Promise<object>} - Respuesta de la API
 */
export const apiRequest = async (endpoint, method = 'GET', data = null) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
      options.body = JSON.stringify(data);
    }
    
    const response = await fetch(url, options);
    const responseData = await response.json();
    
    if (!response.ok) {
      throw new Error(responseData.message || 'Ha ocurrido un error en la solicitud');
    }
    
    return responseData;
  } catch (error) {
    console.error('Error en la solicitud API:', error);
    throw error;
  }
};

/**
 * Servicio de email
 */
export const emailService = {
  /**
   * Envía datos de contacto por correo
   * @param {object} contactData - Datos del contacto
   * @returns {Promise<object>} - Respuesta de la API
   */
  sendContactForm: (contactData) => {
    return apiRequest('/email/contact', 'POST', contactData);
  }
};

/**
 * Exportaciones de servicios específicos
 */
export const services = {
  email: emailService,
  // Otros servicios pueden ir aquí...
};

export default services;