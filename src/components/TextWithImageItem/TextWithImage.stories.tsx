import { ComponentStory, ComponentMeta } from '@storybook/react'

import playStoreImage from '../../assets/play-store2x.png'

import TextWithImage from './TextWithImage'

export default {
  title: 'components/textWithImage',
  component: TextWithImage,
} as ComponentMeta<typeof TextWithImage>

const Templete: ComponentStory<typeof TextWithImage> = () => (
  <TextWithImage src={playStoreImage}>
    2018 구글 플레이스토어
    <br />
    올해의 앱 최우수상 수상
  </TextWithImage>
)

export const Base = Templete.bind({})
