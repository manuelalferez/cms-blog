const Footer = () => {
  const socialList = [
    {
      name: "Twitter",
      url: "https://twitter.com/manuelalferez",
    },
    {
      name: "GitHub",
      url: "https://github.com/manuelalferez",
    },
    {
      name: "Telegram",
      url: "https://t.me/manuelalferez",
    },
    {
      name: "Medium",
      url: "https://medium.com/me/stories/public",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/manuelalferez/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/manuelalferez_",
    },
  ];

  return (
    <div className="flex justify-center flex-wrap border-t-2 p-2 w-screen text-center text-gray-500 font-light mt-7">
      {socialList.map((item) => (
        <a href={item.url} className="mr-2 p-1 hover:text-black">
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default Footer;
