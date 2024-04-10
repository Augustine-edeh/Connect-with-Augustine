import SocialLinks from "../../public/data/SocialLinks";

const Links = () => {
  return (
    <ul className="w-full">
      {SocialLinks.map(({ name, url, key }) => (
        <li
          key={key}
          className="flex font-InterSemiBold rounded-xl overflow-hidden my-5"
        >
          <a
            href={url}
            className="outline-none rounded-xl bg-grey active:text-off_black hover:text-off_black hover:bg-green focus:bg-green focus:text-off_black w-full h-full py-3.5 text-center transition-all"
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
