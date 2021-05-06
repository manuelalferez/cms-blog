import Footer from './Footer';
import Head from 'next/head';
import Header from './Header';

const Layout = (props) => {
	return (
		<div className="flex flex-col h-screen">
			<Head>
				<title>Manuel</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/x-icon" href="https://www.flaticon.com/svg/vstatic/svg/3600/3600932.svg?token=exp=1620320712~hmac=575ddf8353f25f7b8aad5f92df23fe3d" />
			</Head>
			<Header />
			<div className="mb-auto">{props.children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
