import type { Shoe } from "@/types/quiz";
import styles from '../ResultsScreen.module.scss';
import { shoeImageByName } from "@/assets/products/shoeImages";

const PRODUCT_DESCRIPTION = "Your perfect partner in the world's lightest fully-cushioned shoe for Running Remixed.";
const PRODUCT_PRICE = '200 CHF';
const PRODUCT_COLORWAY = 'Neon & Grey';

interface ProductCardProps {
  shoe: Shoe;
  variant?: 'hero' | 'similar';
}

const ProductCard = ({ shoe, variant = 'similar' }: ProductCardProps) => (
  <div className={`${styles.card} ${variant === 'hero' ? styles.cardHero : ""}`}>
    <div className={styles.content}>
      <img className={styles.image} src={shoeImageByName[shoe.id]} alt={shoe.name} />

      <div className={styles.info}>
        <h3>{shoe.name}</h3>

        <p className={styles.description}>{PRODUCT_DESCRIPTION}</p>

        <p className={styles.price}>
          {PRODUCT_PRICE} <span className={styles.divider}>|</span> {PRODUCT_COLORWAY}
        </p>

        <div className={styles.swatches}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>

    <button type="button" className={styles.button}>
      Shop now
    </button>
  </div>
);

export default ProductCard;