import React from 'react';
import DefaultTemplate from '../templates/DefaultTemplate';
import TituloV1 from '../atoms/Titulos/TituloV1';
import TextoV1 from '../atoms/Texto/Texto';
import ContactForm from '../organisms/ContactForm';

const Contact = () => {
  return (
    <DefaultTemplate>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <TituloV1>Contacto</TituloV1>
            <TextoV1 className="mt-4 text-lg text-gray-600">
              ¿Tienes alguna pregunta o necesitas más información? ¡Estamos aquí para ayudarte!
            </TextoV1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold mb-4 text-indigo-700">Información de Contacto</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-800">Dirección</h4>
                      <p className="text-gray-600 mt-1">Av. Principal #123, Ciudad</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-800">Teléfono</h4>
                      <p className="text-gray-600 mt-1">(123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-800">Correo</h4>
                      <p className="text-gray-600 mt-1">info@diverfiesta.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-800">Horario</h4>
                      <p className="text-gray-600 mt-1">Lun-Vie: 9AM-6PM</p>
                      <p className="text-gray-600">Sáb: 10AM-2PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default Contact;