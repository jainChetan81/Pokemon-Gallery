import PropTypes from "prop-types";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Pokemon } from "../types";

const PokemonCard = ({ name, url, image }: Pokemon) => {
	const [showName, setShowName] = useState(false);
	return (
		<li
			onMouseEnter={() => setShowName(true)}
			onMouseLeave={() => setShowName(false)}
			className={`${styles.card} bg-gray-300`}
			style={{
				backgroundImage: `url(${image})`,
			}}
		>
			{showName && name}
		</li>
	);
};

PokemonCard.propTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default PokemonCard;
