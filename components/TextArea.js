export default function TextArea({ label, placeholder, ...rest }) {
  return (
    <label className="block">
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-slate-700">
        {label}
      </span>
      <textarea
        className="mt-1 px-3 py-2 text-slate-700 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded sm:text-sm focus:ring-1"
        placeholder={placeholder}
        {...rest}
      ></textarea>
    </label>
  );
}
