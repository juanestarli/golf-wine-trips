import React, { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de los datos del formulario.
    console.log(formData);
  };

  return (
    <div className="text-black text-center flex flex-col items-center justify-center min-h-screen mt-16">
      {/* Formulario de Contacto */}
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-xl bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-left text-lg font-semibold">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-left text-lg font-semibold">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-left text-lg font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-left text-lg font-semibold">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-left text-lg font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            rows="5"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>

      <h2 className="mt-8 text-xl font-[SpaceGroteskLight]">Encontranos en redes</h2>

      <div className="mt-4 space-x-8">
        <a href="https://instagram.com" className="hover:underline font-[SpaceGroteskBold]">INSTAGRAM</a>
        <a href="https://github.com" className="hover:underline font-[SpaceGroteskBold]">WHATSAPP</a>
      </div>

      
    </div>
  );
};
