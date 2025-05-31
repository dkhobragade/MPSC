import { Title } from '@mantine/core'

interface PrimaryTitleProps
{
    order?: 1 | 2 | 3 | 4 | 5 | 6
    text: string
    fontFamily?: string
    color?: string
}

export const PrimaryTitle = ( props: PrimaryTitleProps ) =>
{
    return (
        <Title c={ props.color } order={ props.order } ff={ props.fontFamily }>
            { props.text }
        </Title>
    )
}
