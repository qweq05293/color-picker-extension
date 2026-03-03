import { Copy } from "lucide-react";
import { Button } from "./ui/button";

export function CopyButton({ text }: { text: string }) {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <Button variant="outline" size="sm" className="flex gap-2" onClick={copyToClipboard}>
      <span>{text}</span>
      <Copy className="w-4 h-4 text-primary" />
    </Button>
  );
}
