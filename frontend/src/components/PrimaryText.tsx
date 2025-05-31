import { Text } from "@mantine/core"
import { FONT_FAMILY_PLAYFAIR } from "../constants/fonts";
import '../App.css'

interface PrimaryTextProps
{
    text: string
    className?: string
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    pointer?: boolean
}


const PrimaryText = ( props: PrimaryTextProps ) =>
{
    return (
        <Text style={ { fontFamily: FONT_FAMILY_PLAYFAIR } } className={ props.pointer ? "pointer" : props.className } size={ props.size || "md" }  >{ props.text }</Text>
    )
}

export default PrimaryText