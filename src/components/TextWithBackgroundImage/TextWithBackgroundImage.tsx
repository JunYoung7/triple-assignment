import React from 'react'
import styled from 'styled-components'

import FadeInBox from '../shared/FadeInUpBox/FadeInUpBox'

/**
 * TextWithBackgroundImage(이미지 소스, children)
 * 배경 이미지가 있는 텍스트 컴포넌트
 * delay 0
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

const ImageBox = styled.div`
  width: 400px;
  height: 338px;
  position: relative;
  text-align: center;
`

const Image = styled.img<Props>`
  src: ${(props) => props.src};
  width: 100%;
`

const TextBox = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(58, 58, 58, 0.7);
  font-size: 15px;
`

function textWithBackgroundImage({ src, children }: Props) {
  return (
    <FadeInBox delay={0}>
      <ImageBox>
        <Image src={src} />
        <TextBox>{children}</TextBox>
      </ImageBox>
    </FadeInBox>
  )
}

textWithBackgroundImage.defaultProps = defaultProps

export default textWithBackgroundImage
