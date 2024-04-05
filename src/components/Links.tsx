const Links = () => {
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/exampleuser",
      icon: "twitter-icon.svg",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/exampleuser",
      icon: "instagram-icon.svg",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/exampleuser",
      icon: "facebook-icon.svg",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/exampleuser",
      icon: "linkedin-icon.svg",
    },
    {
      name: "Frontend Mentor",
      url: "https://www.frontendmentor.io/profile/exampleuser",
      icon: "frontendmentor-icon.svg",
    },
    {
      name: "Personal Portfolio",
      url: "https://exampleuser.com",
      icon: "portfolio-icon.svg",
    },
  ];

  return (
    <ul className="w-full">
      {socialLinks.map((social) => (
        <a
          href={social.url}
          className="block outline-none active:text-off_black hover:text-off_black hover:bg-green focus:bg-green focus:text-off_black bg-grey text-center rounded-xl py-3.5 my-5"
        >
          {social.name}
        </a>
      ))}
    </ul>
  );
};

export default Links;
