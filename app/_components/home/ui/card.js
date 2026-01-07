export default function Card({ children }) {
  return (
    <div className="p-10 bg-white border border-border-subtle shadow-[0px_10px_30px_-10px_#0000000D] rounded-3xl w-full">
      {children}
    </div>
  );
}
