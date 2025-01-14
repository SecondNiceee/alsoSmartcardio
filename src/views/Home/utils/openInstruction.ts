import { openPdfInNewTab } from "@/shared/utils/openPdfInNewTab";

export function openInstruction(){
    const instrucitonPath = "/pdf/smartcardio.pdf";
    openPdfInNewTab(instrucitonPath)
}