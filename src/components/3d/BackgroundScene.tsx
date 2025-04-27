
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.cjs';
import { BufferGeometry, Object3D } from 'three';

interface ParticleFieldProps {
  count?: number;
}

const ParticleField = ({ count = 5000 }: ParticleFieldProps) => {
  const pointsRef = useRef<Object3D>(null);
  
  // Generate random points
  const sphere = random.inSphere(new Float32Array(count * 3), { radius: 1.5 });
  
  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
  });
  
  return (
    <>
      <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </>
  );
};

const BackgroundScene: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default BackgroundScene;
