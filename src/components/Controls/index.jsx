import { FaPause, FaPlay, FaRedo } from 'react-icons/fa'
import styles from './Controls.module.scss'

import { RxLapTimer, RxCountdownTimer } from "react-icons/rx"

const Controls = ({ isPaused, setIsPaused, setTime, updateLap }) => {

    

    return (
        <div className={styles.btn_container}>

            <button onClick={() => setTime({ hour: 0, min: 0, sec: 0, mil: 0 })}>
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