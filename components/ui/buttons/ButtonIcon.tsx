import { ComponentPropsWithoutRef } from "react";
import { ICONS, TIcon } from "@/lib/icons";

interface IButtonIcon extends ComponentPropsWithoutRef<"button"> {
  label?: string;
  className?: string;
  icon?: TIcon;
  iconClassName?: string;
  onClick?: VoidFunction;
  disabled?: boolean;
  isSubmitting?: boolean;
}

export const ButtonIcon = ({
  type = "button",
  label,
  icon = "star",
  iconClassName = "h-4 w-4",
  className = "",
  onClick,
  disabled = false,
  isSubmitting,
  ...props
}: IButtonIcon) => {
  const IconComponent = isSubmitting ? ICONS["spinner"] : ICONS[icon];
  return (
    <button
      type={type}
      className={`btn btn-green text-primary-content ${className}`}
      onClick={onClick}
      disabled={isSubmitting || disabled}
      aria-label={
        isSubmitting
          ? "The form is being submitted, please wait"
          : label
          ? undefined
          : `${icon} button`
      }
      {...props}
    >
      {(() => {
        return isSubmitting ? "Submitting the form..." : label ? label : null;
      })()}
      {IconComponent(iconClassName)}
    </button>
  );
};
