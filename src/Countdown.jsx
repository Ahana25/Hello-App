import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Countdown() {
    return (
        <div>
            <CountdownCircleTimer
    isPlaying
    duration={10}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
        </div>
    )
}

export default Countdown
