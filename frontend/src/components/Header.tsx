import { Box, Container, Flex, Image, Menu } from "@mantine/core"
import PrimaryButton from "./PrimaryButton"
import PrimaryText from "./PrimaryText"
import logo from "../assets/image.png"
import { useState } from "react"
import PrimaryModal from "./PrimaryModal"

const Header = () =>
{
    const [ isSignUpModalOpened, setIsSignUpModalOpened ] = useState( false );

    const onToggleSignUpModal = () =>
    {
        setIsSignUpModalOpened( !isSignUpModalOpened );
    }

    return (
        <Box>
            <Container fluid p={ 8 } >
                <Flex justify="space-between" align="center" >
                    <Flex align="center">
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
                                    <PrimaryText text="Pre" size="lg" />
                                </Menu.Item>
                                <Menu.Item>
                                    <PrimaryText text="Mains" size="lg" />
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <PrimaryText pointer text="PYQ" size="lg" />
                        <PrimaryText pointer text="Test" size="lg" />
                        <PrimaryText pointer text="Free Initiative" size="lg" />
                        <PrimaryText pointer text="Demo" size="lg" />
                        <PrimaryText pointer text="Downlode" size="lg" />
                        <PrimaryButton size="sm" onClick={ onToggleSignUpModal } text="Log In" />
                    </Flex>
                </Flex>
            </Container>
            { isSignUpModalOpened &&
                <PrimaryModal isOpened={ isSignUpModalOpened } onClose={ onToggleSignUpModal } >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente excepturi animi laudantium at ipsa ex odit sint vitae esse magni cumque eos, repellendus fugiat illum, incidunt saepe libero. Ducimus, tempore.
                </PrimaryModal >
            }
        </Box>
    )
}

export default Header