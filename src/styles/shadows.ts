import { css } from '@emotion/react'
import { accentYellow } from './colors'

const animationDuration = 20

const flatOut = css`
  animation: ${animationDuration}s linear rotatingSunEffectOut infinite;

  @keyframes rotatingSunEffectOut {
    0% {
      background: ${accentYellow};
      box-shadow: 0 0 40px #928728;
    }
    20% {
      background: linear-gradient(145deg, #f0df41, #cabb37);
      box-shadow: 20px 20px 60px #928728, -20px -20px 60px #ffff52;
    }
    80% {
      background: linear-gradient(225deg, #f0df41, #cabb37);
      box-shadow: -20px 20px 60px #928728, 20px -20px 60px #ffff52;
    }
    100% {
      background: ${accentYellow};
      box-shadow: 0 0 40px #928728;
    }
  }
`

const flatIn = css`
  animation: ${animationDuration}s linear rotatingSunEffectIn infinite;

  @keyframes rotatingSunEffectIn {
    0% {
      background: ${accentYellow};
      box-shadow: inset 0px 0px 40px #928728;
    }
    20% {
      background: linear-gradient(145deg, #cabb37, #f0df41);

      box-shadow: inset 20px 20px 60px #928728, inset -20px -20px 60px #ffff52;
    }
    80% {
      background: linear-gradient(225deg, #cabb37, #f0df41);
      box-shadow: inset -20px 20px 60px #928728, inset 20px -20px 60px #ffff52;
    }
    100% {
      background: ${accentYellow};
      box-shadow: inset 0px 0px 40px #928728;
    }
  }
`

export const shadow = {
  flatOut,
  flatIn,
}
