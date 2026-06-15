import { LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServiceLinkProps {
  id: string;
  title: string;
  icon: LucideIcon;
}

export const ServiceLink = ({ id, title, icon: Icon }: ServiceLinkProps) => {
  return (
    <Link
      href={`/${id}`}
      className="flex items-center gap-1.5 md:gap-3 p-1.5 md:p-4 rounded-lg hover:bg-primary-content/10 transition-colors group w-full"
    >
      <div className="shrink-0">
        <Image
          className="size-4 md:size-6 rounded-box md:hidden block"
          src="/check_icon.svg"
          alt="checked icon"
          width={24}
          height={24}
          priority
        />
        <Icon className="w-4 h-4 md:w-6 md:h-6 hidden md:block" />
      </div>
      <span className="text-primary-content text-sm md:text-lg font-medium group-hover:translate-x-1 transition-transform">
        {title}
      </span>
    </Link>
  );
};
