import styles from "../styles/Toggle.module.css";
import PropTypes from "prop-types";

const ToggleButton = ({ clicked }: any) => (
	<div onClick={clicked} className={styles.toggle}>
		<input type="checkbox" className={styles.checkbox} aria-label="Toggle Dark Mode" />
		<div className={styles.knobs}></div>
		<div className={styles.layer}></div>
	</div>
);

ToggleButton.propTypes = {
	clicked: PropTypes.func.isRequired,
};
export default ToggleButton;
