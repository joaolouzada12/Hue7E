import { useState } from "react";
import styles from "./Services.module.css";
import { FaCode, FaPalette, FaCogs, FaRocket } from "react-icons/fa"; 

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null); 

  const services = [
    {
      title: "Desenvolvimento Web",
      icon: <FaCode />,
      text: "Criamos sites e aplicações web modernas, responsivas e otimizadas para performance, usando tecnologias como React, Node.js e mais."
    },
    {
      title: "Design UI/UX",
      icon: <FaPalette />,
      text: "Projetamos interfaces intuitivas e experiências de usuário excepcionais, com foco em usabilidade e estética para engajar seu público."
    },
    {
      title: "Consultoria em TI",
      icon: <FaCogs />,
      text: "Oferecemos assessoria especializada para otimizar processos, implementar soluções tecnológicas e garantir segurança digital."
    },
    {
      title: "Inovação e Prototipagem",
      icon: <FaRocket />,
      text: "Desenvolvemos protótipos rápidos e ideias inovadoras para transformar conceitos em produtos viáveis e escaláveis."
    }
  ];

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.services} aria-labelledby="services-title">
      <h2 id="services-title" className={styles.title}>Nossos Serviços</h2>
      <p className={styles.subtitle}>Soluções personalizadas para impulsionar seu negócio</p>

      <div className={styles.grid}>
        {services.map((service, i) => (
          <div 
            className={`${styles.service} ${activeIndex === i ? styles.active : ''}`} 
            key={i}
            onClick={() => toggleService(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') toggleService(i); }}
            aria-expanded={activeIndex === i}
            aria-label={`Saiba mais sobre ${service.title}`}
          >
            <div className={styles.header}>
              <span className={styles.icon} aria-hidden="true">{service.icon}</span>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
            </div>
            <p className={styles.serviceText}>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}