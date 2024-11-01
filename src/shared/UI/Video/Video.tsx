import React, { CSSProperties, FC } from 'react';
import cl from "./_Video.module.scss"

interface IVideo{
    styles? : CSSProperties,
    className? : string,
    videoName : string,
    darkOpacity? : number,

}
const Video:FC<IVideo> = ({className = "" , styles = {}, videoName, darkOpacity = 0}) => {
    return (
        <div className={`${cl.videoWrapper} ${className}`}>
            <div className={cl.darkBlock} style={{
                opacity : darkOpacity
            }}>
            </div>
            <video className={cl.video} controlsList='nodownload' playsInline autoPlay muted loop style={styles} >
                <source type="video/mp4" src={`videos/${videoName}`}  />
                Hello hello
            </video>
        </div>
    );
};

export default React.memo(Video);