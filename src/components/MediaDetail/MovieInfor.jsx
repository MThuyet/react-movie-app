import { currencyFormatter } from "@libs/utils";

const MovieInfor = (props) => {
  const { movieInfor } = props;

  return (
    <div>
      <p className="mb-8 text-[20px] font-bold md:mb-2 md:text-[1.8vw] lg:text-[1.4vw]">
        Information
      </p>
      <div className="mb-4">
        <p className="font-bold sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1.1vw]">
          Original Name
        </p>
        <p className="text-slate-400">{movieInfor.original_title}</p>
      </div>

      <div className="mb-4">
        <p className="font-bold sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1.1vw]">
          Original Country
        </p>
        <p>
          {(movieInfor.origin_country || []).map((countryCode) => (
            <img
              className="mt-1 mr-1 md:h-[2.5vw]"
              key={countryCode}
              src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
              alt=""
            />
          ))}
        </p>
      </div>

      <div className="mb-4">
        <p className="font-bold sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1.1vw]">
          Status
        </p>
        <p className="text-slate-400">{movieInfor.status}</p>
      </div>

      <div className="mb-4">
        <p className="font-bold sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1.1vw]">
          Budget
        </p>
        <p className="text-slate-400">{currencyFormatter(movieInfor.budget)}</p>
      </div>

      <div className="mb-4">
        <p className="font-bold sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1.1vw]">
          Revenue
        </p>
        <p className="text-slate-400">
          {currencyFormatter(movieInfor.revenue)}
        </p>
      </div>
    </div>
  );
};
export default MovieInfor;
