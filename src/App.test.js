import { render, screen } from '@testing-library/react';
import App from './App';
import Greeting from "./components/Greeting";
import userEvent  from '@testing-library/user-event';

// Testing Suites
describe('App Component', ()=> {

  test('renders greeting text', () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn bitcoin/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Greeting Component', () => {
  test('Button Not Clicked Render', () => {
    // Arrange
    render(<Greeting />)

    // Act

    // Assert
    const paragraphElement = screen.getByText( 'good to see you', { exact: false } );
    expect( paragraphElement ).toBeInTheDocument();
  });

  test('Button Was Clicked Render', () => {
    // Arrange
    render(<Greeting />)

    // Act
    const buttonElement = screen.getByRole( 'button' );
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText( 'Changed!' );
    expect( outputElement ).toBeInTheDocument();

  });

  test('Does Not Render If Button Not Clicked', () => {
    // Arrange
    render(<Greeting />)

    // Act
    const buttonElement = screen.getByRole( 'button' );
    userEvent.click(buttonElement);

    // Assert to make sure some text DOESN'T appear upon button click
    const outputElement = screen.queryByText( 'good to see you', { exact: false } );
    expect( outputElement ).toBeNull();
  })
})
