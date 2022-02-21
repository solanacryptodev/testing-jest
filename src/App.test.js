import { render, screen } from '@testing-library/react';
import App from './App';
import Greeting from "./components/Greeting";

// Testing Suites
describe('Greeting Component', ()=>
{
  // Test
  test('renders greeting text', () => {
    render(<Greeting />);
    const linkElement = screen.getByText(/change text/i);
    expect(linkElement).toBeInTheDocument();
  });

})
