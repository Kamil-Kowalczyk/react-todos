import { render } from '@testing-library/react';

import TodoAdder from './todo-adder';

describe('TodoAdder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoAdder handleTodoAdd={() => {}} />);
    expect(baseElement).toBeTruthy();
  });
});
