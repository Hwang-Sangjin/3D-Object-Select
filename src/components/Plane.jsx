import useOnClickObj from "../store/useOnClickObj";

const Plane = () => {
  const { isOnClickObj, setIsOnClickObj } = useOnClickObj();
  return (
    <mesh
      onClick={() => {
        setIsOnClickObj(false);
      }}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[10, 10, 10, 10]} />
      <meshBasicMaterial side={2} color={"gray"} />
    </mesh>
  );
};

export default Plane;
