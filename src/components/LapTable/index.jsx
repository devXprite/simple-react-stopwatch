import styles from "./LapTable.module.scss";

const LapTable = ({ laps }) => {

    return (
        <div className={styles.lapTable}>
            {laps.map((lap) => (
                <p className={styles.lap}>
                    {
                        Object.keys(lap).map((key) => (
                            <span>{lap[key] < 10 ? `0${lap[key]}` : lap[key]}</span>
                        ))
                    }

                </p>
            ))}
        </div>
    );
}

export default LapTable;