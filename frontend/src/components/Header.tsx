import { Box, Container, Flex, Grid, Image, Menu, Modal, Stack, Burger, Drawer, Avatar, Popover } from "@mantine/core"
import PrimaryButton from "./PrimaryButton"
import PrimaryText from "./PrimaryText"
import logo from "../assets/image.png"
import { useNavigate } from "react-router"
import { useDisclosure } from "@mantine/hooks"
import PrimaryInput from "./PrimaryInput"
import { IconBook2, IconCaretDownFilled, IconLock, IconLogout, IconPhone, IconSearch, IconUser } from "@tabler/icons-react"
import PrimaryPassword from "./PrimaryPassword"
import { spotlight, Spotlight } from "@mantine/spotlight"
import { getActions } from "../constants/spotlight"

const Header = () =>
{

    const navigate = useNavigate()
    const actions = getActions( navigate )
    const [ openDrawer, { toggle } ] = useDisclosure( false );
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


    const renderSearchBoxRightSection = () =>
    {
        return <Box p="2px 10px" lts="1px" bg="#f3f4f6" c="#374151" bd="1px solid #d1d5db" fw={ 500 } fz={ 13 } ff="monospace" className="rightSection">
            <span>
                CTRL + K
            </span>
        </Box>
    }


    const renderPopoverContent = () =>
    {
        return <Box>
            <Stack>
                <Box className="pointer">
                    <Grid onClick={ () => navigate( "/profile" ) } >
                        <Grid.Col span={ 2 }>
                            <IconUser />
                        </Grid.Col>
                        <Grid.Col span={ 10 }>
                            My Profile
                        </Grid.Col>
                    </Grid>
                </Box>
                <Box className="pointer">
                    <Grid onClick={ () => navigate( "/mycourse" ) } >
                        <Grid.Col span={ 2 }>
                            <IconBook2 />
                        </Grid.Col>
                        <Grid.Col span={ 10 }>
                            My Courses
                        </Grid.Col>
                    </Grid>
                </Box>
                <Box className="pointer">
                    <Grid>
                        <Grid.Col span={ 2 }>
                            <IconLogout />
                        </Grid.Col>
                        <Grid.Col span={ 10 }>
                            Logout
                        </Grid.Col>
                    </Grid>
                </Box>
            </Stack>
        </Box>

    }

    return (
        <Box>
            <Container fluid p={ 8 } >
                <Grid align="center"  >
                    <Grid.Col span={ 5 } >
                        <Flex align="center" onClick={ () => navigate( "/" ) } className="cursor"  >
                            <Image src={ logo } radius="md" h={ 30 }
                                w="auto"
                                fit="contain" />
                            <PrimaryText text="DKMPSC" size="xl" />
                        </Flex>
                    </Grid.Col>
                    <Grid.Col span={ 7 }>
                        <Flex justify="end" align="center" w="100%">
                            <Box w="100%" display={ { base: "none", md: "block" } }>
                                <Grid>
                                    <Grid.Col span={ 1.2 }>
                                        <Menu trigger="hover" width={ 150 } withArrow arrowPosition="side" arrowSize={ 10 } position="bottom" offset={ -5 }>
                                            <Menu.Target>
                                                <Flex justify="flex-start" align="flex-start" direction="row">
                                                    <PrimaryText pointer text="Course" size="lg" />
                                                    <IconCaretDownFilled style={ { marginTop: 2 } } />
                                                </Flex>
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
                                    </Grid.Col>
                                    <Grid.Col span={ 1.2 }>
                                        <Menu trigger="hover" width={ 150 } withArrow arrowPosition="side" arrowSize={ 10 } position="bottom" offset={ -5 }>
                                            <Menu.Target>
                                                <Flex justify="flex-start" align="flex-start" direction="row">
                                                    <PrimaryText pointer text="PYQ" size="lg" />
                                                    <IconCaretDownFilled style={ { marginTop: 2 } } />
                                                </Flex>
                                            </Menu.Target>
                                            <Menu.Dropdown>
                                                <Menu.Item>
                                                    <PrimaryText text="Test" size="lg" onClick={ () => navigate( "/pyq/test" ) } />
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <PrimaryText text="Download" size="lg" onClick={ () => navigate( "/pyq/download" ) } />
                                                </Menu.Item>
                                            </Menu.Dropdown>
                                        </Menu>
                                    </Grid.Col>
                                    <Grid.Col span={ 2 }>
                                        <PrimaryText pointer text="Free Initiative" size="lg" onClick={ () => navigate( "/freeinitiative" ) } />
                                    </Grid.Col>
                                    <Grid.Col span={ 1 }>
                                        <PrimaryText pointer text="Demo" size="lg" onClick={ () => navigate( "/demo" ) } />
                                    </Grid.Col>
                                    <Grid.Col span={ 5 }>
                                        <PrimaryInput
                                            onClick={ spotlight.open }
                                            onChange={ spotlight.open }
                                            rightSection={ renderSearchBoxRightSection() }
                                            placeholder="Search"
                                            label=""
                                            radius="lg"
                                            leftSection={ <IconSearch /> }
                                        />
                                    </Grid.Col>
                                    <Grid.Col span={ 1 }>
                                        <Popover width={ 200 } position="bottom" shadow="md" >
                                            <Popover.Target>
                                                <Avatar color="cyan" radius="xl" className="pointer" >DK</Avatar>
                                            </Popover.Target>
                                            <Popover.Dropdown>
                                                { renderPopoverContent() }
                                            </Popover.Dropdown>
                                        </Popover>
                                        {/* <PrimaryButton size="sm" text="Log In" onClick={ open } /> */ }
                                    </Grid.Col>
                                </Grid>
                            </Box>

                            {/* Burger menu (visible only on mobile) */ }
                            <Box display={ { base: "block", md: "none" } }>
                                <Burger opened={ openDrawer } onClick={ toggle } aria-label="Open navigation" />
                            </Box>
                        </Flex>
                    </Grid.Col>
                </Grid>
            </Container>
            <Modal opened={ opened } onClose={ close } title="Log In" centered size="md" >
                { renderModalContent() }
            </Modal>
            <Drawer
                opened={ openDrawer }
                onClose={ toggle }
                title="Menu"
                padding="md"
                position="right"
                size="md"
            >
                <Stack>
                    <PrimaryText pointer text="Course" size="lg" onClick={ () => { navigate( "/course/pre" ); toggle(); } } />
                    <PrimaryText pointer text="PYQ" size="lg" onClick={ () => { navigate( "/pyq/test" ); toggle(); } } />
                    <PrimaryText pointer text="Free Initiative" size="lg" onClick={ () => { navigate( '/freeinitiative' ); toggle(); } } />
                    <PrimaryText pointer text="Demo" size="lg" onClick={ () => { navigate( '/demo' ); toggle(); } } />
                    <PrimaryButton size="sm" text="Log In" onClick={ () => { open(); toggle(); } } />
                </Stack>
            </Drawer>
            <Spotlight actions={ actions } nothingFound="Nothing Found... " highlightQuery searchProps={ { placeholder: "Search...", leftSection: <IconSearch size={ 20 } stroke={ 1.5 } /> } } />
        </Box>
    )
}

export default Header