import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { EffectComposer, Outline } from "@react-three/postprocessing";
import useOnClickObj from "../store/useOnClickObj";
import { useEffect } from "react";

const Effects = () => {
  const { size } = useThree();

  const { isOnClickObj, setIsOnClickObj } = useOnClickObj();

  useEffect(() => {
    console.log(isOnClickObj);
  }, [isOnClickObj]);

  return (
    <EffectComposer
      stencilBuffer
      disableNormalPass
      autoClear={false}
      multisampling={4}
    >
      <Outline
        visibleEdgeColor={isOnClickObj ? "orange" : "white"}
        hiddenEdgeColor="white"
        blur
        width={size.width * 1.25}
        edgeStrength={10}
      />
    </EffectComposer>
  );
};

export default Effects;
