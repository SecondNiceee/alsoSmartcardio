import React, { FC } from 'react';
import {ColorRing} from "react-loader-spinner"

interface ILoader{
    width : string,
    classNames : string
}
const Loader:FC<ILoader> = ({width, classNames}) => {
    return (
        <ColorRing colors={['black', '', 'null', 'null', 'null']} wrapperClass={classNames} width={width}>
        </ColorRing>
    );
};

export default React.memo(Loader);