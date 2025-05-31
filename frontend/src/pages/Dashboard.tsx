import { Box, Container, Modal, rem, Space, Text, } from '@mantine/core'
import { FONT_FAMILY_PLAYFAIR, } from '../constants/fonts'
import PrimaryButton from '../components/PrimaryButton'
import { useDisclosure } from '@mantine/hooks'
import '../App.css'

const Dashboard = () =>
{

    const [ opened, { open, close } ] = useDisclosure( false );

    return (
        <Container w='100%' h="100%" mih="100%" fluid className='dashboardContainer' >
            <Box>
                <Text fw={ 800 } size={ rem( 70 ) } c='#1f2937' ff={ FONT_FAMILY_PLAYFAIR } mb={ rem( 20 ) } >
                    Struggling with MPSC?
                </Text>
                <Space h={ rem( 10 ) } />
                <Text size={ rem( 30 ) } c='#111827'>
                    We've got you covered!
                </Text>
                <Space h={ rem( 20 ) } />
                <Text c='#4b5563' mb={ rem( 30 ) } fz={ rem( 20 ) } lh='1.6' >
                    From decoding the syllabus to mastering time management, we handle the hard part
                    so you can focus on success.
                    <br />
                    <Space h={ rem( 10 ) } />
                    <em>What's holding you back?</em>
                </Text>
                <PrimaryButton text='Click to Start' onClick={ open } />
            </Box>

            <Modal opened={ opened } w={ 1000 } h={ 50 } onClose={ close } title="Sign Up" centered size="lg" >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque aperiam sapiente quo voluptatibus animi perspiciatis deleniti amet eum itaque. Quibusdam, magni perferendis excepturi itaque repudiandae exercitationem in officia quae.
            </Modal>

        </Container >
    )
}

export default Dashboard