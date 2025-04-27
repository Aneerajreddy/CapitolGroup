
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.cjs';
import { Group } from 'three';

interface ParticleFieldProps {
  count?: number;
}

const ParticleField = ({ count = 3000 }: ParticleFieldProps) => {
  const pointsRef = useRef<Group>(null);
  
  // Generate random points in a leaf-like pattern
  // Create a Float32Array first and then pass it to inSphere to ensure correct typing
  const positions = new Float32Array(count * 3);
  const points = random.inSphere(positions, { radius: 2 });
  
  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });
  
  return (
    <group ref={pointsRef}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#F2FCE2"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const BackgroundScene: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default BackgroundScene;
