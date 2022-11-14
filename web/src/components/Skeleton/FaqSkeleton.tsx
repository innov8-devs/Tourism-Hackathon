import styles from '../../styles/skeleton.module.css';

const FaqSkeletonCard = () => {
  return (
    <section className={styles.faqContainer}>
      {Array(9)
        .fill('')
        .map((item, index) => (
          <div className={styles.FaqColumn} key={index}>
            <div className={styles.faqTitle}></div>
            <div className={styles.faqTitle}></div>
            <div className={styles.faqTitle}></div>
            <br />
            <div className={styles.faqSubTitle}></div>
            <div className={styles.faqSubTitle}></div>
          </div>
        ))}
    </section>
  );
};

export default FaqSkeletonCard;
