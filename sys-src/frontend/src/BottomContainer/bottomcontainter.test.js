import React from 'react';
import { render, screen } from '@testing-library/react';
import BottomContainer from './bottomcontainer'
import '@testing-library/jest-dom/extend-expect';

test("render Impressum in BottomContainer correctly", () => {
    render(<BottomContainer value={"Impressum"}/>)
    const button = screen.getByText("Impressum")
    expect(button).toBeTruthy()
})

test("render Datenschutz in BottomContainer correctly", () => {
    render(<BottomContainer value={"Datenschutz"}/>)
    const button = screen.getByText("Datenschutz")
    expect(button).toBeTruthy()
})