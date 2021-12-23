import { render, screen } from '@testing-library/react';

import { Home } from '..';

describe('Home', () => {
  it('should have a title', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should have a github repo link', () => {
    render(<Home />);

    expect(screen.getByRole('link', { name: /typescript nextjs starter!/i })).toHaveAttribute(
      'href',
      'https://github.com/anilkaraabali/typescript-nextjs-starter'
    );
  });
});
