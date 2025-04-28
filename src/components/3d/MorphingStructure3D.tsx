
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { Group } from 'three';

const MorphingStructure = () => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    
    // Apply subtle morphing effect to child meshes
    groupRef.current.children.forEach((child, i) => {
      if (child.type === 'Mesh') {
        child.rotation.x = Math.sin(state.clock.getElapsedTime() + i) * 0.1;
        child.rotation.z = Math.cos(state.clock.getElapsedTime() + i) * 0.1;
      }
    });
  });

  return (
    <Float speed={1} rotationIntensity={0.4} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Core structure */}
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial 
            color="#FFFFFF"
            wireframe={true}
            opacity={0.8}
            transparent={true}
          />
        </mesh>

        {/* Orbiting elements */}
        {[...Array(4)].map((_, i) => (
          <mesh 
            key={i}
            position={[
              Math.cos(i * Math.PI * 0.5) * 1.5,
              Math.sin(i * Math.PI * 0.5) * 1.5,
              0
            ]}
          >
            <tetrahedronGeometry args={[0.4]} />
            <meshStandardMaterial 
              color="#FFFFFF"
              wireframe={true}
              opacity={0.6}
              transparent={true}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const MorphingStructure3D = () => {
  return (
    <div className="h-[40vh] w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <MorphingStructure />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default MorphingStructure3D;
