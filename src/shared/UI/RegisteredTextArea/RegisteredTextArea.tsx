import  {  useEffect, useImperativeHandle, useRef } from 'react';
import { Control, FieldError, FieldValues, Path, UseFormRegister, useWatch } from 'react-hook-form';


interface ITextInput<T extends FieldValues>{
    title : string
    name : Path<T> ,
    register : UseFormRegister<T>,
    error : FieldError | undefined,
    maxLength? : number,
    control : Control<T>,
    placeholder : string
}

export default function RegisteredTextArea<T extends FieldValues>({error, name, register, title, maxLength, control, placeholder   } : ITextInput<T>){
    const value = useWatch({ control, name: name });
    const valueRef = useRef<HTMLTextAreaElement>(null)
    const hiddenRef = useRef<HTMLTextAreaElement>(null)

    const { ref, ...rest } = register(name)

    useEffect( () => {
        // textAreaRef.current.style.height = (12 + 11 + 17.6*len).toString() + 'px'
        if (hiddenRef.current && valueRef.current){
            valueRef.current.style.height = (hiddenRef.current.scrollHeight).toString() + 'px'
        }
    } , [value] )

    useImperativeHandle(ref, () => valueRef.current)

    return (
        <div className={"flex flex-col gap-2 items-center overflow-hidden"}>

            <label className={"p text-left"} htmlFor={name}>{title}</label>
            <div className={"border-black border-solid border-2 rounded-md flex flex-col w-[100%] relative gap-[10px] "}>

            <textarea ref={hiddenRef} value={value} readOnly className={`select-none text-left absolute  px-3 py-2 left-[0] opacity-0 -z-10 top-0 w-[100%] h-[200px]  max-h-[200px] rounded-md overflow-y-hidden p`}  />
                <textarea placeholder={placeholder}   maxLength={maxLength} className={"p resize-none w-[100%] py-2 px-3 text-left  h-[200px] min-h-[200px] rounded-md"} {...rest} ref={valueRef}  name={name} id={name} />
                <p className={"p self-end mr-3 mb-2"}>{value.length} / {maxLength}</p>
            </div>
            {error && <p className={"text-red-500 p"}>{error.message}</p>}
            
        </div>
    );
};
