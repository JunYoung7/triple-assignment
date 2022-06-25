import { ComponentStory, ComponentMeta } from '@storybook/react'

import useNumCount from '../../hooks/useNumCount'

import NumCounterText from './NumCounterText'

export default {
  title: 'components/numCounterText',
  component: NumCounterText,
} as ComponentMeta<typeof NumCounterText>

const Templete: ComponentStory<typeof NumCounterText> = () => (
  <NumCounterText
    num={useNumCount(500, 700, 2000)}
    unit="만 명"
    type="의 여행자"
  />
)

export const Base = Templete.bind({})
