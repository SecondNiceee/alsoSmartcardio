import React from 'react';
import { TypeSuggestion } from './hooks/useFetchYears';

const CitySuggestionList = ({filteredSuggestions, onClick, onTouch} : {filteredSuggestions:TypeSuggestion[], onClick:(code:TypeSuggestion) => React.MouseEventHandler<HTMLLIElement>,  onTouch:(code:TypeSuggestion) => React.TouchEventHandler<HTMLLIElement> }) => {

    
    return filteredSuggestions.length ? (
      <ul className='border-black border-t-0 w-[100%] border-solid border-[1px] rounded-md overflow-y-scroll cursor-pointer absolute left-0 top-[90px] z-40'>
        {filteredSuggestions.map((suggestion, index) => {
          return (
            <li className={"p-2 p w-[100%] text-left bg-white hover:bg-[#d5cdcd]"} onTouchStart={onTouch(suggestion)} key={index} onClick={onClick(suggestion)}>
              {suggestion.full_name}
            </li>
          );
        })}
      </ul>
    ) : (
      <div className="left-0 absolute top-[90px] border-black border-[1px] border-solid no-suggestions w-[100%] bg-white p-2 p text-lef">
        <em className='p'>По вашему запросу ничего не найдено</em>
      </div>
    );
  };


export default React.memo(CitySuggestionList);