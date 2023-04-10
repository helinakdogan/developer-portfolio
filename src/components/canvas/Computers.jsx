import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {

  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (

    //instead of div, we use mesh
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />

      {/* light on the top*/}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      {/* this is point light on monitor screen visual */}
      <pointLight intensity={1} />

      <primitive
        object={computer.scene}
        //change size of it if it's mobile
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};



//this is for keeping visual properly on mobile device
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //add a listener for changes to the screen size - check if it is on mobile
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    //set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    //define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    //add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);


    //remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (

    //camera position is where user look at visual from and fov is field of view
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >

      {/* this is from react, not three.js */}
      <Suspense fallback={<CanvasLoader />}>
        {/* these controls allows user to move visual from right to left */}
        <OrbitControls
          //no need to zoom
          enableZoom={false}
          //this is for turning canvas around a spesific angle, axis
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;