import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Standnexuscr from "../../public/Standnexuscr.jsx";

const Stand = () => {
  const rotation = [0, 0, 0];
  const position = [0, -0.8, 0];
  const scale = 0.4;

  return (
    <section
      className="snap-start h-[calc(100vh-90px)] w-screen flex flex-col lg:flex-row items-center justify-around bg-black"
      id="OurStand"
    >
      <div className="h-full w-screen flex items-start justify-center flex-col p-10 gap-5 max-w-[500px]">
        <h1 className="text-6xl font-SairaBold text-white text-start">
          Our Stand
        </h1>
        <p className="text-justify max-w-[500px] text-white text-xl">
          Únete a nosotros mientras llevamos la pasión por la Fórmula 1 a una
          nueva dimensión. ¡Descubre cómo Nexus redefine la velocidad y la
          innovación en F1 in Schools!
        </p>
      </div>
      <div className="flex h-[25em] w-[90vh] lg:h-full items-center justify-center">
        <Canvas className="cursor-grabbing">
          <hemisphereLight />
          <OrbitControls
            enableZoom={true}
            autoRotateSpeed={10}
            enablePan={false}
            dampingFactor={1}
            target={[0, 0, 0]}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
          <Suspense>
            <Standnexuscr
              position={position}
              scale={scale}
              rotation={rotation}
            />
          </Suspense>
          <Environment preset="city" />
        </Canvas>
      </div>
    </section>
  );
};

export default Stand;
