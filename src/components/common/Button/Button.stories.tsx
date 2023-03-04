import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button, { ButtonProps } from './Button'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Button',
}

export const Loading = Template.bind({})

Loading.args = {
  children: 'Button',
  isLoading: true,
}
