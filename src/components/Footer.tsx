import data from "../data";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#f5b800] flex flex-col md:flex-row py-7 items-center md:justify-around text-lg font-semibold">
      <p>
        &copy; {year} {data.contact.company}. {data.ui.footer.copy}
      </p>
      <p>
        {data.ui.footer.by.val}
        <a
          href={data.ui.footer.by.web}
          rel="noopener noreferrer"
          target="_blank"
        >
          {data.ui.footer.by.owner}
        </a>
      </p>
    </div>
  );
};

export default Footer;
