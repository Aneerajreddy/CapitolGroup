
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { Group } from 'three';

const TerrainStructure = () => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Base terrain */}
        <mesh position={[0, -0.5, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[2, 2, 0.5, 6]} />
          <meshStandardMaterial 
            color="#FFFFFF"
            wireframe={true}
            opacity={0.6}
            transparent={true}
          />
        </mesh>

        {/* Hills */}
        {[...Array(5)].map((_, i) => (
          <mesh 
            key={i}
            position={[
              Math.cos(i * Math.PI * 0.4) * 0.8,
              -0.2,
              Math.sin(i * Math.PI * 0.4) * 0.8
            ]}
          >
            <coneGeometry args={[0.4, 0.8, 4]} />
            <meshStandardMaterial 
              color="#FFFFFF"
              wireframe={true}
              opacity={0.8}
              transparent={true}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const Terrain3D = () => {
  return (
    <div className="h-[40vh] w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <TerrainStructure />
        <Environment preset="forest" />
      </Canvas>
    </div>
  );
};

export default Terrain3D;
