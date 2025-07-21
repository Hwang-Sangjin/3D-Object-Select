import { Canvas } from "@react-three/fiber";
import { Chair1 } from "./model/Chair1";
import {
  Environment,
  OrbitControls,
  TransformControls,
} from "@react-three/drei";
import Plane from "./Plane";
import { Suspense, useRef, useState } from "react";
import { Selection } from "@react-three/postprocessing";
import Effects from "./Effects";
import ObjectsScene from "../ObjectsScene";

const Scene = () => {
  return (
    <Canvas>
      <Suspense>
        <Environment preset="city" />
        <Selection>
          <Effects />
          <ObjectsScene />
        </Selection>

        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
