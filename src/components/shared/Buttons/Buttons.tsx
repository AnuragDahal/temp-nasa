import { Button } from "@material-tailwind/react";

export function BlockLevelButton({ text }) {
  return (
    <Button  className="text-red-800" fullWidth>
      {text}
    </Button>
  );
}
