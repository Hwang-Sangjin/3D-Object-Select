import { Select } from "@react-three/postprocessing";
import { Chair1 } from "./components/model/Chair1";
import Plane from "./components/Plane";
import { useCallback, useState } from "react";
import { debounce } from "lodash";

const ObjectsScene = () => {
  const [hovered, setHovered] = useState(null);

  const debouncedHover = useCallback(debounce(setHovered, 30), []);

  const over = (name) => (e) => (e.stopPropagation(), debouncedHover(name));

  return (
    <>
      <Plane />
      {/* Select 컴포넌트의 props에 명확한 핸들러를 전달합니다. */}
      <Chair1
        hovered={hovered}
        setHovered={setHovered}
        debouncedHover={debouncedHover}
        over={over}
      />
    </>
  );
};

export default ObjectsScene;
