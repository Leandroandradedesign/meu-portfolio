import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#18181b' }],
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    label: { control: 'text' },
  },
}

export const Primary = {
  args: { label: 'Ver projetos', variant: 'primary' },
}

export const Secondary = {
  args: { label: 'Download CV', variant: 'secondary' },
}

export const Ghost = {
  args: { label: 'Saiba mais', variant: 'ghost' },
}
