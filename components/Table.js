export default function Table({ children }) {
  return (
    <table className="text-[12px]">
      <thead className="border-solid border-b-[1px] border-slate-300">
        <tr className="text-left text-slate-700">
          <th className="w-[3%] font-normal">No</th>
          <th className="w-[20%] font-normal">Title</th>
          <th className="w-[37%] font-normal">Summary</th>
          <th className="w-[15%] font-normal">Update At</th>
          <th className="w-[15%] font-normal">Author</th>
          <th className="w-[10%] font-normal">Action</th>
        </tr>
      </thead>
      <tbody className="align-text-top">{children}</tbody>
    </table>
  );
}
