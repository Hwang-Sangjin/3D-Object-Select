const Plane = () => {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10, 10, 10]} />
      <meshBasicMaterial side={2} color={"gray"} />
    </mesh>
  );
};

export default Plane;
