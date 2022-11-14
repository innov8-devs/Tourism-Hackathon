import styles from '../../styles/skeleton.module.css';

const MenuSkeletonCard = () => {
  return (
    <section className={styles.menuContainer}>
      {Array(5)
        .fill('')
        .map((item, index) => (
          <div className={styles.menuCard} key={index}>
            <div className={styles.menuImage}></div>
            <div className={styles.menuInnerContainer}>
              <div className={styles.menuNameContainer}>
                <h4 className={styles.menuCardTitle}></h4>
                <p className={styles.menuCardChannel}></p>
                <p className={styles.menuCardChannel2}></p>
              </div>
              <div className={styles.menuPriceContainer}>
                <div className={styles.minus}></div>
                <div className={styles.amount}></div>
                <div className={styles.minus}></div>
                <div className={styles.price}></div>
              </div>
            </div>
            <div className={styles.add}></div>

            {/* <Shimmer /> */}
          </div>
        ))}
    </section>
  );
};

export default MenuSkeletonCard;
