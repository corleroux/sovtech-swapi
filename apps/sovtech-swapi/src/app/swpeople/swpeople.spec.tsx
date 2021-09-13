import { render } from '@testing-library/react';

import Swpeople from './swpeople';

describe('Swpeople', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Swpeople />);
    expect(baseElement).toBeTruthy();
  });
});
