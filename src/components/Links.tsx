import SocialLinks from "../../public/data/SocialLinks";

const Links = () => {
  return (
    <ul className="w-full">
      {SocialLinks.map(({ name, url, key }) => (
        <a
          href={url}
          key={key}
          className="block outline-none font-InterSemiBold active:text-off_black hover:text-off_black hover:bg-green focus:bg-green focus:text-off_black bg-grey text-center rounded-xl py-3.5 my-5"
        >
          {name}
        </a>
      ))}
    </ul>
  );
};

export default Links;
