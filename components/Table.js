export default function Table({ children }) {
  return (
    <table className="text-sm">
      <thead className="border-solid border-b-[1px] border-slate-300">
        <tr className="text-left text-slate-700">
          <th className="w-[5%] font-normal pb-2">No</th>
          <th className="w-[25%] font-normal">Title</th>
          <th className="font-normal">Summary</th>
          <th className="w-[20%] font-normal">Author</th>
          <th className="w-[10%] font-normal">Action</th>
        </tr>
      </thead>
      <tbody className="align-text-top">{children}</tbody>
    </table>
  );
}
