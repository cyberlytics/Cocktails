import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import BottomContainer from './bottomcontainer'
import Datenschutz from '../MainContainer/Datenschutz/datenschutz'
import Impressum from '../MainContainer/Impressum/impressum'
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
/*
test("click Datenschutz in BottomContainer", () =>{
    render(<BottomContainer/>)
    fireEvent.click(screen.getByText("Datenschutz"))
    expect(render(<Datenschutz/>)).toBeTruthy()
})

//const datenschutzerklärung = screen.getByText("Datenschutzerklärung").toBeInTheDocument() 
// expect(screen.getByText("Sahne leicht anschlagen, so dass sie noch fließt und nicht steif ist")).toBeInTheDocument()  
*/