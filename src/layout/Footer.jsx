export const Footer = () => {
	return (
		<footer className="page-footer  green darken-3">
			<div className="footer-copyright">
				<div className="container">
					© {new Date().getFullYear()} Copyright Text
					<a className="grey-text text-lighten-4 right" href="#!">
						Info
					</a>
				</div>
			</div>
		</footer>
	);
};
