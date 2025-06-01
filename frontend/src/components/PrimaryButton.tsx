import { Button, Text } from "@mantine/core"
import { FONT_FAMILY_INTER } from "../constants/fonts";

interface PrimaryButtonProps
{
    onClick?: () => void;
    text: string
    children?: React.ReactNode;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    loading?: boolean;
    variant?: "filled" | "outline" | "light" | "default";
    color?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    radius?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | number;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
    width?: string | number;
}

const PrimaryButton = ( props: PrimaryButtonProps ) =>
{
    return (
        <Button
            onClick={ props.onClick }
            disabled={ props.disabled }
            className={ props.className }
            style={ props.style }
            loading={ props.loading }
            size={ props.size || "md" }
            variant={ props.variant || "filled" }
            color={ props.color || "blue" }
            radius={ props.radius || "md" }
            fullWidth={ props.fullWidth || false }
            w={ props.width }
            leftSection={ props.leftIcon }
        >
            <Text ff={ FONT_FAMILY_INTER } fw={ 600 } >
                { props.text }
            </Text>
        </Button>
    )
}

export default PrimaryButton