import { debounce } from "lodash";
import React, { SetStateAction, useCallback, useState } from "react";
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import useFetchYears, { TypeSuggestion } from "./hooks/useFetchYears";
import Loader from "../Loader/Loader";
import { TypeStatus } from "@/shared/api/models";
import CitySuggestionList from "./CitySuggestionList";

interface IDropDownInput<T extends FieldValues> {
  name: Path<T>;
  labelText: string;
  placeholder?: string;
  error?: FieldError | undefined;
  control: Control<T>;
  onPickFunction: (par: number) => void;
  setIsCityPicked: React.Dispatch<SetStateAction<boolean>>;
  city: string;
  setCity: React.Dispatch<SetStateAction<string>>;
}

function CityChoicer<T extends FieldValues>({
  control,
  name,
  onPickFunction,
  setIsCityPicked,
  city,
  setCity,
}: IDropDownInput<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const { onChange } = field;

        const [inputValue, setInputValue] = useState<string>("");

        const [filteredSuggestions, setFilteredSuggestions] = useState<
          TypeSuggestion[]
        >([]);

        const [showSuggestions, setShowSuggestions] = useState(false);

        const [fromEmpty, setFromEmpty] = useState<boolean>(true);

        const [fetchStatus, setFetchStatus] = useState<TypeStatus>("fulfilled");

        const fetchYears = useFetchYears({
          setFilteredSuggestions,
          fromEmpty,
          setFromEmpty,
          setFetchStatus,
        });

        const debouncedFetchCitys = useCallback(
          debounce((value) => {
            fetchYears(value);
          }, 300),
          [fetchYears]
        );

        const onClick =
          (
            suggestion: TypeSuggestion
          ): React.MouseEventHandler<HTMLLIElement> =>
          (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
            setIsCityPicked(true);
            onChange(suggestion.code);
            onPickFunction(suggestion.code);
            setShowSuggestions(false);
            setInputValue(suggestion.full_name.split(",")[0]);
            setCity(suggestion.full_name);
          };

        const onTouch =
          (
            suggestion: TypeSuggestion
          ): React.TouchEventHandler<HTMLLIElement> =>
          (e: React.TouchEvent<HTMLLIElement>) => {
            setIsCityPicked(true);
            onChange(suggestion.code);
            onPickFunction(suggestion.code);
            setShowSuggestions(false);
            setInputValue(suggestion.full_name.split(",")[0]);
            setCity(suggestion.full_name);
          };

        const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (
          e
        ) => {
          setCity("");
          setIsCityPicked(false);
          onChange(null);
          if (e.target.value.length) {
            setFetchStatus("pending");
            debouncedFetchCitys(e.target.value.split(" ")[0]);
          } else {
            setFromEmpty(true);
          }
          setInputValue(e.target.value);
        };
        const onBlur: React.FocusEventHandler<HTMLInputElement> = () => {
          setTimeout(() => {
            setShowSuggestions(false);
          }, 150);
        };
        const onFocus: React.FocusEventHandler<HTMLInputElement> = () => {
          setShowSuggestions(true);
        };

        return (
          <div className="flex flex-col gap-2 relative">
            <label className="p text-left" htmlFor={name}>
              {"Город"}
            </label>

            {fetchStatus === "pending" && (
              <Loader
                width={"30"}
                classNames="absolute right-[10px] top-[25px]"
              />
            )}

            {showSuggestions &&
              inputValue &&
              !fromEmpty &&
              fetchStatus === "fulfilled" && (
                <CitySuggestionList
                  filteredSuggestions={filteredSuggestions}
                  onClick={onClick}
                  onTouch={onTouch}
                />
              )}

            <input
              autoComplete="nope"
              spellCheck={false}
              placeholder="Введите город"
              className="p-2 p text-left border-black border-solid border-2 rounded-md"
              {...field}
              onFocus={onFocus}
              onBlur={onBlur}
              value={inputValue}
              onChange={changeHandler}
              type="text"
            />

            {city.length ? (
              <p className="p mt-2 ml-2 text-grey  text-left">{city}</p>
            ) : (
              <></>
            )}
          </div>
        );
      }}
    ></Controller>
  );
}

export default React.memo(CityChoicer) as <T extends FieldValues>(
  props: IDropDownInput<T>
) => JSX.Element;
