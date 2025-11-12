"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {color} from "@/lib/constants/colors";
import {useState} from "react";
import * as React from "react";

interface SideBarLinkProps {
    linkHref: string,
    Icon: React.ComponentType<{fill:string,className:string,style:React.CSSProperties}>,
    title: string,
    expanded?: boolean,
}

const SideBarLink=({linkHref,title,Icon,expanded}:SideBarLinkProps)=>{
    const pathname=usePathname();
    const isActive=pathname===linkHref;
    const [isHovered, setHovered] = useState(false);
    return(
        <Link
            href={linkHref}
            className={`flex flex-1 flex-row justify-center items-center hover:text-[#1E5598] hover:fill-[#1E5598] gap-2 w-fit`}
            onMouseEnter={()=>setHovered(true)}
            onMouseLeave={()=>setHovered(false)}
        >
            <Icon
                fill={color.primary}
                className={`h-[41px]  cursor-pointer`}
                style={{
                    fill:isActive?color.secondary:isHovered?color.secondary:color.primary,
                }}
            />
            {expanded && (
                <h3 style={{color:isActive?color.secondary:isHovered?color.secondary:color.primary, fontSize:"24px"}}>{title}</h3>
            )}
        </Link>
    )
}

export default SideBarLink;