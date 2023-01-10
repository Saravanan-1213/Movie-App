import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("orange");
  const styles = {
    background: color
  };

  const [colorList, setColorList] = useState(
    ["red",
      "green",
      "blue",
      "pink"
    ]);
  return (
    <div>
      <input style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a color"
        value={color} />

      {/* Copy the existing color and add a new color */}
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>

      {colorList.map((clr) => <ColorBox color={clr} />)}
    </div>

  );
}
