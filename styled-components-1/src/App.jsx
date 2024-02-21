import { useState } from 'react'
import { Button } from './components/Button'
import { StyledContainer } from './components/styled/StyledContainer'
import Text from './components/Text/Text'
import { LargeButtonStyled } from './components/Button/Button.styled'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StyledContainer>
        <h1>asddsa</h1>
        <Button>
          Hello World
        </Button>
        <Text $primary>
          asddsasdas
        </Text>
        <LargeButtonStyled>
          Large Button
        </LargeButtonStyled>

      </StyledContainer>
    </>
  )
}

export default App
