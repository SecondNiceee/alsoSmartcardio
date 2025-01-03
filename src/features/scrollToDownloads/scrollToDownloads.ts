import { smoothScrollToElement } from "@/shared/utils/smoothScroll"

export const scrollToDownloads = () => {
    const downloads = document.getElementById("downloads")
    if (downloads){
      smoothScrollToElement(downloads, 1000)
    }
}