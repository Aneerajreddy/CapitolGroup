
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { Group } from 'three';

const DataStructure = () => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Central node */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial 
            color="#FFFFFF"
            wireframe={true}
            opacity={0.8}
            transparent={true}
          />
        </mesh>

        {/* Data points */}
        {[...Array(8)].map((_, i) => (
          <group key={i} rotation={[0, (i * Math.PI * 2) / 8, 0]}>
            <mesh position={[Math.cos(i) * 1.5, Math.sin(i) * 0.5, 0]}>
              <sphereGeometry args={[0.2, 8, 8]} />
              <meshStandardMaterial 
                color="#FFFFFF"
                wireframe={true}
                opacity={0.6}
                transparent={true}
              />
            </mesh>

            {/* Connecting lines */}
            <mesh position={[Math.cos(i) * 0.75, Math.sin(i) * 0.25, 0]}>
              <boxGeometry args={[1.5, 0.05, 0.05]} />
              <meshStandardMaterial 
                color="#FFFFFF"
                wireframe={true}
                opacity={0.4}
                transparent={true}
              />
            </mesh>
          </group>
        ))}
      </group>
    </Float>
  );
};

const DataViz3D = () => {
  return (
    <div className="h-[40vh] w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <DataStructure />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default DataViz3D;
