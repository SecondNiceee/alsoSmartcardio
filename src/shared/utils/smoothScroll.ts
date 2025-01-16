'use client'
export const smoothScrollToElement = (target: HTMLElement, duration: number = 500) => {
    // const start = window.pageYOffset;
    // const distance = target.getBoundingClientRect().top;
    // const startTime = performance.now();

    // const animateScroll = (currentTime: number) => {
    //     const timeElapsed = currentTime - startTime;
    //     const progress = Math.min(timeElapsed / duration, 1); // Ensure progress is between 0 and 1
    //     const run = start + distance * ease(progress);
    //     window.scroll(0, run);
    //     if (timeElapsed < duration) {
    //         requestAnimationFrame(animateScroll);
    //     }
    // };

    // const ease = (t: number) => {
    //     return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Ease-in-out quadratic
    // };

    // requestAnimationFrame(animateScroll);
};