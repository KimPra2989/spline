import styled from '@emotion/styled'
import Spline from '@splinetool/react-spline'

export default function App() {
  return (
    <>
      <Title>Click the Lid!</Title>
      <p>이거 왜 배포 실패함?</p>
      <Spline scene="https://prod.spline.design/spoYgxpBygpmCQNy/scene.splinecode" />
    </>
  )
}

const Title = styled.h1`
  text-align: center; 
`