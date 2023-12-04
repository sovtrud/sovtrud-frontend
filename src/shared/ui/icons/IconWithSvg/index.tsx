/// <reference types="vite-plugin-svgr/client" />

import React from "react";
import  './style.scss'

interface IconWithSvgProps {
    status: string;
    size: SvgSize;
    children: React.FC<React.SVGProps<SVGSVGElement>>;
  }

export enum SvgSize {
    BASE30='30',
    BASE24='24',
    BASE16='16',
    
} 

 export default function IconWithSvg(props: IconWithSvgProps) {
    return (
     <>
         <props.children className={`${props.status === 'normal'? 'normal' : '' } base${props.size} `}/>
         
     </>
    )
}