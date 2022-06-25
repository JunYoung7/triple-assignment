import { ComponentStory, ComponentMeta } from '@storybook/react'

import Logo from '../../assets/triple2x.png'

import TextWithBackgroundImage from './TextWithBackgroundImage'

export default {
  title: 'components/textWithBackgroundImage',
  component: TextWithBackgroundImage,
} as ComponentMeta<typeof TextWithBackgroundImage>

const Templete: ComponentStory<typeof TextWithBackgroundImage> = () => (
  <TextWithBackgroundImage src={Logo}>2021년 12월 기준</TextWithBackgroundImage>
)

export const Base = Templete.bind({})
