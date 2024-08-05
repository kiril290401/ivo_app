import React from "react";

const GoogleMaps = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1000.2852922801577!2d27.44628832777131!3d43.189250351950534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sbg!4v1722602702906!5m2!1ses-419!2sbg"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
