export default function Title(props) {
  return (
    <div className="flex gap-6 justify-center items-center my-14">
      <div>
        <h2 className="font-[Bely] text-3xl">{props.children}</h2>
      </div>
      <div className="bg-slate-500 h-[1px] grow"></div>
    </div>
  );
}
