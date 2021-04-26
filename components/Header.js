import Link from 'next/link';

const Header = () => {
	return (
		<div className="border-b-2 p-2 text-xl font-bold mt-5 text-center">
			<Link href="/">
				<a>manuelalferez.com</a>
			</Link>
		</div>
	);
};

export default Header;
