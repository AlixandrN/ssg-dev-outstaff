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
  icon,
  iconClassName = "h-4 w-4",
  className = "",
  onClick,
  disabled = false,
  isSubmitting,
  ...props
}: IButtonIcon) => {
  const IconComponent = isSubmitting
    ? ICONS["spinner"]
    : icon
      ? ICONS[icon]
      : null;
  return (
    <button
      type={type}
      className={`${label ? "btn text-primary-content" : ""} ${className} cursor-pointer`}
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
      {IconComponent && IconComponent(iconClassName)}
    </button>
  );
};
