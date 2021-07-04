import React from 'react'
import Impressum from './impressum'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

test("render Datenschutz correctly", () => {
    render(<Impressum />)
    expect(screen.getByText("Angaben gemäß § 5 TMG")).toBeInTheDocument()  
})