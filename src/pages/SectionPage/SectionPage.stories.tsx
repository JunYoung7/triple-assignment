import { ComponentStory, ComponentMeta } from '@storybook/react'

import SectionPage from './SectionPage'

export default {
  title: 'pages/sectionPage',
  component: SectionPage,
} as ComponentMeta<typeof SectionPage>

const Templete: ComponentStory<typeof SectionPage> = () => <SectionPage />

export const Base = Templete.bind({})
