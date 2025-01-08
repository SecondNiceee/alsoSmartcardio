import React, { FC } from 'react';
import { TypeOffice } from '../../model/TypeOffice';


interface IDeliveryPointsSuggestionList{
    suggestions : TypeOffice[],
    onClick : (suggestion : TypeOffice) => () => void
}
const DeliveryPointsSuggestionList:FC<IDeliveryPointsSuggestionList> = ({suggestions, onClick}) => {
    return suggestions.length ? (
        <ul className='border-black border-t-0 w-[100%] border-solid border-[1px] rounded-md overflow-y-scroll max-h-[240px] cursor-pointer absolute left-0 top-[90px] z-40'>
          {suggestions.map((suggestion, index) => {
            return (
              <li className={"p-2 p w-[100%] text-left bg-white hover:bg-[#d5cdcd]"} key={index} onClick={onClick(suggestion)}>
                {suggestion.name}
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

export default React.memo(DeliveryPointsSuggestionList);