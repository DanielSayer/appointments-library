import { Meta, StoryObj } from '@storybook/react';
import { TimePicker, ITimePicker } from '../Components/TimePicker/TimePicker';

/**
 * The TimePicker component is a user-friendly interface for selecting time values. It resembles jQuery TimePicker however translates to 24 hour format.
 *
 * The TimePicker is a flexible component and allows users to enter unformatted times: such as 10 (for 10:00) or 5pm (for 17:00). The TimePicker translates the time when the user clicks out of the target field.
 *
 * Feel free to explore the component using the properties below!
 */
export default {
  title: 'Components/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof TimePicker>;

/**
 * This is a default timepicker
 */
export const Default: Story = {
  args: {
    id: '',
    name: '',
    placeholder: '',
    value: '',
    isDisabled: false,
    onChange: () => {
      console.log('SAVED');
    },
  } as ITimePicker,
};
Default.storyName = 'TimePicker';
/**
 * This is a disabled timepicker
 */
export const Disabled: Story = {
  args: {
    id: '',
    name: '',
    placeholder: '',
    value: '0',
    isDisabled: true,
    onChange: () => {},
  } as ITimePicker,
};
