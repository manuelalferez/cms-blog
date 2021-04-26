import Link from 'next/link';

const Header = () => {
	return (
		<div className="max-w-xl mx-auto p-2 text-xl font-bold mt-5">
			<Link href="/">
				<a>manuelalferez.com</a>
			</Link>
		</div>
	);
};

export default Header;
