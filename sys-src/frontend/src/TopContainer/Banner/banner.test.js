import React from 'react'
import { render } from '@testing-library/react'
import Banner from './banner'

test("render Banner correctly", () => {
    const { queryByText } = render(<Banner />)
    const banner = queryByText("Easy Cocktail Mixing")
    expect(banner).toBeTruthy()
})