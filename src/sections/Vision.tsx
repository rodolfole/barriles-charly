import Icon from "../components/ui/Icon";
import Title from "../components/ui/Title";
import data from "../data";

const Vision = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-evenly mb-16">
      <Icon icon={data.about.vision.icon} />
      <div className="px-0 md:px-8">
        <Title title={data.about.vision.title} />
        <p className="text-white mt-4">{data.about.vision.description}</p>
      </div>
    </div>
  );
};

export default Vision;
