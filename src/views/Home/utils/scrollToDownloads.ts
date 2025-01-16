

export const scrollToDownloads = () => {
  
    const downloads = document.getElementById("downloads")
    
    if (downloads) {
      downloads.scrollIntoView({ behavior: 'smooth' });
    }
    
}