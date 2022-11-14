import styles from '../../styles/skeleton.module.css';

const PhotoSkeletonCard = () => {
  return (
    <section className={styles.photoContainer}>
      {Array(8)
        .fill('')
        .map((item, index) => (
          <div className={styles.photoCard} key={index}>
            <div className={styles.cardImage}></div>
            <div className={styles.photoBottom}>
              <div className={styles.photoTitleContainer}>
                <h4 className={styles.cardTitle}></h4>
              </div>
              <div className={styles.bottomRight}>
                <p className={styles.photoChannel}></p>
                <p className={styles.photoMetrics}></p>
              </div>
            </div>
            {/* <Shimmer /> */}
          </div>
        ))}
    </section>
  );
};

export default PhotoSkeletonCard;
