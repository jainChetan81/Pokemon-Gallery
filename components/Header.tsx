import PropTypes from "prop-types";

const Header = ({ title }: any) => (
	<header>
		<div className="logo" drag="true" dragconstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} dragelastic={0.7}>
			<svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
				<path fill="none" d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z" />
				<path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
			</svg>
		</div>
		<div className="title">
			<h1>{title}</h1>
		</div>
	</header>
);

Header.propTypes = {
	title: PropTypes.string,
};
Header.defaultProps = {
	title: "Welcome to Next Pokedox",
};

export default Header;
