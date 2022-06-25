import styled from 'styled-components'

/**
 * NumCounterText(num(700), unit(만 명), type(의 여행자))
 * 숫자 증가 애니메이션이 적용될 text component
 * delay 0.2s
 */

interface Props {
  /**
   * num
   * ex) 700
   */
  num: number
  /**
   * unit
   * ex) 만 명
   */
  unit: string
  /**
   * type
   * ex) 의 여행자
   */
  type: string
}

const defaultProps = {
  num: 0,
  unit: '',
  type: '',
}

const TextWrapper = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`

const BoldText = styled.span`
  font-weight: bold;
`

function numCounterText({ num, unit, type }: Props) {
  return (
    <TextWrapper>
      <BoldText>
        {num}
        {unit}
      </BoldText>
      {type}
    </TextWrapper>
  )
}

numCounterText.defaultProps = defaultProps

export default numCounterText
