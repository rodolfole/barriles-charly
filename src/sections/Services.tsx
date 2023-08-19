import Icon from "../components/ui/Icon";
import Fade from "../components/ui/Fade";
import Title from "../components/ui/Title";
import data from "../data";

const Services = () => {
  return (
    <div
      className={`h-full md:h-[720px] flex items-center bg-fixed bg-no-repeat bg-cover bg-black`}
      style={{ backgroundImage: `url(${data.about.services.img})` }}
      id="services"
    >
      <Fade classes="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        {data.about.services.items.map((item) => (
          <div className="items-center flex flex-col pb-10 md:flex-row">
            <Icon icon={item.icon} size="4x" />
            <div className="p-0 md:px-11">
              <Title title={item.title} />
              <p className="text-white">{item.description}</p>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Services;
