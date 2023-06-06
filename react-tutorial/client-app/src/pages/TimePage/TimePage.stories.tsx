import TimePage from './TimePage'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TimePage> = {
  title: 'Pages/TimePage',
  component: TimePage,
}

export default meta

type Story = StoryObj<typeof TimePage>

export const Default: Story = {}
