import React from 'react'
import Datenschutz from './datenschutz'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

test("render Datenschutz correctly", () => {
    render(<Datenschutz />)
    expect(screen.getByText("Datenschutzerklärung")).toBeInTheDocument()  
})