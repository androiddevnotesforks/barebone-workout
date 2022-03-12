import * as React from 'react';
import { WrapperStyles } from './WorkoutLayout';
import styled from 'styled-components';

const Div = styled.div`
  border: 1px solid red;
  .shapes > * {
    opacity: 0;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);
  }
  @keyframes double-crunch-1 {
    0% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
  }

  #double-crunch-1 {
    animation-name: double-crunch-1;
  }

  @keyframes double-crunch-2 {
    0% {
      opacity: 0;
    }
    50%,
    100% {
      opacity: 1;
    }
  }

  #double-crunch-2 {
    animation-name: double-crunch-2;
  }
`;
export const DoubleCrunches = ({ isPaused }) => (
  <WrapperStyles isPaused={isPaused}>
    <Div className="illo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 309.7 166.4">
        <g className="shapes">
          <g id="double-crunch-1">
            <path
              fill="var(--hair)"
              d="M276 166h-2l-19-2c-3-1-4-1-4-4a19 19 0 0 1 1-7 54 54 0 0 0 2-12l-1-1-7 1a12 12 0 0 1-6 0c-3-1-3-2-3-4a43 43 0 0 0 2-8 7 7 0 0 0 1-3 4 4 0 0 1 1-5c1 0 1-2 3 0l9 16 1 2c3 0 3 3 3 5a6 6 0 0 0 3 4c3 3 8 2 11-3a2 2 0 0 0 0-2c-1-1-2-3-1-5a1 1 0 0 0 0-1l-4-11 16 6a8 8 0 0 1 2 1c2 1 2 3 0 5a10 10 0 0 1-7 3h-2a16 16 0 0 0 4 3 72 72 0 0 0 27 11 5 5 0 0 1 4 4c0 3-2 4-4 5l-9 2h-18Z"
            />
            <path
              fill="var(--flesh)"
              d="m47 157-12 1-12 1a35 35 0 0 1-12-1 8 8 0 0 1-5-3l-6-8v-2a21 21 0 0 1 3-4 8 8 0 0 0 3-3c1-3 3-4 6-6l7-2a10 10 0 0 0 3 0c6-1 11-1 16 1v2c4 0 7 2 10 3l5 2 2 1c2 0 3 2 5 3v3a8 8 0 0 1-3 0c-2 1-3 1-3 4l-1 1c-4 1-6 5-9 7Z"
            />
            <path
              fill="var(--shirt)"
              d="M47 157h-3c3-2 5-6 9-7l1-1c0-3 1-3 3-4a8 8 0 0 0 3 0v-3c-2-1-3-3-5-3l-2-1-5-2c-3-1-6-3-10-3v-2l4-1c5 1 11-1 15-5a53 53 0 0 1 6-5 11 11 0 0 0 4-5 13 13 0 0 0 5-4l1-1a2 2 0 0 0 2-2l5-4c4-4 9-6 15-6a119 119 0 0 1 28 0c3 0 6 2 9 4a80 80 0 0 0 10 4c3 0 6 1 8-2s5-2 8-1a6 6 0 0 0 3 0 3 3 0 0 1 0 3l-5 14a6 6 0 0 0 0 6l1 5c-3 4-3 9-2 14a3 3 0 0 0 1 3 19 19 0 0 0 4 2c0 2 2 4 0 5a4 4 0 0 1-5-1c-4-4-9-5-15-5h-35a174 174 0 0 0-21 3l-30 4-7 1Z"
            />
            <path
              fill="var(--flesh)"
              d="m266 126 4 11a1 1 0 0 1 0 1c-1 2 0 4 1 5a2 2 0 0 1 0 2c-3 5-8 6-11 3a6 6 0 0 1-3-4c0-2 0-5-3-5l-1-2-9-16c-2-2-2 0-3 0l-14-21-3 7c-2 7-6 12-10 17l-2 2-1 1c-3 2-3 2-4 0a56 56 0 0 1-6-14c-3-7-5-14-5-22 1-4 1-9 6-12v-2a42 42 0 0 0-3-5l8-6 12-11c4-3 7-5 12-3l1 1c2 2 4 3 7 2a6 6 0 0 1 5 2c4 4 8 9 10 15v7l2 8 7 27 3 12Z"
            />
            <path
              fill="var(--pants)"
              d="M199 72a42 42 0 0 1 3 5v2c-5 3-5 8-6 12 0 8 2 15 5 22a56 56 0 0 0 6 14c1 2 1 2 4 0l1-1 1 3c1 3 0 5-3 6l-21 11a51 51 0 0 1-29 4 19 19 0 0 1-4-2 3 3 0 0 1-1-3c-1-5-1-10 2-14l-1-5a6 6 0 0 1 0-6l5-14a3 3 0 0 0 0-3 2 2 0 0 1 2-1c3 0 5-2 8-3a26 26 0 0 0 12-11c4-6 9-10 14-15l2-1Z"
            />
            <path
              fill="var(--flesh)"
              d="M67 115a11 11 0 0 1-4 5 53 53 0 0 0-6 5c-4 4-10 6-15 5a6 6 0 0 1-4-2 4 4 0 0 1 0-4 4 4 0 0 1 3-2l4-1c2 0 2-1 2-2a2 2 0 0 0-2-2 26 26 0 0 1-8-3 5 5 0 0 0-5-1 2 2 0 0 1-2-2 18 18 0 0 1 3-11h7a10 10 0 0 1 5 1c2 1 4-1 5-1l3-1c1-1 2 0 3 2l1 1a5 5 0 0 1 6 3 2 2 0 0 0 1 1c4 0 4 2 4 6l-1 1a4 4 0 0 0 0 2Z"
            />
            <path
              fill="var(--hair)"
              d="M33 100a18 18 0 0 0-3 11 2 2 0 0 0 2 2 5 5 0 0 1 5 1 26 26 0 0 0 8 3 2 2 0 0 1 2 2c0 1 0 2-2 2l-4 1a4 4 0 0 0-3 2 4 4 0 0 0 1 4 6 6 0 0 0 3 2l-4 1c-5-2-10-2-16-1a10 10 0 0 1-3 0c0-7 0-13 2-19l3-12c0-3 2-4 5-3a13 13 0 0 1 4 4Z"
            />
          </g>
          <g id="double-crunch-2">
            <path
              fill="var(--hair)"
              d="M256 13h-1c-2 11-7 21-11 31l-4 7c-1 2-2 3-4 2a21 21 0 0 1-6-3 46 46 0 0 0-9-5c-2-1-2-1-3 2l-1 6a10 10 0 0 1-1 2c-2 4-3 5-7 2-3-2-5-5-9-5l-3-2c0-2 0-2 2-3a82 82 0 0 1 17-3h2c1-3 3-2 5-1a5 5 0 0 0 4-1c4-2 5-7 2-11l-3-1h-3c-1-2-3-1-5-1h-8a74 74 0 0 0 12-13c2-2 3-2 4 0v10l1-1a13 13 0 0 0 1 0c8-6 15-13 20-22l3-3h2l3 6Z"
            />
            <path
              fill="var(--shirt)"
              d="m159 150 1 2-2 1h-22l-15 1a66 66 0 0 1-28-6 85 85 0 0 0-13-4c-5-1-9-5-13-8a47 47 0 0 1-10-12c-1-2-2-2-3-2-4-1-4-2-4-5 1-1 2 0 3 1 4 1 9-1 10-5l1-11-1-4a1 1 0 0 1 0-2h2l2 2c0 2 2 1 3 0a15 15 0 0 1 8-2h7a13 13 0 0 0 8-1l4-4 2 1c3 0 5 2 8 3a66 66 0 0 0 7 1 20 20 0 0 1 6 3h8a14 14 0 0 1 5 0 63 63 0 0 0 10 1l7 1c3 0 4 2 5 5 1 5 0 10-1 15-1 3-1 6 1 9a6 6 0 0 1 2 5 25 25 0 0 0-1 9c0 2 1 5 3 6Z"
            />
            <path
              fill="var(--flesh)"
              d="M211 29h8c1 0 3-1 4 1h4c2-1 1 0 2 1 3 4 2 9-2 11a5 5 0 0 1-4 1c-2-1-4-2-5 1h-2a82 82 0 0 0-17 3c-2 1-2 1-2 3l-20 5-2 1 2 2a28 28 0 0 1 9 8l7 12v1c2 4 2 3-2 4-15 4-28 1-40-9a10 10 0 0 0-3-2l-1 3v3h-4c-2 0 0-2-1-3l-3-8-8-20a11 11 0 0 1 0-6 8 8 0 0 1 5-6 2 2 0 0 0 1-2 9 9 0 0 1 8-8l7-2a14 14 0 0 1 9 1 40 40 0 0 0 14 2l21 2 12 1a5 5 0 0 0 3 0Z"
            />
            <path
              fill="var(--pants)"
              d="m142 76 1 2h4v-3l1-3a10 10 0 0 1 3 2c12 10 25 13 40 9 4-1 4 0 2-4v-1c3 0 5 1 7 3 3 5 5 10 4 17l1 9c0 7 0 13-2 19-3 7-7 11-13 15a57 57 0 0 1-13 7c-5 2-9 3-13 2a29 29 0 0 0-5 0c-2-1-3-4-3-6a25 25 0 0 1 1-9 6 6 0 0 0-1-5c-3-3-3-6-2-9 1-5 2-10 1-15-1-3-2-5-5-5a36 36 0 0 1-2-9 13 13 0 0 0-3-6c-2-3-4-6-3-10Z"
            />
            <path
              fill="var(--flesh)"
              d="M64 102c0 4 1 8-1 11s-6 6-10 5c-1-1-2-2-3-1l-7-6-6-4a1 1 0 0 0 0-1h-1a3 3 0 0 0-2-2 9 9 0 0 0-4-3 2 2 0 0 0-1-2l-1-1v-1l-1-1v-9l1-1v-1a4 4 0 0 0 2-3c2-2 5-2 7-3l10-4h3a6 6 0 0 0 1 1c6 3 9 8 8 15l1 2a36 36 0 0 1 3 5l1 4ZM97 91l-4 4a13 13 0 0 1-8 1h-7a15 15 0 0 0-8 3c-1 0-3 1-3-1s-2-2-2-3l4-3v-1l-3-5a5 5 0 0 1-1-6 3 3 0 0 1 6-1l2 2c2 2 2 2 3 0a3 3 0 0 0 0-3 19 19 0 0 1-2-6 6 6 0 0 0-1-4c-2-2-2-3 0-5a28 28 0 0 1 9-3 14 14 0 0 0 3 4 13 13 0 0 1 4 6 4 4 0 0 0 2 2 25 25 0 0 1 3 2c2 1 2 2 1 4v1c1 2 2 4 1 7l1 1a5 5 0 0 1 0 4Z"
            />
            <path
              fill="var(--hair)"
              d="M82 60a28 28 0 0 0-9 3c-2 2-2 3 0 5a6 6 0 0 1 1 4 19 19 0 0 0 2 6 3 3 0 0 1 0 3c-1 2-1 2-3 0l-2-2a3 3 0 0 0-6 1 5 5 0 0 0 1 6l3 5v1l-4 3a2 2 0 0 1-3-1l-3-3c1-7-2-12-8-15a6 6 0 0 1-1-1c-1-5 2-8 6-12l15-7 7-4c2-1 4 1 4 3a13 13 0 0 1 0 5Z"
            />
          </g>
        </g>
      </svg>
    </Div>
  </WrapperStyles>
);