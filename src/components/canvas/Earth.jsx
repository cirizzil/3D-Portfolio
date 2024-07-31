import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./cyber_samurai/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.25} position-y={-2.1} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, -2, 6],
      }}
    >
      {/* Lights */}
      <ambientLight intensity={0.8} color={"#ffffff"} /> {/* Bright ambient light */}
      
      {/* Directional Light */}
      <directionalLight 
        position={[10, 10, 10]} 
        intensity={2} 
        color={"#ffffff"}
        castShadow 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      {/* Additional Directional Light for Even More Brightness */}
      <directionalLight 
        position={[-10, -10, -10]} 
        intensity={1.5} 
        color={"#ffffff"}
      />
      
      {/* Point Light */}
      <pointLight position={[0, 20, 0]} intensity={2} color={"#ffffff"} />

      {/* Spot Light */}
      <spotLight position={[15, 20, 5]} angle={0.3} intensity={2} color={"#ffffff"} castShadow />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
