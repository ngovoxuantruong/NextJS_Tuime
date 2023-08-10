import React, { useEffect } from 'react';

const Capcha = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js'; // Đường dẫn tới script reCAPTCHA
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="mt-4">
      <div
        className="g-recaptcha"
        data-sitekey="6Ldu_5AnAAAAAGc3gVApW0rEfmlwrmGOshvXEjcJ"
      ></div>
    </div>
  );
};

export default Capcha;
