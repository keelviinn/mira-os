interface Props {
  title: string;
  button?: React.ReactNode;
  children: React.ReactNode;
}

export default function Card({ title, button, children }: Props) {
  return (
    <div className="relative flex flex-col break-words bg-white bg-clip-border rounded border border-black/10">
      <div className="py-3 px-5 m-0 border-b border-black/10 flex items-center justify-between bg-[#f8f9fa]">
        <h1>{title}</h1>

        {button}
      </div>
      <div className="flex-auto p-5">{children}</div>
    </div>
  );
}
