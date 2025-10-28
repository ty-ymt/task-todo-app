"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  href?: string;
  to?: string;
  label: string;
  color?: "blue" | "green" | "red" | "gray";
  align?: "start" | "center" | "end";
  type?: "button" | "submit"
};

const colorMap: Record<string, { base: string; hover: string }> = {
  blue: { base: "bg-blue-500", hover: "hover:bg-blue-600" },
  green: { base: "bg-green-500", hover: "hover:bg-green-600" },
  red: { base: "bg-red-500", hover: "hover:bg-red-600" },
  gray: { base: "bg-gray-500", hover: "hover:bg-gray-600" },
};

const Button = ({ href, to, label, color = "blue", align = "end", type = "button"}: Props) => {
  const router = useRouter();
  const { base, hover } = colorMap[color];

  const className = `${base} ${hover} text-white font-bold py-1.5 pl-3 pr-4 rounded-md cursor-pointer my-3`;

  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  }[align];

  if (href) {
    return (
      <div className={`flex ${justifyClass}`}>
        <Link href={href}>
          <button className={className}>{label}</button>
        </Link>
      </div>
    );
  }
  return (
    <div className={`flex ${justifyClass}`}>
      <button
        type={type}
        className={className}
        onClick={() => {
          if (to) router.push(to);
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
