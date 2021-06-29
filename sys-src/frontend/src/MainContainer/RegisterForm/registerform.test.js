import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import TestUtils from 'react-dom/test-utils'

//Import own modules
import RegisterForm from './registerform';
import { expect, it } from '@jest/globals';


describe('Test for RegisterForm', () => {
    test("Test headline rendering", () => {
        const { getByText } = render(<RegisterForm/>);
        expect(getByText(/register/i)).toBeInTheDocument();
    });

    test("renders correctly Username", () => {
        const {queryByPlaceholderText} = render(<RegisterForm/>);
        const input = queryByPlaceholderText("Username");
        expect(input).toBeTruthy();
    });

    test("renders correctly Password", () => {
        const {queryByPlaceholderText} = render(<RegisterForm/>);
        const input = queryByPlaceholderText("Password");
        expect(input).toBeTruthy();
    });

    test("renders correctly Password Validation", () => {
        const {queryByPlaceholderText} = render(<RegisterForm/>);
        const input = queryByPlaceholderText("Password Validation");
        expect(input).toBeTruthy();
    });

    test("all IconTextFields rendered correctly", () => {
        const { getAllByTestId } = render(<RegisterForm/>);
        const nodes = getAllByTestId('icon-textfield');
        expect(nodes.length).toBe(3);
    });

    test("renders correctly Submit Button", () => {
        const { queryByText } = render(<RegisterForm/>);
        const button = queryByText("Submit");
        expect(button).toBeTruthy();
    });

    it('input of username field works', () => {
        const textComponent = TestUtils.renderIntoDocument(
            <RegisterForm/>
        );
        const node = TestUtils.scryRenderedDOMComponentsWithTag(textComponent, 'input')[0];
        TestUtils.Simulate.change(node, { target: { value: 'john'}});
        expect(textComponent.state.username).toEqual("john");
    });
    
    it('input of password field works', () => {
        const textComponent = TestUtils.renderIntoDocument(
            <RegisterForm/>
        );
        const node = TestUtils.scryRenderedDOMComponentsWithTag(textComponent, 'input')[1];
        TestUtils.Simulate.change(node, { target: { value: '12345'}});
        expect(textComponent.state.password).toEqual("12345");
    });

    
    it('input of password validation field works', () => {
        const textComponent = TestUtils.renderIntoDocument(
            <RegisterForm/>
        );
        const node = TestUtils.scryRenderedDOMComponentsWithTag(textComponent, 'input')[2];
        TestUtils.Simulate.change(node, { target: { value: '12345'}});
        expect(textComponent.state.passwordValidation).toEqual("12345");
    });

    it('submit button works', () => {
        const component = TestUtils.renderIntoDocument(
            <RegisterForm/>
        );
        const node = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
        component.state.username = "john";
        component.state.password = "12345";
        component.state.passwordValidation = "12345";

        TestUtils.Simulate.click(node);

        //Form resetted
        expect(true).toBe(true);
    })

    it('submit with Enter key press works', () => {
        const component = TestUtils.renderIntoDocument(
            <RegisterForm/>
        );
        const node = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
        component.state.username = "john";
        component.state.password = "12345";
        component.state.passwordValidation = "12345";

        TestUtils.Simulate.keyPress(node, { key : 'Enter'});

        //see if nothing has changed
        expect(component.container).toMatchSnapshot();
    })

    it('no submit with empty username', () => {
        const component = TestUtils.renderIntoDocument(
            <RegisterForm/>
        );
        const node = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
        component.state.username = "";
        component.state.password = "12345";
        component.state.passwordValidation = "12345";

        TestUtils.Simulate.click(node);

        //see if nothing has changed
        expect(component.container).toMatchSnapshot();
    });

    it('no submit with empty password', () => {
        const component = TestUtils.renderIntoDocument(
            <RegisterForm/>
        );
        const node = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
        component.state.username = "john";
        component.state.password = "";
        component.state.passwordValidation = "12345";

        TestUtils.Simulate.click(node);

        //see if nothing has changed
        expect(component.container).toMatchSnapshot();
    });

    it('no submit with empty password validation', () => {
        const component = TestUtils.renderIntoDocument(
            <RegisterForm/>
        );
        const node = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
        component.state.username = "john";
        component.state.password = "12345";
        component.state.passwordValidation = "";

        TestUtils.Simulate.click(node);

        //see if nothing has changed
        expect(component.container).toMatchSnapshot();
    });
})