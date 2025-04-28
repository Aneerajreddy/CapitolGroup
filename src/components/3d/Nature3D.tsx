
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { Group } from 'three';

const TreeStructure = () => {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
      <group ref={groupRef}>
        {/* Stylized tree trunk */}
        <mesh position={[0, -1, 0]}>
          <cylinderGeometry args={[0.2, 0.4, 2]} />
          <meshStandardMaterial 
            color="#FFFFFF"
            wireframe={true}
            emissive="#CCCCCC"
          />
        </mesh>
        
        {/* Tree foliage */}
        <mesh position={[0, 0.8, 0]}>
          <coneGeometry args={[1.2, 2.5, 6]} />
          <meshStandardMaterial 
            color="#FFFFFF"
            wireframe={true}
            emissive="#CCCCCC"
            opacity={0.7}
            transparent={true}
          />
        </mesh>
        
        {/* Additional nature elements */}
        <mesh position={[1, -1.5, 0.5]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[0.4, 0.1, 0.4]} />
          <meshStandardMaterial 
            color="#FFFFFF"
            wireframe={true}
            opacity={0.5}
            transparent={true}
          />
        </mesh>
      </group>
    </Float>
  );
};

const Nature3D: React.FC = () => {
  return (
    <div className="h-[50vh] w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <TreeStructure />
        <Environment preset="forest" />
      </Canvas>
    </div>
  );
};

export default Nature3D;
