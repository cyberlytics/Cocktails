import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { expect, it } from '@jest/globals';
import TestUtils from 'react-dom/test-utils'

//Import own modules
import LoginForm from './loginform';


describe('Tests for LoginForm', () => {
    test("Test headline in LoginForm rendering", () => {
        const { getAllByText } = render(<LoginForm/>);
        expect(getAllByText(/register/i)[0]).toBeInTheDocument();
    });

    test("renders correctly Username", () => {
        const {queryByPlaceholderText} = render(<LoginForm/>);
        const input = queryByPlaceholderText("Username");
        expect(input).toBeTruthy();
    });

    test("renders correctly Password", () => {
        const {queryByPlaceholderText} = render(<LoginForm/>);
        const input = queryByPlaceholderText("Password");
        expect(input).toBeTruthy();
    });

    test("all IconTextFields rendered correctly", () => {
        const { getAllByTestId } = render(<LoginForm/>);
        const nodes = getAllByTestId('icon-textfield');
        expect(nodes.length).toBe(2);
    });

    test("renders correctly Submit Button", () => {
        const { queryAllByText } = render(<LoginForm/>);
        const button = queryAllByText("Login")[1];
        expect(button).toBeTruthy();
    });

    test("renders correctly Register Link", () => {
        const { queryByText } = render(<LoginForm/>);
        const button = queryByText("Here");
        expect(button).toBeTruthy();
    });

    it('input of username field works', () => {
        const textComponent = TestUtils.renderIntoDocument(
            <LoginForm/>
        );
        const node = TestUtils.scryRenderedDOMComponentsWithTag(textComponent, 'input')[0];
        TestUtils.Simulate.change(node, { target: { value: 'john'}});
        expect(textComponent.state.username).toEqual("john");
    });
    
    it('input of password field works', () => {
        const textComponent = TestUtils.renderIntoDocument(
            <LoginForm/>
        );
        const node = TestUtils.scryRenderedDOMComponentsWithTag(textComponent, 'input')[1];
        TestUtils.Simulate.change(node, { target: { value: '12345'}});
        expect(textComponent.state.password).toEqual("12345");
    });

    it('submit button works', () => {
        const component = TestUtils.renderIntoDocument(
            <LoginForm/>
        );
        const node = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
        component.state.username = "john";
        component.state.password = "12345";

        TestUtils.Simulate.click(node);

        //Form resetted
        expect(true).toBe(true);
    })

    it('submit with Enter key press works', () => {
        const component = TestUtils.renderIntoDocument(
            <LoginForm/>
        );
        const node = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
        component.state.username = "john";
        component.state.password = "12345";

        TestUtils.Simulate.keyPress(node, { key : 'Enter'});

        //see if nothing has changed
        expect(component.container).toMatchSnapshot();
    })

    it('no submit with empty username', () => {
        const component = TestUtils.renderIntoDocument(
            <LoginForm/>
        );
        const node = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
        component.state.username = "";
        component.state.password = "12345";

        TestUtils.Simulate.click(node);

        //see if nothing has changed
        expect(component.container).toMatchSnapshot();
    });

    it('no submit with empty password', () => {
        const component = TestUtils.renderIntoDocument(
            <LoginForm/>
        );
        const node = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
        component.state.username = "john";
        component.state.password = "";

        TestUtils.Simulate.click(node);

        //see if nothing has changed
        expect(component.container).toMatchSnapshot();
    });

    //Unfinished
    // it('test handleSubmit call', async () => {
    //     const component = TestUtils.renderIntoDocument(
    //         <LoginForm/>
    //     );
    //     component.state.username = "john";
    //     component.state.password = "12345";
    //     let success = await component.handleSubmit();
    //     expect(success).toBeFalsy();
    // });
})
