import React, { CSSProperties, FC } from 'react';
import cl from "./_Video.module.scss"

interface IVideo{
    styles? : CSSProperties,
    className? : string,
    videoName : string,
    darkOpacity? : number,
    videoClassName? : string

}
const Video:FC<IVideo> = ({className = "" , videoClassName = "" ,styles = {}, videoName, darkOpacity = 0}) => {
    return (
        <div className={`${cl.videoWrapper} ${className}`}>
            <div className={cl.darkBlock} style={{
                opacity : darkOpacity
            }}>
            </div>
            <video className={`${cl.video} ${videoClassName}`} controlsList='nodownload' playsInline autoPlay muted loop style={styles} >
                <source type="video/mp4" src={`videos/${videoName}`}  />
                Hello hello
            </video>
        </div>
    );
};

export default React.memo(Video);