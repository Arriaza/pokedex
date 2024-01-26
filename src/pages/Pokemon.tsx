import { useNavigate, useParams } from 'react-router-dom'
import PokeballImg from '../assets/pokeball.png'
import Footer from '../components/Footer'
import { PokemonDetails } from '../types/types'
import { useEffect, useState } from 'react'
import { fetchPokemon } from '../api/fetchPokemon'
import LoadingScreen from '../components/LoadingScreen'
import { waitFor } from '../utils/utils'
import styles from './pokemon.module.css'

const Pokemon = () => {
  const {name} = useParams()
  const navigate = useNavigate()
  const [pokemon, setPokemon] = useState<PokemonDetails>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true)
      waitFor(500)
      const fetchedPokemon = await fetchPokemon(name as string)
      setPokemon(fetchedPokemon)
      setIsLoading(false)
    }

    getPokemon()

  }, [name])

  if (isLoading || !pokemon) {
    return <LoadingScreen />
  }

  return (
    <>
      <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
        <img className={styles.pokeballImg} src={PokeballImg} alt='Pokeball' />{" "}
          Go back
      </button>

      <div className={styles.pokemon}>
        <main className={styles.pokemonInfo}>
          <div className={styles.pokemonInfoTitle}>{name?.toUpperCase()}</div>
          <div>Nr. {pokemon?.id}</div>
          <div>
            <img
              className={styles.pokemonInfoImg}
              src={pokemon?.imgSrc}
              alt={pokemon?.name}
            />
          </div>
          <div>HP: {pokemon?.hp}</div>
          <div>Attack: {pokemon?.attack}</div>
          <div>Defense: {pokemon?.defense}</div>
        </main>
      </div>

      <Footer />

    </>
  )
}

export default Pokemon
function awaitFor(arg0: number) {
  throw new Error('Function not implemented.')
}
