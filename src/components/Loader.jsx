import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 130,
      }}
    >
      <span className='canvas-loader' style={{ marginTop: 60 }}></span>
      <p
        style={{
          fontSize: 10,
          color: "white",
          fontWeight: 800,
          marginTop: -12, // Adjust this value to move the text lower
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
