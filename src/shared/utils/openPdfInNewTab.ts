
'use client'
export function openPdfInNewTab(pdfPath : string) {
    if (typeof window === "object"){

      const newWindow = window.open(pdfPath, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
    }
  }