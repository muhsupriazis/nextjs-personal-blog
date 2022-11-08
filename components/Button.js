export default function Button({ children, type, ...rest }) {
  return (
    <button
      className="bg-blue-600 text-white text-sm rounded p-2"
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
