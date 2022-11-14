import styles from '../../styles/skeleton.module.css';
import Shimmer from '../Shimmer';

const SkeletonCard = () => {
  return (
    <section className={styles.container}>
      {Array(6)
        .fill('')
        .map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardImage}></div>
            <h4 className={styles.cardTitle}></h4>
            <p className={styles.cardChannel}></p>
            <p className={styles.cardMetrics}></p>
            <Shimmer />
          </div>
        ))}
    </section>
  );
};

export default SkeletonCard;
