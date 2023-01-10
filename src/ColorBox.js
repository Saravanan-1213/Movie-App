
export function ColorBox({ color }) {
  const styles = {
    width: "250px",
    height: " 25px",
    background: color,
    marginTop: "10px"
  };
  return (
    <div style={styles}></div>
  );
}
