import { Link } from "react-router-dom"
import PokemonPic from '../assets/pikachu.png'
import ItemsPic from '../assets/pokeball.png'
import LocationPic from '../assets/pointer.png'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link
        className={styles.footerLink}
        to="/pokemons">
          <img
            className={styles.footerIcon}
            src={PokemonPic}
            alt='Pikachu'
      />
            Pokemons
      </Link>
      <Link
        onClick={(e) => e.preventDefault()}
        className={styles.footerLink}
        to="/items"
      >
          <img
            className={styles.footerIcon}
            src={ItemsPic}
            alt='Pokeball' />
              Items
      </Link>
      <Link
        onClick={(e) => e.preventDefault()}
        className={styles.footerLink}
        to="/map"
      >
          <img
            className={styles.footerIcon}
            src={LocationPic}
            alt='Map'
          />
              Map
      </Link>
    </footer>
  )
}

export default Footer
