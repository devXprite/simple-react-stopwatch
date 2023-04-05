import { useEffect } from 'react';
import { useRef } from 'react';
import styles from './ProgressRing.module.scss';


const ProgressRing = ({ count = 0, isPaused, children, setIsPaused }) => {

    const dotRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;

        if (isPaused) {
            dot.style.opacity = 0;
            return;
        }

        dot.style.opacity = 1;

        const angle = 6 * (count + 2);
        const rotate = `rotate(${angle}deg)`;

        dot.style.transform = rotate;
    }, [count, isPaused]);

    return (
        <div className={styles.ring} onClick={()=>{ setIsPaused(prev => !prev) }}>
            {children}

            {[...Array(count)].map((_, i) => (
                <div key={i} className={styles.line} />
            ))}
            
            <div className={styles.dot} ref={dotRef}></div>
        </div>
    );
}

export default ProgressRing;