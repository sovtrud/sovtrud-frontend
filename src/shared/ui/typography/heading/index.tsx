import React from "react";
import  './style.scss'

interface HeadingProps {
    children : React.ReactNode;
    fontSize: FontSize;
    fontWeight: FontWeight;
}
export enum FontSize {
    H1_36='36',
    H1_32='32',
    H1_28='28',
    H2_26='26',
    H3_24='24',
    H4_20='20',
     
} 
export enum FontWeight {
    LIGHT300='300',
    REGULAR400='400',
    MEDIUM500='500',
    SEMIBOLD600='600'
}

const selectTag = (size : FontSize, text : React.ReactNode,fw:FontWeight) => {
    switch (size) {
        case '36':
        case '32':
        case '28':
             return <h1  className={`h1_${size}_${fw}`} >{text}</h1>
        case '26':
            return <h2  className={`h2_${size}_${fw}`}> {text}</h2>
        case '24':
            return <h3  className={`h3_${size}_${fw}`}>{text}</h3>
        case '20':
            return <h4  className={`h4_${size}_${fw}`}>{text}</h4>
            
    }
    
}

const Heading = (props: HeadingProps) => {
    return (
        selectTag(props.fontSize,props.children, props.fontWeight)

    )
    
}

export default Heading;