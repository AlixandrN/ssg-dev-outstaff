interface IBurgerButton {
  toggleBurgerMenu: VoidFunction;
  isBurgerMenuOpen: boolean;
}

export const BurgerButton = ({
  toggleBurgerMenu,
  isBurgerMenuOpen,
}: IBurgerButton) => {
  return (
    <button className="md:hidden p-2" onClick={() => toggleBurgerMenu()}>
      <div className="w-6 h-6 relative">
        <span
          className={`
                  block absolute h-0.5 w-6 bg-current transition-all duration-300
                  ${isBurgerMenuOpen ? "rotate-45 top-3" : "top-1"}
                `}
        ></span>
        <span
          className={`
                  block absolute h-0.5 w-6 bg-current top-3 transition-all duration-300
                  ${isBurgerMenuOpen ? "opacity-0" : "opacity-100"}
                `}
        ></span>
        <span
          className={`
                  block absolute h-0.5 w-6 bg-current transition-all duration-300
                  ${isBurgerMenuOpen ? "-rotate-45 top-3" : "top-5"}
                `}
        ></span>
      </div>
    </button>
  );
};
