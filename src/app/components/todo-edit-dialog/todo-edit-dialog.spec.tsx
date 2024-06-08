import { render } from '@testing-library/react';

import TodoEditDialog from './todo-edit-dialog';

describe('TodoEditDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoEditDialog />);
    expect(baseElement).toBeTruthy();
  });
});
