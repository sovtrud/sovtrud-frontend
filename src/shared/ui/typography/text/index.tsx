import React from 'react'
import { FontWeight } from '../heading';
import './style.scss'

interface TextProps {
    children : React.ReactNode;
    fontSize: FontSizeText;
    fontWeight: FontWeight;
    lineHeight: LineHeight;
}

export enum LineHeight {
    LH14='14',
    LH15='15',
    LH18='18',
    LH21='21',
    LH22='22',
    LH23='23',
    LH24='24',
    LH26='26',
    // LH28='28',
    // LH30='30',
    // LH36='36',
    // LH40='40',
    // LH43='43',
    
}

export enum FontSizeText {
    
    TEXT22='22',
    TEXT18='18',
    TEXT17='17',
    TEXT16='16',
    TEXT15='15',
    TEXT14='14',
    TEXT13='13',
    TEXT12='12',
    TEXT10='10',
  
} 

const Text = (props : TextProps) => {
    return (
        <p className={`text${props.fontSize} fw${props.fontWeight} lh${props.lineHeight}`}>
            {props.children}
        </p>
    )
    
}
export default Text;