import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Standnexuscr from "../../public/Standnexuscr.jsx";

const Stand = () => {
  const rotation = [0.2, 0, 0];

  return (
    <section
      className="snap-start h-[calc(100vh-90px)] w-screen flex items-center justify-around bg-black"
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
      <div className="h-full w-[90vh] flex items-center justify-center">
        <Canvas>
          <ambientLight />
          <OrbitControls
            autoRotate={false}
            enableZoom={true}
            enablePan={false}
            dampingFactor={1}
            target={[0, 0, 0]}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
          <Suspense fallback={null}>
            <Standnexuscr
              position={[0, 0, 0]}
              scale={2}
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
