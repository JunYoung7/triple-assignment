import React from 'react'
import styled from 'styled-components'

/**
 * fadeInUpBox(delay, children)
 * components이 위 방향으로 fade in 하게 하기 위한 box component (delay를 입력받아 나타나는 순서를 조절한다)
 * 재사용을 위해 shared component로 관리
 */

interface Props {
  delay?: number
  children?: React.ReactNode
}

/**
 * opacity 0을 주고, animation fill mode를 forwards로 설정함으로써 마지막 키프레임 상태(opacity: 1)를 유지하도록 구현
 */
const FadeInUpWrapper = styled.div<Props>`
  animation: fadeInUp 0.7s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(15px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`

function FadeInUpBox({ delay, children }: Props) {
  return <FadeInUpWrapper delay={delay}>{children}</FadeInUpWrapper>
}

export default FadeInUpBox
