const Block = ({ Icon, data }: any) => {
  return (
    <div className="flex mt-10 rounded-lg w-42 h-20 ">
      <div className="flex flex-row justify-center items-center gap-2 text-4xl font-bold p-2">
        {Icon}
        <h3 className="flex items-center">{data}</h3>
      </div>
    </div>
  );
};

export default Block;
