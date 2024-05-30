interface Props {
  title: string;
  onClick: () => void;
  className?: string;
}

export default function ToggleBox({ title, className, onClick }: Props) {
  return (
    <div
      className={`border border-black rounded-md mt-2 py-2 px-4 cursor-pointer flex-1 transition-colors duration-300 text-sm ${
        className ?? ""
      }`}
      onClick={onClick}
    >
      <div className="text-lg font-bold mb-2">{title}</div>
    </div>
  );
}
