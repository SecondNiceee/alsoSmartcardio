export const createImageResolution = (imgSrc:string, resolution : number) => {
    const [imgPath, imgType] = imgSrc.split('.');
    return `${imgPath}-${resolution}px.${imgType}`;
}