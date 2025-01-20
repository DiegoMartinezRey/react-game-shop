import { StyledNavBar } from './navBar.styles';

const NavBar = () => {
	return (
		<StyledNavBar>
			<picture>
				<source
					media='(min-width: 768px)'
					srcSet='/public/assets/images/logos/logo-desktop.png'
				/>
				<source
					media='(min-width: 368px)'
					srcSet='/public/assets/images/logos/logo-mobile.png'
				/>
				<img srcSet='/public/assets/images/logos/logo-mobile.png' alt='logo' />
			</picture>
		</StyledNavBar>
	);
};

export default NavBar;
