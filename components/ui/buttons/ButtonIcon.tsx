import { ICONS, TIcon } from "@/lib/icons";

type TButtonIcon = {
  label?: string;
  className?: string;
  icon?: TIcon;
  iconClassName?: string;
  onClick?: VoidFunction;
  disabled?: boolean;
};

export const ButtonIcon = ({
  label,
  icon = "star",
  iconClassName = "h-4 w-4",
  className = "",
  onClick,
  disabled = false,
}: TButtonIcon) => {
  const IconComponent = ICONS[icon];
  return (
    <button
      className={`btn bg-[#5ac581] text-primary-content border-[#4aae6f] no-shadow ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label ? undefined : `${icon} button`}
    >
      {label && label}
      {IconComponent(iconClassName)}
    </button>
  );
};
