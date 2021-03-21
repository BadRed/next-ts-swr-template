import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
    it('has a header with the correct title', () => {
        render(<App />);
        expect(screen.getByText('Header')).toBeInTheDocument();
    });
})