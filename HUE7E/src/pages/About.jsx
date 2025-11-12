import React from "react";
import { FaPaintBrush, FaMicrochip, FaLightbulb, FaRocket } from "react-icons/fa";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2>Nossa Essência</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.inner}>
              <div className={styles.front}>
                <h3><FaPaintBrush className={styles.icon}/> Design</h3>
              </div>
              <div className={styles.back}>
                <p>
                  Criamos interfaces modernas e elegantes, com foco na experiência
                  do usuário e na harmonia visual de cada detalhe.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.inner}>
              <div className={styles.front}>
                <h3><FaMicrochip className={styles.icon}/> Tecnologia</h3>
              </div>
              <div className={styles.back}>
                <p>
                  Utilizamos tecnologias atuais e eficientes para garantir
                  performance, estabilidade e compatibilidade em todas as plataformas.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.inner}>
              <div className={styles.front}>
                <h3><FaLightbulb className={styles.icon}/> Inovação</h3>
              </div>
              <div className={styles.back}>
                <p>
                  Buscamos novas ideias e tendências para manter nossos projetos à frente,
                  unindo criatividade e estratégia.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.inner}>
              <div className={styles.front}>
                <h3><FaRocket className={styles.icon}/> Performance</h3>
              </div>
              <div className={styles.back}>
                <p>
                  Otimizamos cada linha de código para garantir carregamento rápido,
                  navegação fluida e a melhor experiência possível.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
