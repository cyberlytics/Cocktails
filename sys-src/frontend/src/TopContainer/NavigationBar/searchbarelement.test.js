import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import SearchBar from './searchbarelement'

test("renders Suchfunktion correctly", () => {
    const {queryByPlaceholderText} = render(<SearchBar/>)
    const input = queryByPlaceholderText("Suche")
    expect(input).toBeTruthy()
})

test("handle onChange event", () => {
  const searchCocktail = jest.fn((value) => {})
  const cocktailList = [{name: 'WhiteRussian'}, {name: 'Mojito'}]
  const {queryByPlaceholderText} = render(<SearchBar allcocktails={cocktailList} onSearchFiltered={searchCocktail}/>)
  const input = queryByPlaceholderText("Suche")
  fireEvent.change(input, {target: {value: "WhiteRussian"}})
  expect(input.value).toBe("WhiteRussian")
})
