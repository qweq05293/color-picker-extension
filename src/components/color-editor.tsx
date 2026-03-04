import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/dist/css/rcp.css";

type Props = {
  initialColor: string;
  onChange: (color: string) => void;
};

export function ColorEditor({ initialColor, onChange }: Props) {
  const [color, setColor] = useColor(initialColor);

  return <ColorPicker
    hideInput={["rgb", "hsv"]}
    color={color}
    onChange={(c) => {
      setColor(c);
      onChange(c.hex);
    }} />
}