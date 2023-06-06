import { Toggle } from './Toggle'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
}

export default meta

type Story = StoryObj<typeof Toggle>

const ToggleWithHook = () => {
  const [checked, setChecked] = useState<boolean>(false)

  return <Toggle checked={checked} onChange={setChecked} />
}

export const Default: Story = {
  render: () => <ToggleWithHook />,
}
