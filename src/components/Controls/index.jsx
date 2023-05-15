import { FaPause, FaPlay, FaRedo } from 'react-icons/fa'
import styles from './Controls.module.scss'

import { RxLapTimer, RxCountdownTimer } from "react-icons/rx"
import { useEffect, useCallback } from 'react'
import { } from 'react'

const Controls = ({ isPaused, setIsPaused, setTime, updateLap }) => {

    const reset = () => { setTime({ hour: 0, min: 0, sec: 0, mil: 0 })};

    const handleKeyPress = useCallback((e) => {
        if (e.code === "Space") setIsPaused((prev) => !prev)
        if (e.code === "KeyR") reset()
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress)
        return () => { window.removeEventListener("keydown", handleKeyPress) }
    }, []);


    return (
        <div className={styles.btn_container}>
            <button onClick={reset}>
                <RxCountdownTimer />
            </button>

            <button onClick={() => setIsPaused(!isPaused)}>
                {isPaused
                    ? <><FaPlay /> <span>Start</span></>
                    : <><FaPause /> <span>Pause</span></>}
            </button>

            <button onClick={updateLap}>
                <RxLapTimer />
            </button>
        </div>
    );
}

export default Controls;