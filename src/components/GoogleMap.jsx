const GoogleMap = () => {
  return (
    <div className="grayscale-70 rounded-2xl overflow-hidden shadow-xl">
      <iframe
        allowFullScreen
        title="google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28317.809465401285!2d-79.70613693793263!3d44.5994621739076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2bcf2d73be3b9f%3A0xd5d2a8e7cf50c6f1!2s1%20Mississaga%20St%20E%2C%20Orillia%2C%20ON%20L3V%201V7%2C%20Canada!5e0!3m2!1sen!2sus!4v1709285931020!5m2!1sen!2sus"
        width="100%"
        height="500"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
