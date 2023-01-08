import React from "react";
import { Button } from "react-bootstrap";

const ContactSection = () => {
  return (
    <section className="text-center">
      <div className="container text-stack">
        <h3>
          Ça vous a plu ?<br />
          N'hésitez pas à me contacter !
        </h3>
        <Button variant="primary" href="mailto:meloscavezzoni@gmail.com">
          Contactez-moi
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
