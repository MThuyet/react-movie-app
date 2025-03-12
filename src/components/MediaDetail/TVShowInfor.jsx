const TVShowInfor = (props) => {
  const { TVShowInfor } = props;

  return (
    <div>
      <p className="mb-8 text-[20px] font-bold md:mb-2 md:text-[1.8vw] lg:text-[1.4vw]">
        Information
      </p>
      <div className="mb-4">
        <p className="font-bold sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1.1vw]">
          Original Name
        </p>
        <p className="text-slate-400">{TVShowInfor.original_name}</p>
      </div>

      <div className="mb-4">
        <p className="font-bold sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1.1vw]">
          Original Country
        </p>
        <p>
          {(TVShowInfor.origin_country || []).map((countryCode) => (
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
        <p className="text-slate-400">{TVShowInfor.status}</p>
      </div>

      <div className="mb-4">
        <p className="font-bold sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1.1vw]">
          Network
        </p>
        <p className="text-slate-400">
          {(TVShowInfor.networks || []).map((net) => {
            return (
              <img
                className="invert"
                key={net.id}
                src={`https://media.themoviedb.org/t/p/h30${net.logo_path}`}
                alt=""
              />
            );
          })}
        </p>
      </div>
    </div>
  );
};
export default TVShowInfor;
