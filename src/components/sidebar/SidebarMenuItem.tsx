'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

interface SidebarMenuItemProps {
    path:string;
    icon:ReactElement;
    title:string;
    subtitle:string
}

export const SidebarMenuItem = ({
  path,
  icon,
  title,
  subtitle,
}: SidebarMenuItemProps) => {
  const activePath = usePathname();
  
  return (
    <Link
      href={path}
      className={`${
        path === activePath ? `bg-blue-800` : ``
      } w-full px-2 inline-flex space-x-2 items-center  py-3  hover:bg-blue-600 transition ease-linear duration-150 rounded-sm mb-2`}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subtitle}
        </span>
      </div>
    </Link>
  );
};
