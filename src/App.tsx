import { useState } from "react";
import { Title } from "./components/app-title";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";

export function App() {
    const [color, setColor] = useState<string | null>(null);

   const pickColor = async () => {

    if (!("EyeDropper" in window)) {
      alert("Not supported");
      return;
    }

    const eyeDropper = new EyeDropper();

    try {

      const result = await eyeDropper.open();

      setColor(result.sRGBHex);

      await chrome.storage.local.set({
        lastColor: result.sRGBHex
      });

    } catch {
      console.log("cancelled");
    }

  };


    return (
        <div className="p-4 w-85 flex flex-col gap-4 bg-radial-primary">
            {/* Header */}
            <div className="flex items-center justify-between">
                <Title
                    text={chrome.i18n.getMessage("extension_name")}
                    align="left"
                    size="lg"
                />
                <ModeToggle />
            </div>
            <Button
                variant="default"
                onClick={pickColor}
            >
                Pick Color
            </Button>

            {color && (
                <div className="flex items-center gap-2">

                    <div
                        className="w-8 h-8 rounded border"
                        style={{ backgroundColor: color }}
                    />

                    <span>{color}</span>

                </div>
            )}
        </div>
    )
}

export default App;