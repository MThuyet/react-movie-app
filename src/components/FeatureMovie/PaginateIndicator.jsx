const PaginateIndicator = () => {
  return (
    <div className="absolute right-9 bottom-[5%]">
      <ul className="flex items-center gap-2">
        <li className="h-1 w-6 cursor-pointer bg-slate-100"></li>
        <li className="h-1 w-6 cursor-pointer bg-slate-600"></li>
        <li className="h-1 w-6 cursor-pointer bg-slate-600"></li>
        <li className="h-1 w-6 cursor-pointer bg-slate-600"></li>
      </ul>
    </div>
  );
};
export default PaginateIndicator;
