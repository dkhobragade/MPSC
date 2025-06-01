import { PasswordInput } from '@mantine/core'
import '../index.css'
import { FONT_FAMILY_INTER } from '../constants/fonts';

interface PrimaryPasswordProps
{
    label: string
    placeholder?: string;
    value?: string;
    onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
    radius?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | number;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    autoComplete?: string;
    autoFocus?: boolean;
    fullWidth?: boolean;
    withAsterisk?: boolean;
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
}

const PrimaryPassword = ( props: PrimaryPasswordProps ) =>
{
    return (
        <PasswordInput withAsterisk={ props.withAsterisk } leftSection={ props.leftSection } size='md' ff={ FONT_FAMILY_INTER } className='custom-wrapper-pass' w="100%" onChange={ props.onChange } label={ props.label } placeholder={ props.placeholder } value={ props.value } />
    )
}

export default PrimaryPassword