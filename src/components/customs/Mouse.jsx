import useBackground from "../../hooks/useBackground";

const Mouse = () => {
const {position,half,background} = useBackground();
  const styles = {
    backgroundColor: background,
    width: "100%",
    position: "absolute",
    height: "100vh",
    color: half ? "#F2F2F2" : "#FF0000",
  };

  return (
    <div style={styles}>
      <pre>{JSON.stringify({ position, half }, 2, null)}</pre>
    </div>
  );
};

export default Mouse;
