import { Select } from '@mantine/core'
import { IconComponents } from '@tabler/icons-react'

interface PrimarySelectProps
{
    label?: string
    placeholder?: string
    data: string[]
    value?: string
}

const PrimarySelect = ( props: PrimarySelectProps ) =>
{
    return (
        <Select radius="md" checkIconPosition="right" rightSectionPointerEvents='none' rightSection={ <IconComponents size={ 16 } /> } clearable label={ props.label } value={ props.value } placeholder={ props.placeholder } data={ props.data } />
    )
}

export default PrimarySelect