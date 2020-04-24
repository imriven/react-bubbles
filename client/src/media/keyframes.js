import { keyframes } from "styled-components"

export const titleKeyFrame = keyframes `

0% {
  -webkit-transform: rotateX(-100deg);
          transform: rotateX(-100deg);
  -webkit-transform-origin: top;
          transform-origin: top;
  opacity: 0;
}
100% {
  -webkit-transform: rotateX(0deg);
          transform: rotateX(0deg);
  -webkit-transform-origin: top;
          transform-origin: top;
  opacity: 1;
}

`