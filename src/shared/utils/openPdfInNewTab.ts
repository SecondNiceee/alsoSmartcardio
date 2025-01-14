
export function openPdfInNewTab(pdfPath : string) {
    const newWindow = window.open(pdfPath, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }