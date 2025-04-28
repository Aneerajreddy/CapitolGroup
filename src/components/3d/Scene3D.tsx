
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import { Group } from 'three';

const ModernBuilding = () => {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
  });

  return (
    <Float speed={1} rotationIntensity={0.4} floatIntensity={0.5}>
      <group ref={groupRef} scale={1.5}>
        {/* Main building structure */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 3, 1]} />
          <meshStandardMaterial 
            color="#FFFFFF" 
            wireframe={true}
            emissive="#FFFFFF"
            emissiveIntensity={0.2}
            opacity={0.8}
            transparent={true}
          />
        </mesh>
        
        {/* Glass facade */}
        <mesh position={[0.6, 0, 0]}>
          <boxGeometry args={[0.1, 2.5, 0.8]} />
          <meshStandardMaterial 
            color="#FFFFFF" 
            wireframe={true}
            emissive="#FFFFFF"
            opacity={0.4}
            transparent={true}
          />
        </mesh>
        
        {/* Architectural details */}
        <mesh position={[-0.6, -0.5, 0]}>
          <boxGeometry args={[0.2, 1.5, 0.8]} />
          <meshStandardMaterial 
            color="#FFFFFF" 
            wireframe={true}
            emissive="#FFFFFF"
            opacity={0.4}
            transparent={true}
          />
        </mesh>
        
        {/* Roof structure */}
        <mesh position={[0, 1.6, 0]}>
          <boxGeometry args={[1.4, 0.1, 1.4]} />
          <meshStandardMaterial 
            color="#FFFFFF" 
            wireframe={true}
            emissive="#FFFFFF"
            opacity={0.6}
            transparent={true}
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
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <ModernBuilding />
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
