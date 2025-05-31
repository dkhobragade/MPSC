import { Text } from "@mantine/core"
import { FONT_FAMILY_ROBOTO } from '../constants/fonts';


interface SecondaryTextProps
{
    text: string
    className?: string
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    style?: React.CSSProperties;
    fw?: 400 | 500 | 550 | 600 | 700 | 800 | 900;
    color?: string;
    align?: "left" | "center" | "right" | "justify";
    lineClamp?: number;
    truncate?: boolean;
    weight?: number;
}

const SecondaryText = ( props: SecondaryTextProps ) =>
{
    return (
        <Text c={ props.color } style={ { fontFamily: FONT_FAMILY_ROBOTO } } fz={ 20 } fw={ props.fw } className={ props.className } size={ props.size || "md" } >{ props.text }</Text>

    )
}

export default SecondaryText