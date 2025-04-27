
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.cjs';
import { Group } from 'three';

interface ParticleFieldProps {
  count?: number;
}

const ParticleField = ({ count = 5000 }: ParticleFieldProps) => {
  const pointsRef = useRef<Group>(null);
  
  // Create a Float32Array and generate random points in a sphere pattern
  const positions = new Float32Array(count * 3);
  random.inSphere(positions, { radius: 3 });
  
  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.02;
  });
  
  return (
    <group ref={pointsRef}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#FFFFFF"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
};

const BackgroundScene: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default BackgroundScene;
