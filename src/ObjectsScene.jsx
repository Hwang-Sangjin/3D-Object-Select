import { useCallback, useEffect, useRef, useState } from "react";

import { debounce } from "lodash";
import { Select } from "@react-three/postprocessing";

import { Chair1 } from "./components/model/Chair1";
import Plane from "./components/Plane";
import useOnClickObj from "./store/useOnClickObj";

const Scene = () => {
  const { isOnClickObj, setIsOnClickObj } = useOnClickObj();

  const [hovered, hover] = useState(null);

  // Debounce hover a bit to stop the ticker from being erratic
  const debouncedHover = useCallback(debounce(hover, 30), []);
  const over = (name) => (e) => (e.stopPropagation(), debouncedHover(name));

  return (
    <Select
      enabled={hovered === "Chair1" || isOnClickObj}
      onPointerOver={over("Chair1")}
      onPointerOut={() => {
        debouncedHover();
      }}
      onClick={(e) => {
        e.stopPropagation();
        setIsOnClickObj(true);
      }}
    >
      <Chair1 />
    </Select>
  );
};

export default Scene;
