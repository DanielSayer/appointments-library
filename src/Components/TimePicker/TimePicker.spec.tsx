import { render, screen } from '@testing-library/react';
import { TimePicker } from './TimePicker';
import '@testing-library/jest-dom/extend-expect';

describe('TimePicker', () => {
  it('Defaults to midnight', () => {
    render(<TimePicker value="" onChange={() => {}} />);

    expect(screen.getByRole('textbox')).toHaveValue('00:00');
  });
});
