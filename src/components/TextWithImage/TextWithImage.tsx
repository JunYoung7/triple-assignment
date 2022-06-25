import React from 'react'
import styled from 'styled-components'

import FadeInBox from '../shared/FadeInUpBox/FadeInUpBox'

/**
 * TextWithImage(이미지 소스, children)
 * 이미지가 왼쪽에 있는 텍스트 컴포넌트
 * delay 0.2s
 */

interface Props {
  /**
   * 적용시킬 img src
   */
  src: string
  children?: React.ReactNode
}

const defaultProps = {
  src: '',
  children: '',
}

const TextWithImageWrapper = styled.div`
  height: 54px;
  display: flex;
  flex-direction: row;
  margin-right: 39px;
`
const Image = styled.img<Props>`
  src: ${(props) => props.src};
  height: 100%;
`
const TextBox = styled.div`
  color: rgba(58, 58, 58, 0.8);
  font-size: 14px;
  line-height: 25px;
  font-weight: bold;
  height: 100%;
  padding: 0px 0px 0px 5px;
`

function textWithImage({ src, children }: Props) {
  return (
    <FadeInBox delay={0.2}>
      <TextWithImageWrapper>
        <Image src={src} />
        <TextBox>{children}</TextBox>
      </TextWithImageWrapper>
    </FadeInBox>
  )
}

textWithImage.defaultProps = defaultProps

export default textWithImage
