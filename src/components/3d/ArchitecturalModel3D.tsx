
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { Group } from 'three';

const ArchitecturalStructure = () => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Modern building base */}
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[2, 0.2, 2]} />
          <meshStandardMaterial 
            color="#FFFFFF" 
            wireframe={true}
            opacity={0.6}
            transparent={true}
          />
        </mesh>

        {/* Main tower */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 3, 1]} />
          <meshStandardMaterial 
            color="#FFFFFF" 
            wireframe={true}
            opacity={0.8}
            transparent={true}
          />
        </mesh>

        {/* Side wings */}
        <mesh position={[1.2, 0, 0]}>
          <boxGeometry args={[0.5, 2, 1]} />
          <meshStandardMaterial 
            color="#FFFFFF" 
            wireframe={true}
            opacity={0.6}
            transparent={true}
          />
        </mesh>

        <mesh position={[-1.2, 0, 0]}>
          <boxGeometry args={[0.5, 2, 1]} />
          <meshStandardMaterial 
            color="#FFFFFF" 
            wireframe={true}
            opacity={0.6}
            transparent={true}
          />
        </mesh>
      </group>
    </Float>
  );
};

const ArchitecturalModel3D = () => {
  return (
    <div className="h-[40vh] w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <ArchitecturalStructure />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ArchitecturalModel3D;
