import React, { useState } from 'react';
import { emailService } from '../../services/apiService';
import Button from '../atoms/Button';
import TituloV1 from '../atoms/Titulos/TituloV1';
import TextoV1 from '../atoms/Texto/Texto';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });
    
    try {
      const response = await emailService.sendContactForm(formData);
      
      setMessage({ 
        type: 'success', 
        text: 'Tus datos de contacto se han enviado correctamente' 
      });
      
      // Limpiar el formulario al enviar exitosamente
      setFormData({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: ''
      });
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.message || 'Hubo un error al enviar el formulario' 
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <TituloV1 className="text-center mb-6">Contáctanos</TituloV1>
      
      <TextoV1 className="text-gray-600 mb-6 text-center">
        Completa el siguiente formulario y nos pondremos en contacto contigo a la brevedad.
      </TextoV1>
      
      {message.text && (
        <div 
          className={`mb-4 p-3 rounded-md ${
            message.type === 'success' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}
        >
          {message.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label 
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          
          <div>
            <label 
              htmlFor="apellido"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Ingresa tu apellido"
              required
            />
          </div>
        </div>
        
        <div>
          <label 
            htmlFor="correo"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="ejemplo@correo.com"
            required
          />
        </div>
        
        <div>
          <label 
            htmlFor="telefono"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="(123) 456-7890"
            required
          />
        </div>
        
        <div className="pt-2">
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full"
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;