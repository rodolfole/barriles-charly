import Icon from "../components/ui/Icon";
import Title from "../components/ui/Title";
import data from "../data";

const Contact = () => {
  return (
    <div className="bg-[#2b1c15] flex flex-col items-center py-10" id="contact">
      <Title title={data.contact.title} />
      <div className="flex flex-col md:flex-row w-full items-center md:items-start md:justify-around pt-10">
        <div className="text-center mb-10">
          <Icon color="yellow-500" icon={data.ubication.info.icon} size="4x" />
          <div className="text-white font-bold text-lg">
            <p>
              {data.ubication.info.address}, <br /> Col.
              {data.ubication.info.colony}
            </p>
            <p>
              {data.ubication.info.town},{data.ubication.info.state}, México CP.
              {data.ubication.info.postal_code}
            </p>
          </div>
        </div>
        <div className="text-center mb-10 font-bold text-lg">
          <Icon color="yellow-500" icon={data.contact.email.icon} size="4x" />
          <p className="text-white">{data.contact.email.val}</p>
        </div>
        <div className="text-center mb-10 font-bold text-lg">
          <Icon color="yellow-500" icon={data.contact.phone.icon} size="4x" />
          <p className="text-white">{data.contact.phone.val}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
