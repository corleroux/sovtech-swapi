import { render } from '@testing-library/react';

import PeopleGridData from './people-grid-data';

describe('PeopleGridData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PeopleGridData />);
    expect(baseElement).toBeTruthy();
  });
});
