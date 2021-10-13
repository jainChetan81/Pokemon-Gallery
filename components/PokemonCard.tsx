import PropTypes from "prop-types";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Pokemon } from "../types";

const PokemonCard = ({ name, image }: Pokemon) => {
	const [showName, setShowName] = useState(false);
	return (
		<div
			onMouseEnter={() => setShowName(true)}
			onMouseLeave={() => setShowName(false)}
			className={`${styles.card} bg-gray-300`}
			data-testid="pokemon-card"
			style={{
				backgroundImage: `url(${image})`,
			}}
		>
			{showName && <h1>{name}</h1>}
		</div>
	);
};

PokemonCard.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default PokemonCard;
