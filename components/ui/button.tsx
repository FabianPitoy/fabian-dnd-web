export function Button({ children, ...props }: any) {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" {...props}>
      {children}
    </button>
  );
}