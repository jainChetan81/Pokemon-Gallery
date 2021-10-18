import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState, FC, MouseEvent } from "react";
import ReactDOM from "react-dom";
import styles from "../../styles/Modal.module.css";

type Props = {
	show: boolean;
	title?: string;
	onClose: () => void;
	children?: any;
};

const Modal = ({ show, onClose, children, title }: any) => {
	const [isBrowser, setIsBrowser] = useState(false);
	useEffect(() => setIsBrowser(true), []);

	const handleClose = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		onClose();
	};

	const modalContent = show ? (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<div className={styles.header}>
					<button type="button" onClick={handleClose}>
						<FaTimes />
					</button>
				</div>
				{title && <h2 className={styles.title}>{title}</h2>}
				<div className={styles.body}>{children}</div>
			</div>
		</div>
	) : null;
	return isBrowser ? ReactDOM.createPortal(modalContent, document.body) : null;
};

Modal.propTypes = {
	show: PropTypes.bool.isRequired,
	title: PropTypes.string,
	onClose: PropTypes.func.isRequired,
};

export default Modal;
