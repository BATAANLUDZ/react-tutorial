import LoginPage from './LoginPage'
import { Meta, StoryObj } from '@storybook/react'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

const meta: Meta<typeof LoginPage> = {
  title: 'Pages/LoginPage',
  component: LoginPage,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof LoginPage>

export const Default: Story = {}
