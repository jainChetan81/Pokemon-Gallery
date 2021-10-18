import PropTypes from "prop-types";
import styles from "../styles/Toggle.module.css";

const ToggleButton = ({ clicked }: any) => (
	<div onMouseDown={clicked} className={styles.toggle} role="button" tabIndex={0}>
		<input type="checkbox" className={styles.checkbox} aria-label="Toggle Dark Mode" />
		<div className={styles.knobs} />
		<div className={styles.layer} />
	</div>
);

ToggleButton.propTypes = {
	clicked: PropTypes.func.isRequired,
};
export default ToggleButton;
