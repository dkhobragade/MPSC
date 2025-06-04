import { Text } from "@mantine/core"
import { FONT_FAMILY_PLAYFAIR } from "../constants/fonts";
import '../App.css'

interface PrimaryTextProps
{
    text: string
    className?: string
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    pointer?: boolean
    onClick?: () => void
    textDecoration?: "auto" | "blink" | "dashed" | "dotted" | "double" | "overline" | "underline"
}


const PrimaryText = ( props: PrimaryTextProps ) =>
{
    return (
        <Text td={ props.textDecoration } onClick={ props.onClick } style={ { fontFamily: FONT_FAMILY_PLAYFAIR } } className={ props.pointer ? "pointer" : props.className } size={ props.size || "md" }  >{ props.text }</Text>
    )
}

export default PrimaryText