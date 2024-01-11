"use client";

import { useRef, useState, useEffect } from "react";

import { useSelectedIngredientsContext } from "@/context/selected-ingredients-context";
import { getAllIngredientNames } from "@/lib/recipeUtils";

export default function Searchbar() {
  const { addIngredient, ingredients } = useSelectedIngredientsContext();

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [allIngredientNames, setAllIngredientNames] = useState<string[]>([]);
  const suggestionsListRef = useRef<HTMLUListElement | null>(null);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] =
    useState<number>(-1);

  useEffect(() => {
    const allIngredients = async () => {
      try {
        const fetchedIngredientNames = await getAllIngredientNames();
        setAllIngredientNames(fetchedIngredientNames);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    };

    allIngredients();
  }, [ingredients]);

  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearchTerm(value);

    let filteredSuggestions: string[] = [];

    if (value.length > 1) {
      filteredSuggestions = allIngredientNames.filter(
        (ingredient) =>
          ingredient.toLowerCase().includes(value.toLowerCase()) &&
          !ingredients.includes(ingredient)
      );
    }

    setSuggestions(filteredSuggestions);
  };

  const onSuggestionClickHandler = (suggestion: string) => {
    addIngredient(suggestion);
    setSuggestions([]);
    setSearchTerm("");
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      suggestionsListRef.current &&
      !suggestionsListRef.current.contains(event.target as Node)
    ) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
      );
    } else if (event.key === "ArrowUp") {
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
      );
    } else if (event.key === "Enter" && selectedSuggestionIndex !== -1) {
      onSuggestionClickHandler(suggestions[selectedSuggestionIndex]);
    }
  };
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        className="w-full p-4 ps-10 border-2 border-black/[0.1] transition-colors focus:outline-none focus:border-blue-200 rounded-md"
        placeholder="Sök ingrediens"
        onChange={onSearchHandler}
        onKeyDown={onKeyDownHandler}
        value={searchTerm}
      />
      {suggestions.length > 0 && (
        <ul
          ref={suggestionsListRef}
          className="absolute z-10 left-0 w-full mt-2 bg-white border border-gray-300 rounded"
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={`p-2 hover:bg-gray-200 cursor-pointer ${
                index === selectedSuggestionIndex ? "bg-gray-200" : ""
              }`}
              onClick={() => onSuggestionClickHandler(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
