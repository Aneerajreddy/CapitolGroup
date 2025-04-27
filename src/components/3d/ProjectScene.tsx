
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Plane, Text, useTexture, Environment } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';

interface ProjectSceneProps {
  imageUrl: string;
  title: string;
}

const FloatingImage = ({ imageUrl, title }: ProjectSceneProps) => {
  const meshRef = useRef<Mesh>(null);
  const { viewport } = useThree();
  
  const texture = useTexture(imageUrl);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.02;
  });

  const aspectRatio = texture.image ? texture.image.width / texture.image.height : 1;
  const width = Math.min(viewport.width * 0.6, 6);
  const height = width / aspectRatio;

  return (
    <group>
      <Plane ref={meshRef} args={[width, height]} position={[0, 0, 0]}>
        <meshBasicMaterial map={texture} />
      </Plane>
      
      <Text
        position={[0, -height/2 - 0.5, 0]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="top"
      >
        {title}
      </Text>
    </group>
  );
};

const ProjectScene: React.FC<ProjectSceneProps> = ({ imageUrl, title }) => {
  return (
    <div className="h-[50vh] w-full">
      <Canvas>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <FloatingImage imageUrl={imageUrl} title={title} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default ProjectScene;
