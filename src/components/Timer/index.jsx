import styles from "./Timer.module.scss";

const Timer = ({ time }) => {

    const { hour, min, sec, mil } = time;

    return (
        <>
            <div className={styles.timer}>

                {hour > 0 &&
                    <>
                        <p className={styles.time}>{hour < 10 ? `0${hour}` : hour}</p>
                        <p className={styles.colon}>:</p>
                    </>
                }

                <p className={styles.time + (min === 0 ? ` ${styles.disabled}` : '')}>{min < 10 ? `0${min}` : min}</p>

                <p className={styles.colon}>:</p>
                <p className={styles.time}>{sec < 10 ? `0${sec}` : sec}</p>

                {!(hour > 0) &&
                    <>
                        <p className={styles.colon}>.</p>
                        <p className={styles.time}>{mil < 10 ? `0${mil}` : mil}</p>
                    </>
                }
            </div>
        </>
    );
}

export default Timer;