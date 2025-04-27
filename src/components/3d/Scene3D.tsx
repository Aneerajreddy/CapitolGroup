
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float } from '@react-three/drei';
import { Mesh } from 'three';

const RotatingShape = () => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={1.5}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#ffffff" 
          wireframe={true}
          emissive="#000000"
          roughness={0.5}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const Scene3D: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <RotatingShape />
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
