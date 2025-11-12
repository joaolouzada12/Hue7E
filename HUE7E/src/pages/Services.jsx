import React from "react";
import styles from "./Services.module.css";
import { FaCode, FaPalette, FaBolt, FaGlobe } from "react-icons/fa";

function Services() {
  const servicesData = [
    {
      icon: <FaCode />,
      title: "Desenvolvimento Web",
      desc: "Sites rápidos, responsivos e com design profissional."
    },
    {
      icon: <FaPalette />,
      title: "Design Moderno",
      desc: "Layouts criativos e intuitivos, feitos sob medida para sua marca."
    },
    {
      icon: <FaBolt />,
      title: "Otimização",
      desc: "Melhoramos desempenho e tempo de carregamento de páginas."
    },
    {
      icon: <FaGlobe />,
      title: "Presença Online",
      desc: "Estratégias para fortalecer sua identidade digital."
    }
  ];

  return (
    <section className={styles.services} id="services">
      <h2 className={styles.title}>Nossos Serviços</h2>
      <div className={styles.serviceList}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.service}>
            <div className={styles.iconWrapper}>{service.icon}</div>
            <div className={styles.textArea}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
