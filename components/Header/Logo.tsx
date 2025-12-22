export const Logo = ({ isScrolled }: { isScrolled?: boolean }) => {
  return (
    <h1
      className={`font-bold transition-all duration-300 ${
        isScrolled ? "text-xl" : "text-2xl"
      }`}
    >
      LOGO
    </h1>
  );
};
