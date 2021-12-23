import { render, screen } from '@testing-library/react';

import { Footer } from '..';

describe('Footer', () => {
  it('should render without fail', () => {
    const { container } = render(
      <Footer>
        <div>Content</div>
      </Footer>
    );

    expect(container).toMatchSnapshot();
  });

  it('should link has value', () => {
    render(<Footer />);

    const logo = screen.getByRole('link', { name: /vercel logotype/i });

    expect(logo).toHaveAttribute('href', 'https://vercel.com');
  });
});
