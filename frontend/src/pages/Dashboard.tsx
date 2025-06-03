import { Box, Container, Image, Modal, rem, SimpleGrid, Space, Stack, Text, } from '@mantine/core'
import { FONT_FAMILY_PLAYFAIR, } from '../constants/fonts'
import PrimaryButton from '../components/PrimaryButton'
import { useDisclosure } from '@mantine/hooks'
import { IconRocket, IconMail, IconLock, IconPhone } from '@tabler/icons-react'
import PrimaryInput from '../components/PrimaryInput'
import PrimaryPassword from '../components/PrimaryPassword'
import PrimaryText from '../components/PrimaryText'
import DirectionImg from '../assets/direction.svg'
import LearningImg from '../assets/learning.svg'
import bg from '../assets/bg.svg'
import '../App.css'

const Dashboard = () =>
{

    const [ opened, { open, close } ] = useDisclosure( false );


    const renderModalContent = () =>
    {
        return <Box>
            <Container p={ rem( 20 ) } >
                <Stack gap={ rem( 20 ) } >
                    <SimpleGrid cols={ 2 }>
                        <PrimaryInput withAsterisk label="First Name" />
                        <PrimaryInput label="Last Name" />
                    </SimpleGrid>
                    <PrimaryInput withAsterisk label="Email" leftSection={ <IconMail /> } />
                    <PrimaryInput withAsterisk label="Mobile No." leftSection={ <IconPhone /> } />
                    <PrimaryPassword withAsterisk label="Password" leftSection={ <IconLock /> } />
                    <PrimaryPassword withAsterisk label="Confirm Password" leftSection={ <IconLock /> } />
                    <PrimaryButton text='Sign Up' fullWidth leftIcon={ <IconRocket stroke={ 1 } /> } onClick={ close } />
                    <PrimaryText text="Have an account? Login" />
                </Stack>
            </Container>
        </Box>
    }

    return (
        <>
            <Container style={ { backgroundImage: `url(${ bg })` } } w='100%' h="100%" mih="100%" fluid className='dashboardContainer' >
                {/* <Image style={ { transform: "scaleX(-1)" } } pos="absolute" top="0%" left="0" src={ LearningImg } w="30%" h="100%" /> */ }
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
                    <PrimaryButton leftIcon={ <IconRocket stroke={ 1 } /> } text='Click to Start' onClick={ open } />
                </Box>

                <Modal opened={ opened } onClose={ close } title="Sign Up" centered size="55rem" >
                    { renderModalContent() }
                </Modal>

            </Container >
        </>
    )
}

export default Dashboard