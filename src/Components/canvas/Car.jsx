import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Car = ({ isMobile }) => {
  const stand = useGLTF("./public/FiinalCar.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor='white' />
      <light
        position={[30, -50, -10]}
        angle={1}
        intensity={1}
      />
      <pointLight position={[5, 20, 5]} intensity={1000} />
      <pointLight position={[-5, -20, -5]} intensity={10000} />
      <primitive
        object={stand.scene}
        scale={isMobile ? 0.5 : 0.7} // BEGIN: Adjust scale for small screens
        position={isMobile ? [0, 0, 0] : [-3, 4, 0]}
        rotation={[0.45, -1, 0.02]}
      />
    </mesh>
  );
};

const CarCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 40], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}

>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Car isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CarCanvas;
