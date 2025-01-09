import React from 'react'

const Map = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245795.84053317798!2d-48.10217022315927!3d-15.72148702312245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18df9ae275%3A0x738470e469754a24!2zQnJhc8OtbGlhLCBERg!5e0!3m2!1spt-BR!2sbr!4v1734051281117!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </div>
  );
}

export default Map