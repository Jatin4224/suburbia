"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

type Props = {};

export function InteractiveSkateboard({}: Props) {
  //If we call hook here it will show error nd say it will work inside the canvas
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <Canvas
        className="min-h-[60rem] w-full "
        camera={{ position: [1.5, 1, 1.4], fov: 55 }}
      >
        <Suspense>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

// we will need to create a new function here in teh same file u can call this anywhere

function Scene() {
  return (
    //we have diffrn elements inside canvas that we cant use in regular HTML
    <group>
      {/* //render cube */}
      <OrbitControls />
      <Environment files={"/hdr/warehouse-256.hdr"} />
      <mesh>
        <meshStandardMaterial />

        <boxGeometry />
      </mesh>
    </group>
  );
}
