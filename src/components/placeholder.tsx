import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement;
  button?: React.ReactElement;
};

const Placeholder = ({ label, icon, button }: PlaceholderProps) => {
  // Set default values explicitly
  const iconElement = icon ?? <LucideMessageSquareWarning />;
  const buttonElement = button ?? <div />;

  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {cloneElement(iconElement, {
        className: "w-16 h-16",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(buttonElement, {
        className: "h-10",
      })}
    </div>
  );
};

export { Placeholder };
