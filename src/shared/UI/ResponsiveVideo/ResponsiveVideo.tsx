import Image from 'next/image';
import React, { useState, useEffect, FC } from 'react';
import Video from '../Video/Video';

type VideoProps = JSX.IntrinsicElements["video"]  
interface IResponsiveVideo {
    poster : string,
    videoName : string,
    className : string,
    imageWidth : number,
    imageHeight : number,
    videoProps : VideoProps,
    darkOpacity? : number
}
const ResponsiveVideo:FC<IResponsiveVideo> = ({ poster, videoName, className, imageHeight, imageWidth, videoProps, darkOpacity = 0 }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Установите порог для мобильных устройств
    };

    // Инициализируем состояние при монтировании компонента
    handleResize();

    // Добавляем обработчик события изменения размера окна
    window.addEventListener('resize', handleResize);

    // Очищаем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={className}>
      {isMobile ? (

        <div className={`relative w-[100%] h-[100%]`}>
            <div className={`absolute left-0 top-0 w-[100%] h-[100%] bg-black z-[10]`} style={{opacity : darkOpacity}} />
            <Image width={imageWidth} height={imageHeight} src={poster} alt='Poster' className={className} />
        </div>
        
      ) : (
        <Video  darkOpacity = {darkOpacity} className={className} poster={poster} {...videoProps} videoName={videoName} />
      )}
    </div>
  );
};

export default ResponsiveVideo;