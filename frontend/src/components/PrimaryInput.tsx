import { Input } from '@mantine/core'
import '../index.css'
import { FONT_FAMILY_INTER } from '../constants/fonts';

interface PrimaryInputProps
{
    placeholder?: string;
    value?: string;
    label: string
    radius?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | number;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
    autoComplete?: string;
    autoFocus?: boolean;
    fullWidth?: boolean;
    withAsterisk?: boolean;
    type?: "text" | "email" | "password" | "number" | "tel" | "url";
}

const PrimaryInput = ( props: PrimaryInputProps ) =>
{
    return (
        <Input.Wrapper className="custom-wrapper" ff={ FONT_FAMILY_INTER } size="md" w='100%' label={ props.label } withAsterisk={ props.withAsterisk } >
            <Input leftSection={ props.leftSection } type={ props.type } onChange={ props.onChange } size={ props.size } placeholder={ props.placeholder } radius={ props.radius } value={ props.value } />
        </Input.Wrapper>
    )
}

export default PrimaryInput