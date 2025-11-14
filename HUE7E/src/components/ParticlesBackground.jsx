import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60, 
      interactivity: {
      events: {
         onHover: { enable: true, mode: "repulse" },
          onClick: { enable: false }
        },
       modes: {
         repulse: {
            distance: 180,   
            duration: 0.4    
         }
      }
    },
      particles: {
        color: {
          value: ["#00BFFF", "#FF00FF", "#00FFFF", "#FF6EC7", "#8A2BE2"],
        },
        links: {
          enable: true,
          color: {
            value: ["#00BFFF", "#FF00FF", "#00FFFF", "#FF6EC7", "#8A2BE2"],
          },
          distance: 180,
          opacity: 0.6,
          width: 1.3,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          outModes: { default: "out" },
        },
        number: { value: 120, density: { enable: true, area: 800 } }, 
        opacity: {
          value: 0.85,
          animation: { enable: true, speed: 0.4, minimumValue: 0.5 },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 2, max: 4 },
          animation: { enable: true, speed: 1.5, minimumValue: 1 },
        },
        shadow: {
          enable: true,
          color: "#ffffff",
          blur: 2.5,
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none", 
      }}
      role="presentation"
      aria-hidden="true"
    />
  );
}