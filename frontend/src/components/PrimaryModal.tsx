import { Modal } from '@mantine/core'
import React from 'react'

interface PrimaryModalProps
{
    isOpened: boolean
    onClose: () => void
    children?: React.ReactNode
    title?: string
}

const PrimaryModal = ( props: PrimaryModalProps ) =>
{
    return (
        <Modal title={ props.title } centered w={ 1000 } h={ 50 } opened={ props.isOpened } onClose={ props.onClose } >
            { props.children }
        </Modal>

    )
}

export default PrimaryModal