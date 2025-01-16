
export const scrollToDevice = () => {
  
    const downloads = document.getElementById("smartcardio-slider")
    
    if (downloads) {
      downloads.scrollIntoView({ behavior: 'smooth' });
    }
    
}