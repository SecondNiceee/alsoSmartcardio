import React, { FC } from 'react';

interface ISubmitButton{
    text : string,
    className? : string
}
const SubmitButton:FC<ISubmitButton> = ({text, className = ""}) => {
    return (
            <input
            className={`!bg-black text-white p-2 big-p w-[100%] mx-auto rounded-md ${className}`}
            type="submit"
            value={text}
            />
    );
};

export default SubmitButton;