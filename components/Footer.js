const Footer = () => {
	const socialList = [
		{
			name: 'Twitter',
			url: 'https://twitter.com/manuelalferez',
		},
		{
			name: 'Telegram',
			url: 'https://t.me/manuelalferez',
		},
		{
			name: 'GitHub',
			url: 'https://github.com/manuelalferez',
		},
		{
			name: 'Instagram',
			url: ' https://www.instagram.com/manuelalferez_',
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/manuelalferez/',
		},
		{
			name: 'Lumberando',
			url: ' https://lumberando.web.app/',
		},
		{
			name: "Manuel's Channel",
			url: 'https://t.me/joinchat/F1LBnl7D8sc5MDU8',
		},
	];

	return (
		<div className="absolute bottom-0 p-2 w-screen text-center text-gray-500 font-light">
			{socialList.map((item) => (
				<a href={item.url} className="mr-2 p-1 hover:text-black">
					{item.name}
				</a>
			))}
		</div>
	);
};

export default Footer;
