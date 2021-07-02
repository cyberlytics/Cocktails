import React from 'react'
import {  render } from '@testing-library/react'
import TopContainer from "./topcontainer"
import { expect } from '@jest/globals'
import "@testing-library/jest-dom/extend-expect";

test("Render TopContainer correctly with Favorites", () => {
    const {queryByText} = render(<TopContainer/>)
    const input = queryByText("Favoriten")
    expect(input).toBeTruthy()
})

test("Render TopContainer correctly with Cocktail erstellen", () => {
    const {queryByText} = render(<TopContainer/>)
    const input = queryByText("Cocktail erstellen")
    expect(input).toBeTruthy()
})