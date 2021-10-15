/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import { FooterComponent } from '../component';

describe('FooterComponent', () => {
  it('should render without throwing any errors', () => {
    const { container } = render(<FooterComponent />);

    expect(container).toMatchSnapshot();
  });

  it('should link has value', () => {
    render(<FooterComponent />);

    const logo = screen.getByRole('link', { name: /vercel logotype/i });

    expect(logo).toHaveAttribute('href', 'https://vercel.com');
  });
});
