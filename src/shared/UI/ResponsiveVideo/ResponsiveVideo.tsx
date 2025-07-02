import React, { FC } from 'react';
import Video from '../Video/Video';

type VideoProps = JSX.IntrinsicElements["video"]  
interface IResponsiveVideo {
    videoName : string,
    className : string,
    imageWidth : number,
    imageHeight : number,
    videoProps : VideoProps,
    darkOpacity? : number,
    imageLoading? : "eager" | "lazy" ,
    posterMedim : string,
    posterSmall : string
}
const ResponsiveVideo:FC<IResponsiveVideo> = ({  videoName, className, imageHeight, imageWidth, videoProps, darkOpacity = 0, imageLoading, posterMedim, posterSmall }) => {

  return (
    <div className={className}>

        <div className={`relative w-[100%] h-[100%] block md:hidden`}>
            <div className={`absolute left-0 top-0 w-[100%] h-[100%] bg-black z-[10]`} style={{opacity : darkOpacity}} />
            <img  loading = {imageLoading} src={posterMedim} alt='Poster' className={`${className} hidden 2xs:block`} />
            <img loading = {imageLoading} src={posterSmall} alt='Poster' className={`${className} block 2xs:hidden`}  />
        </div>
        
        <Video  darkOpacity = {darkOpacity} className={`${className} md:block hidden`} poster={posterMedim} {...videoProps} videoName={videoName} />

    </div>
  );
};

export default ResponsiveVideo;