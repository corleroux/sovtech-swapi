import { render } from '@testing-library/react';

import SwPagination from './sw-pagination';

describe('SwPagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SwPagination />);
    expect(baseElement).toBeTruthy();
  });
});
