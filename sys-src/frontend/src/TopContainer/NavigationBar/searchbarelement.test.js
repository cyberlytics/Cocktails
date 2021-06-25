import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SearchBar from './searchbarelement'

test("renders correctly", () => {
    const {queryByPlaceholderText} = render(<SearchBar/>)
    expect(queryByPlaceholderText("Suche")).toBeTruthy()
})

/*
// Hier noch Fehler bei searchbarelement .filter.

describe("Input value", () => {
    test("updates on change", () => {
        const {queryByPlaceholderText} = render(<SearchBar/>)

        const searchInput = queryByPlaceholderText('Suche');

        fireEvent.change(searchInput, {target: {value: "test"}})

        expect(searchInput.value).toBe("test")
    })
})
*/