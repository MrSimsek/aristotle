import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('should render', () => {
    // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    expect(render(<App />)).toBeTruthy();
  });
});
