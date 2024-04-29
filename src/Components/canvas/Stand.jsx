import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


import CanvasLoader from "../Loader";

const Stand = ({ isMobile }) => {
  const stand = useGLTF("../../../public/standnexuscr.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1.5}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[0, 1, 2]} intensity={15} />
      <primitive
        object={stand.scene}
        scale={isMobile ? 0.5 : 0.7} // BEGIN: Adjust scale for small screens
        position={isMobile ? [0, 2, -.7] : [0, -1, -1.5]}
        rotation={[-0.01, -0.2, 0]}
      />
    </mesh>
  );
};

const StandCanvas = () => {
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
      camera={{ position: [5, 0, 35], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stand isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default StandCanvas;
