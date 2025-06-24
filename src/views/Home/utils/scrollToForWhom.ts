export const scrollToForWhom = () => {
  
    const forWhom = document.getElementById("forwhom")
    console.log(forWhom);
    
    if (forWhom) {
      forWhom.scrollIntoView({ behavior: 'smooth' });
    }
    
}