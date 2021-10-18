import Link from "next/link";
import PropTypes from "prop-types";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Pokemon } from "../types";

const PokemonCard = ({ name, image, index }: Pokemon) => {
	const [showName, setShowName] = useState(false);
	return (
		<article
			onMouseEnter={() => setShowName(true)}
			onMouseLeave={() => setShowName(false)}
			className={styles.card}
			data-testid="pokemon-card"
			style={{
				backgroundImage: `url(${image})`,
			}}
		>
			<Link href={`/pokemon/${index + 1}`}>
				<a>{showName && <h2>{name}</h2>}</a>
			</Link>
		</article>
	);
};

PokemonCard.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
};

export default PokemonCard;
