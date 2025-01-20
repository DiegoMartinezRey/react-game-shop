import { StyledHome } from './home.styles';

const Home = () => {
	return (
		<StyledHome>
			<h1>Gamer Shop</h1>
			<picture>
				<source
					media='(min-width: 768px)'
					srcSet='/public/assets/images/banner-desktop.jpg'
				/>
				<source
					media='(min-width: 368px)'
					srcSet='/public/assets/images/banner-mobile.jpg'
				/>
				<img srcSet='/public/assets/images/banner-mobile.jpg' alt='banner' />
			</picture>
			<div>
				<p>Welcome to GAMER SHOP </p>
				<p>
					Discover a world of gaming excitement at your fingertips! From the
					latest blockbusters to timeless classics, we offer an extensive
					collection of games for all platforms.{' '}
				</p>
			</div>
			<div>
				<p>🎮 Why Choose Us?</p>
				<ul>
					<li>Wide Selection: Thousands of titles across all genres.</li>
					<li>Great Deals: Competitive prices and exclusive offers.</li>
					<li>Instant Access: Digital downloads available 24/7.</li>
					<li>Trusted Service: Fast and secure shopping experience.</li>
				</ul>
				<p>
					Level up your gaming experience today! Explore, shop, and play like
					never before.
				</p>
			</div>
			<button>Go To Game Store</button>
		</StyledHome>
	);
};

export default Home;
