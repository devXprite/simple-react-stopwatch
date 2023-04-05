import { useEffect, useState } from 'react';
import './App.scss'
import ProgressRing from './components/ProgressRing'
import Timer from './components/Timer'
import Controls from './components/Controls';
import LapTable from './components/LapTable';

const updateTimer = (prev) => {
  let { hour, min, sec, mil } = prev;

  mil += 4

  if (mil === 100) {
    sec += 1
    mil = 0
  }

  if (sec === 60) {
    min += 1
    sec = 0
  }

  if (min === 60) {
    hour += 1
    min = 0
  }

  return { hour, min, sec, mil }
}


function App() {

  const [isPaused, setIsPaused] = useState(false);

  const [laps, setLaps] = useState([]);

  const [time, setTime] = useState({
    hour: 0,
    min: 0,
    sec: 0,
    mil: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) setTime(updateTimer)
    }, 40);

    return () => clearInterval(interval);
  }, [isPaused])

  const updateLap = () => {
    setLaps(prev => ([
      ...prev,
      time
    ]))

    console.log(laps);
  }



  return (
    <>
      <ProgressRing count={time.sec} isPaused={isPaused} >
        <Timer time={time} isPaused={isPaused} />
      </ProgressRing>

      {/* <LapTable laps={laps} /> */}

      <Controls
        isPaused={isPaused}
        setIsPaused={setIsPaused}
        setTime={setTime}
        setLap={setLaps}
        time={time}
        laps={laps}
        updateLap={updateLap}
      />
    </>
  )
}

export default App
