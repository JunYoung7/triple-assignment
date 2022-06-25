import logo from '../../assets/triple2x.png'
import playStoreImage from '../../assets/play-store2x.png'
import appleImage from '../../assets/badge-apple4x.png'
import useNumCount from '../../hooks/useNumCount'

import s from './SectionPageStyled'

import TextWithBackgroundImage from 'components/TextWithBackgroundImage/TextWithBackgroundImage'
import TextWithImage from 'components/TextWithImage/TextWithImage'
import NumCounterText from 'components/NumCounterText/NumCounterText'
import FadeInUpBox from 'components/shared/FadeInUpBox/FadeInUpBox'

/**
 * SectionPage
 * 메인 페이지
 */

function SectionPage() {
  return (
    <s.sectionContainer>
      <s.sectionLogoBox>
        <TextWithBackgroundImage src={logo}>
          2021년 12월 기준
        </TextWithBackgroundImage>
      </s.sectionLogoBox>
      <s.sectionContentsBox>
        <FadeInUpBox delay={0.1}>
          <s.sectionIndicatorBox>
            <NumCounterText
              num={useNumCount(0, 700, 2000)}
              unit="만 명"
              type="의 여행자"
            />
            <NumCounterText
              num={useNumCount(0, 100, 2000)}
              unit="만 개"
              type="의 여행 리뷰"
            />
            <NumCounterText
              num={useNumCount(0, 470, 2000)}
              unit="만 개"
              type="의 여행 일정"
            />
          </s.sectionIndicatorBox>
        </FadeInUpBox>
        <s.sectionAwardsBox>
          <TextWithImage src={playStoreImage}>
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </TextWithImage>
          <TextWithImage src={appleImage}>
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </TextWithImage>
        </s.sectionAwardsBox>
      </s.sectionContentsBox>
    </s.sectionContainer>
  )
}

export default SectionPage
