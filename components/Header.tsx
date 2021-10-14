import PropTypes from "prop-types";
import { useTheme } from "next-themes";
import styles from "../styles/Header.module.css";
import ToggleButton from "./ToggleButton";

const Header = ({ title }: any) => {
	const { theme, setTheme } = useTheme();
	return (
		<header className={styles.header_container}>
			<div>
				<svg className={styles.header_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
					<path fill="none" d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z" />
					<path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
				</svg>
			</div>
			<div className={styles.header_title}>
				<h1>{title}</h1>
				<ToggleButton clicked={() => setTheme(theme === "dark" ? "light" : "dark")} />
			</div>
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string,
};
Header.defaultProps = {
	title: "Welcome to Next Pokedox",
};

export default Header;
