import { Box, Container, Flex, Image, Menu, Modal, Stack } from "@mantine/core"
import PrimaryButton from "./PrimaryButton"
import PrimaryText from "./PrimaryText"
import logo from "../assets/image.png"
import { useNavigate } from "react-router"
import { useDisclosure } from "@mantine/hooks"
import PrimaryInput from "./PrimaryInput"
import { IconLock, IconPhone } from "@tabler/icons-react"
import PrimaryPassword from "./PrimaryPassword"


const Header = () =>
{

    const navigate = useNavigate()
    const [ opened, { open, close } ] = useDisclosure( false );


    const renderModalContent = () =>
    {
        return <Box>
            <Container>
                <Stack>
                    <PrimaryInput label="Mobile No." leftSection={ <IconPhone /> } />
                    <PrimaryPassword label="Password" leftSection={ <IconLock /> } />
                    <PrimaryButton text="Log In" />
                    <PrimaryText text="Forgot Password?" />
                    <PrimaryText text="Don't have an account? Sign Up" onClick={ open } />
                </Stack>
            </Container>
        </Box>
    }

    return (
        <Box>
            <Container fluid p={ 8 } >
                <Flex justify="space-between" align="center" >
                    <Flex align="center" onClick={ () => navigate( "/" ) } className="cursor"  >
                        <Image src={ logo } radius="md" h={ 30 }
                            w="auto"
                            fit="contain" />
                        <PrimaryText text="DKMPSC" size="xl" />
                    </Flex>
                    <Flex justify="space-between" gap={ 70 } align="center" >
                        <Menu trigger="hover" width={ 150 } withArrow arrowPosition="side" arrowSize={ 10 } position="bottom" offset={ -5 } >
                            <Menu.Target>
                                <span>
                                    <PrimaryText pointer text="Course" size="lg" />
                                </span>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item>
                                    <PrimaryText text="Pre" size="lg" onClick={ () => navigate( "/course/pre" ) } />
                                </Menu.Item>
                                <Menu.Item>
                                    <PrimaryText text="Mains" size="lg" onClick={ () => navigate( "/course/mains" ) } />
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <PrimaryText pointer text="PYQ" size="lg" onClick={ () => navigate( '/pyq' ) } />
                        <PrimaryText pointer text="Test" size="lg" onClick={ () => navigate( '/test' ) } />
                        <PrimaryText pointer text="Free Initiative" size="lg" onClick={ () => navigate( '/freeinitiative' ) } />
                        <PrimaryText pointer text="Demo" size="lg" onClick={ () => navigate( '/demo' ) } />
                        <PrimaryText pointer text="Download" size="lg" onClick={ () => navigate( '/download' ) } />
                        <PrimaryButton size="sm" text="Log In" onClick={ open } />
                    </Flex>
                </Flex>
            </Container>
            <Modal opened={ opened } onClose={ close } title="Log In" centered size="md" >
                { renderModalContent() }
            </Modal>
        </Box>
    )
}

export default Header