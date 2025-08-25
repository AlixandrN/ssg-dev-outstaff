import Link from "next/link";

interface IButtonLink {
  link: string;
}

export default function ButtonLink({ link }: IButtonLink) {
  return (
    <Link href={`/${link}`} className="btn btn-primary">
      go to {link}
    </Link>
  );
}
