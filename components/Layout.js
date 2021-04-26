import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
	return (
		<div className="flex flex-col h-screen">
			<Header />
			<div className="mb-auto">{props.children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
