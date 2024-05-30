import Button from "@/components/Button/Button";

interface Props {
  view: {
    switchTo: string;
  };
  onClick: () => void;
}

export default function buttonComponent({ view, onClick }: Props) {
  return (
    <Button variant="secondary" type="button" onClick={onClick}>
      Switch to {view.switchTo}
    </Button>
  );
}
