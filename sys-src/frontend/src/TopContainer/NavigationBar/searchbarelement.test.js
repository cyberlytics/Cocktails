import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import TestRenderer, { act } from 'react-test-renderer';
import SearchBar from './searchbarelement'

test("renders correctly", () => {
    const {queryByPlaceholderText} = render(<SearchBar/>)
    const input = queryByPlaceholderText("Suche")
    expect(input).toBeTruthy()
})

//Funktioniert noch nicht komplett
describe('input should be the same', () => {
    it('should handle onChange event', () => {
      const testRenderer = TestRenderer.create(<SearchBar />);
      const testInstance = testRenderer.root;
      expect(testInstance.findByType('input').props.value).toBeUndefined();
      const mEvent = { target: { value: 'WhiteRussian' } };
      act(() => {
        testInstance.findByType('input').props.onChange(mEvent);
      });
      expect(testInstance.findByType('input').props.value).toEqual('WhiteRussian');
    });
});

