import Image from "next/image";

export const FrameworkCard = ({ id }: { id: string }) => {
  const imagePath = `/${id}_icon.svg`;
  // const content = getFrameworkDescriptionById(id as EFrameworkCard);

  return (
    <div className={"bg-transparent"}>
      <figure className="shrink-0 h-1/2 min-h-0 flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110 active:scale-95">
        <Image
          src={imagePath}
          alt="product_card_icon"
          width={100}
          height={100}
          priority
          className="w-[100px] h-[100px] object-contain "
        />
      </figure>
    </div>
  );
};
