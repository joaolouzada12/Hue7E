import { useState } from "react"; 
import styles from "./About.module.css";
import { FaPaintBrush, FaMicrochip, FaLightbulb } from "react-icons/fa";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null); 

  const items = [
    {
      title: "Design",
      icon: <FaPaintBrush />,
      text: "Criamos interfaces modernas, simples e claras, focadas na experiência do usuário."
    },
    {
      title: "Tecnologia",
      icon: <FaMicrochip />,
      text: "Usamos ferramentas atuais para garantir performance e estabilidade."
    },
    {
      title: "Inovação",
      icon: <FaLightbulb />,
      text: "Buscamos soluções eficientes e ideias novas para cada projeto."
    }
  ];

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  return (
    <section className={styles.about} aria-labelledby="about-title">
      <h2 id="about-title" className={styles.title}>Sobre nós</h2>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <div 
            className={`${styles.item} ${activeIndex === i ? styles.active : ''}`} 
            key={i}
            onClick={() => toggleItem(i)} 
            role="button" 
            tabIndex={0} 
            onKeyDown={(e) => { if (e.key === 'Enter') toggleItem(i); }} 
            aria-expanded={activeIndex === i} 
            aria-label={`Saiba mais sobre ${item.title}`} 
          >
            <div className={styles.header}>
              <span className={styles.icon} aria-hidden="true">{item.icon}</span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
            </div>

            <p className={styles.itemText}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}