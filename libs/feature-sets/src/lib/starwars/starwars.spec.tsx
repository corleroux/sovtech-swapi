import { render } from '@testing-library/react';

import Starwars from './starwars';

describe('Starwars', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Starwars />);
    expect(baseElement).toBeTruthy();
  });
});
