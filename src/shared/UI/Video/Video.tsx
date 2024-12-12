import React, { CSSProperties, FC } from 'react';
import cl from "./_Video.module.scss"


type VideoProps = JSX.IntrinsicElements["video"]  
interface IVideo extends VideoProps{
    styles? : CSSProperties,
    className? : string,
    videoName : string,
    darkOpacity? : number,
    videoClassName? : string

} 
const Video:FC<IVideo & VideoProps> = ({className = "" , videoClassName = "" ,styles = {}, videoName, darkOpacity = 0, ...props}) => {
    return (
        <div className={`${cl.videoWrapper} ${className}`}>
            <div className={cl.darkBlock} style={{
                opacity : darkOpacity
            }}>
            </div>
            <video className={`${cl.video} ${videoClassName}`} style={styles} {...props} >
                <source type="video/mp4" src={`videos/${videoName}`}  />
            </video>
        </div>
    );
};

export default React.memo(Video);