import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
// import { action } from '@storybook/addon-actions';

import { TooltipComponent } from "../../app/components/tooltip";

// export const actionsData = {
//   onPinTask: action('onPinTask'),
//   onArchiveTask: action('onArchiveTask'),
// };

const meta: Meta<TooltipComponent> = {
  title: 'Component/Tooltip',
  component: TooltipComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  render: (args: TooltipComponent) => ({
    props: {
      ...args,
      // onPinTask: actionsData.onPinTask,
      // onArchiveTask: actionsData.onArchiveTask,
    },
    template: `<app-tooltip ${argsToTemplate(args)}></app-tooltip>`,
  }),
};

export default meta;
type Story = StoryObj<TooltipComponent>;

// export const Default: Story = {
//   args: {
//     task: {
//       id: '1',
//       title: 'Test Task',
//       state: 'TASK_INBOX',
//     },
//   },
// };

// export const Pinned: Story = {
//   args: {
//     task: {
//       ...Default.args?.task,
//       state: 'TASK_PINNED',
//     },
//   },
// };

// export const Archived: Story = {
//   args: {
//     task: {
//       ...Default.args?.task,
//       state: 'TASK_ARCHIVED',
//     },
//   },
// };
