import { Box, Container, Flex, Image, Menu } from "@mantine/core"
import PrimaryButton from "./PrimaryButton"
import PrimaryText from "./PrimaryText"
import logo from "../assets/image.png"


const Header = () =>
{
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
                        <PrimaryText pointer text="Download" size="lg" />
                        <PrimaryButton size="sm" text="Log In" />
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}

export default Header