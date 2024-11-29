export const smoothScroll = (pixels:number) => {
    window.scrollTo({
        top : pixels,
        behavior : "smooth"
    })
}