import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ZoomControl = ({ isZoomEnabled, controlsRef }) => {
  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.enableZoom = isZoomEnabled;
    }
  });

  return null;
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isZoomEnabled, setIsZoomEnabled] = useState(false);
  const controlsRef = useRef();
  const [keysPressed, setKeysPressed] = useState({ c: false, b: false, j: false });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
  
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    const handleKeyDown = (event) => {
      if (['c', 'b', 'j'].includes(event.key.toLowerCase())) {
        setKeysPressed(prev => ({ ...prev, [event.key.toLowerCase()]: true }));
      }
    };

    const handleKeyUp = (event) => {
      if (['c', 'b', 'j'].includes(event.key.toLowerCase())) {
        setKeysPressed(prev => ({ ...prev, [event.key.toLowerCase()]: false }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (keysPressed.c && keysPressed.b && keysPressed.j) {
      setIsZoomEnabled(prev => !prev);
    }
  }, [keysPressed]);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          ref={controlsRef}
          enableZoom={isZoomEnabled}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <ZoomControl isZoomEnabled={isZoomEnabled} controlsRef={controlsRef} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;