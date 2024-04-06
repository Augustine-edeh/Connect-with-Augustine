import { useState, useEffect } from "react";

const Links = () => {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../public/data/socialLinks.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSocialLinks(data);
      } catch (error) {
        console.error("Error fetching social-links data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul className="w-full">
      {socialLinks.map(({ name, url, key }) => (
        <a
          href={url}
          key={key}
          className="block outline-none active:text-off_black hover:text-off_black hover:bg-green focus:bg-green focus:text-off_black bg-grey text-center rounded-xl py-3.5 my-5"
        >
          {name}
        </a>
      ))}
    </ul>
  );
};

export default Links;
