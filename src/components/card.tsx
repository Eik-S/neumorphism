import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { darkGrey } from '../styles/colors'
import { shadow } from '../styles/shadows'

type Design = 'flatOut' | 'flatIn'

interface CardProps {
  children: ReactNode
  design?: Design
}

export function Card({ children, design }: CardProps) {
  return <div css={styles.card(design)}>{children}</div>
}

const styles = {
  card: (design: Design | undefined) => css`
    max-width: 250px;
    padding: 24px 32px;
    border-radius: 32px;

    color: ${darkGrey};
    font-size: 16px;
    line-height: 1.2em;
    letter-spacing: 0.02em;
    hyphens: auto;

    ${design && shadow[design]}

    ${typeof design === 'undefined' &&
    css`
      border: 0.5px solid ${darkGrey};
    `}
  `,
}
