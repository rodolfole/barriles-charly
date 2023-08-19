import Icon from "../components/ui/Icon";
import Title from "../components/ui/Title";
import data from "../data";

const Mission = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly">
      <Icon icon={data.about.mission.icon} />
      <div className="px-0 md:px-8">
        <Title title={data.about.mission.title} />
        <p className="text-white mt-4">{data.about.mission.description}</p>
      </div>
    </div>
  );
};

export default Mission;
