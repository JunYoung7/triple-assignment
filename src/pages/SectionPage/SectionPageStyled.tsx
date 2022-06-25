import styled from 'styled-components'

const sectionContainer = styled.div`
  width: 1040px;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const sectionLogoBox = styled.div`
  flex: 1;
`

const sectionContentsBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const sectionIndicatorBox = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`

const sectionAwardsBox = styled.div`
  margin-top: 50px;
  flex: 1;
  display: flex;
  flex-direction: row;
`

export default {
  sectionContainer,
  sectionLogoBox,
  sectionContentsBox,
  sectionIndicatorBox,
  sectionAwardsBox,
}
