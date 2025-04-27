
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float } from '@react-three/drei';
import { Mesh } from 'three';

const ArchitecturalStructure = () => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.10;
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={meshRef} scale={1.5}>
        {/* Base building structure */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 2, 1]} />
          <meshStandardMaterial 
            color="#FFFFFF" 
            wireframe={true}
            emissive="#CCCCCC"
            roughness={0.7}
            metalness={0.5}
          />
        </mesh>
        
        {/* Additional architectural elements */}
        <mesh position={[0.7, 0.3, 0]}>
          <boxGeometry args={[0.5, 1.2, 0.5]} />
          <meshStandardMaterial 
            color="#FFFFFF" 
            wireframe={true} 
            opacity={0.7}
            transparent={true}
            emissive="#CCCCCC"
          />
        </mesh>
        
        <mesh position={[-0.6, -0.2, 0.2]}>
          <boxGeometry args={[0.4, 0.8, 0.4]} />
          <meshStandardMaterial 
            color="#FFFFFF" 
            wireframe={true}
            opacity={0.7}
            transparent={true}
            emissive="#CCCCCC"
          />
        </mesh>
      </group>
    </Float>
  );
};

const Scene3D: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <ArchitecturalStructure />
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
