import Link from 'next/link';

const Header = () => {
	return (
		<div className="flex justify-center border-b-2 p-2 text-xl font-bold mt-5 text-center">
			<Link href="/" className="max-w-xl">
				<a>manuelalferez.com</a>
			</Link>
		</div>
	);
};

export default Header;
