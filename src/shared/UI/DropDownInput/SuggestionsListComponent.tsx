import React from 'react';
import { TypeSuggestion } from './hooks/useFetchYears';

const SuggestionsListComponent = ({filteredSuggestions, activeSuggestion, onClick} : {filteredSuggestions:TypeSuggestion[], activeSuggestion:number, onClick:(code:TypeSuggestion) => React.MouseEventHandler<HTMLLIElement>}) => {

    
    return filteredSuggestions.length ? (
      <ul className='border-black border-t-0 w-[100%] border-solid border-[1px] rounded-md overflow-y-scroll cursor-pointer absolute left-0 bottom-[0px] translate-y-[100%]'>
        {filteredSuggestions.map((suggestion, index) => {
          let className;
          if (index === activeSuggestion) {
            className = "suggestion-active";
          }
          return (
            <li className={"p-2 p w-[100%] text-left bg-white hover:bg-[#d5cdcd]"} key={index} onClick={onClick(suggestion)}>
              {suggestion.full_name}
            </li>
          );
        })}
      </ul>
    ) : (
      <div className="left-0 absolute bottom-[0px] border-black border-[1px] border-solid translate-y-[100%] no-suggestions w-[100%] bg-white p-2 p text-lef">
        <em className='p'>По вашему запросу ничего не найдено</em>
      </div>
    );
  };


export default SuggestionsListComponent;