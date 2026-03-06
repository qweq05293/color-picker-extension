import { toast } from "sonner";

export async function copyTextToClipboard(text: string) {
  await navigator.clipboard.writeText(text);
  toast.success(chrome.i18n.getMessage("copied_to_clipboard"));
}
