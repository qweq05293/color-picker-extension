import { toast } from "sonner";

export async function copyTextToClipboard(text: string, showToast: boolean = true) {
  await navigator.clipboard.writeText(text);
  if(showToast){
    toast.success(chrome.i18n.getMessage("copied_to_clipboard"));
  }
}
