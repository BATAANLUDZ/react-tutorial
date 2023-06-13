import TimePage from './TimePage'
import { Meta, StoryObj } from '@storybook/react'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

const meta: Meta<typeof TimePage> = {
  title: 'Pages/TimePage',
  component: TimePage,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof TimePage>

export const Default: Story = {}
