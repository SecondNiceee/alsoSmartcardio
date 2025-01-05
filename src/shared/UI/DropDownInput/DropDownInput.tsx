import { debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form';
import useFetchYears, { TypeSuggestion } from './hooks/useFetchYears';
import SuggestionsListComponent from './SuggestionsListComponent';
import Loader from '../Loader/Loader';




interface IDropDownInput<T extends FieldValues>{
    name : Path<T>,
    labelText : string,
    placeholder? : string,
    error? : FieldError | undefined,
    control : Control<T>
}
function DropDownInput<T extends FieldValues>({control, name} : IDropDownInput<T>){
    return (
        <Controller
            name={name}
            control={control}
            render={({field}) => {

                const { onChange} = field

                const [inputValue, setInputValue] = useState<string>("")

                const [filteredSuggestions, setFilteredSuggestions] = useState<TypeSuggestion[]>([]);

                const [activeSuggestion, setActiveSuggestion] = useState(0);
            
                const [showSuggestions, setShowSuggestions] = useState(false);

                const [isItemSelected, setItemSelected] = useState<boolean>(false)

                const [isLoading, setLoading] = useState<boolean>(false)

                const [fromEmpty, setFromEmpty] = useState<boolean>(true)

                const [fullName, setFullName] = useState<string>('')


                

                const fetchYears = useFetchYears({setFilteredSuggestions, setLoading, fromEmpty, setFromEmpty});

                const debouncedFetchCitys = useCallback( debounce((value) => {
                    fetchYears(value)
                } , 300 ), [] )
                 
                useEffect(() => {
                  if (inputValue.length > 0) {
                    debouncedFetchCitys(inputValue)
                    setShowSuggestions(true);
                  }
                }, [inputValue, isItemSelected]);
              
                const onClick = (suggestion : TypeSuggestion,  ):React.MouseEventHandler<HTMLLIElement> => (e:React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                   console.log(suggestion)
                    onChange(suggestion.code);
                    setFilteredSuggestions([]);
                    setShowSuggestions(false);
                    setItemSelected(true)
                    setInputValue(suggestion.full_name.split(',')[0])
                    setFullName(suggestion.full_name)
                  };



                const changeHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
                  if (e.target.value.length){
                      setLoading(true)

                  }
                  else{
                    setFromEmpty(true)
                  }
                  setInputValue(e.target.value)
                  setActiveSuggestion(0);
                };
              
                const onKeyDown:React.KeyboardEventHandler<HTMLInputElement> = (e) => {
                  if (e.keyCode === 13) { // Enter key
                    onChange(filteredSuggestions[activeSuggestion]);
                    setShowSuggestions(false);
                  } else if (e.keyCode === 38) { // Up arrow
                    if (activeSuggestion === 0) return;
                    setActiveSuggestion(activeSuggestion - 1);
                  } else if (e.keyCode === 40) { // Down arrow
                    if (activeSuggestion - 1 === filteredSuggestions.length) return;
                    setActiveSuggestion(activeSuggestion + 1);
                  }
                };

                const onBlur:React.FocusEventHandler<HTMLInputElement> = () => {
                  setTimeout( () => {
                      setShowSuggestions(false)
                    } , 150) 
                }

                const onFocus:React.FocusEventHandler<HTMLInputElement> = () => {
                  setShowSuggestions(true)
                }

                return  (
                    <div className='flex flex-col relative'>
                        {isLoading && <Loader width={'30'} classNames='absolute right-[10px] top-[-14px]' /> }

                        {showSuggestions && inputValue && !fromEmpty && <SuggestionsListComponent activeSuggestion={activeSuggestion} filteredSuggestions={filteredSuggestions} onClick={onClick} />}

                        <input className='p-2 p text-left border-black border-solid border-2 rounded-md' {...field} onFocus={onFocus} onBlur={onBlur}  onKeyDown={onKeyDown} value={inputValue} onChange={changeHandler} type="text" />

                        {fullName.length ? <p className='p mt-2 ml-2 text-grey  text-left'>{fullName}</p> : <></>}

                    </div>
                )

            }}

            >
            </Controller>
       
    );
};

export default DropDownInput;