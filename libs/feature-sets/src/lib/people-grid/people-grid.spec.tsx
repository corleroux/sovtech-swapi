import { render } from '@testing-library/react';

import PeopleGrid from './people-grid';

describe('PeopleGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PeopleGrid />);
    expect(baseElement).toBeTruthy();
  });
});
