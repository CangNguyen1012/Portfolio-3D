import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLight from "./HeroLight";
import Particles from "./Particles";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 20 }}>
      <Particles />
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0, 0]}
        autoRotate
        autoRotateSpeed={2}
        enableDamping
        dampingFactor={0.05}
      />
      <HeroLight />
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -1, 0]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
