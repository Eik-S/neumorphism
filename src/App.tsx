import { css } from '@emotion/react'
import { Card } from './components/card'

export function App() {
  return (
    <div css={styles.cardContainer}>
      <Card design="flatIn">this is an example card containing some text</Card>
      <Card design="flatOut">
        this is an example card containing some text that is even longer then the text from the
        previous card
      </Card>
      <Card>
        this is an example card containing some text that is even longer then the text from the
        previous card
      </Card>
    </div>
  )
}

const styles = {
  cardContainer: css`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 48px;
  `,
}
