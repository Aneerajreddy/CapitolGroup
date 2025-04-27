
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.cjs';

interface ParticleFieldProps {
  count?: number;
}

const ParticleField = ({ count = 3000 }: ParticleFieldProps) => {
  const pointsRef = useRef<Points>(null);
  
  // Generate random points in a leaf-like pattern
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = random.float() * Math.PI * 2;
    const radius = Math.pow(random.float(), 0.5) * 2;
    const y = (random.float() - 0.5) * 2;
    
    points[i * 3] = Math.cos(theta) * radius;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = Math.sin(theta) * radius;
  }
  
  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });
  
  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#F2FCE2"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
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
