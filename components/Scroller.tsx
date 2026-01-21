import { PropsWithChildren } from "react";

type TScroller = PropsWithChildren<{
  bgcolor?: string;
  className?: string;
}>;

export const Scroller = ({ children, bgcolor, className = "" }: TScroller) => {
  return (
    <div
      className={`
        custom-scroller
        flex flex-col justify-start gap-0.5
        w-full h-full
        overflow-x-hidden overflow-y-auto
        ${className}
      `}
      style={{
        backgroundColor: bgcolor || "inherit",
      }}
    >
      {children}
    </div>
  );
};
