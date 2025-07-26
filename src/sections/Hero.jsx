import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import { useMediaQuery } from "react-responsive";
import { BrainHologram } from "../components/Brain";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section id="home" className="flex items-start justify-center 
    min-h-screen overflow-hidden md:items-start md:justify-start c-space pt-10">
      <HeroText />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
              <BrainHologram
                scale={isMobile ? 1 : 1.45}
                position={isMobile ? [0, -1, 0] : [1.8, 0.1, 0]}/>
        </Canvas>
      </figure>
    </section>
  );
};


export default Hero;
