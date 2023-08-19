import Title from "../components/ui/Title";
import data from "../data";

const Us = () => {
  return (
    <div
      className={`flex justify-end bg-no-repeat bg-cover h-full md:h-[600px] p-0 md:pl-40 w-full`}
      style={{ backgroundImage: `url(${data?.us.img})` }}
      id="us"
    >
      <div className="w-full md:w-[650px] p-12 md:p-20 bg-[rgba(43,28,21,0.8)]">
        <Title title={data.us.title} />
        <p className="leading-[46px] font-normal text-base text-white">
          {data.us.description}
        </p>
      </div>
    </div>
  );
};

export default Us;
