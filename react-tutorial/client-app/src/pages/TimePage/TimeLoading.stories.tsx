import TimeLoading from './TimeLoading'
import { Meta, StoryObj } from '@storybook/react'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

const meta: Meta<typeof TimeLoading> = {
  title: 'Pages/TimeLoading',
  component: TimeLoading,
}

export default meta

type Story = StoryObj<typeof TimeLoading>

export const Default: Story = {}
