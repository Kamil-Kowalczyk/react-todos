import { render } from '@testing-library/react';

import MainHolder from './main-holder';

describe('MainHolder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainHolder />);
    expect(baseElement).toBeTruthy();
  });
});
