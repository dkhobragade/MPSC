import { Box, Drawer, Grid, Stack } from "@mantine/core"
import { IconBook2, IconLogout, IconUser } from "@tabler/icons-react"
import type { NavigateFunction } from "react-router"
import PrimaryText from "../components/PrimaryText"
import PrimaryButton from "../components/PrimaryButton"


export const spotlightCTRLButton = () =>
{
    return <Box p="2px 10px" lts="1px" bg="#f3f4f6" c="#374151" bd="1px solid #d1d5db" fw={ 500 } fz={ 13 } ff="monospace" className="rightSection">
        <span>
            CTRL + K
        </span>
    </Box>
}


export const loginPopoverContent = ( navigate: NavigateFunction ) =>
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


export const drawerContent = ( openDrawer: boolean, toggle: () => void, navigate: NavigateFunction ) =>
{
    return <Drawer
        opened={ openDrawer }
        onClose={ toggle }
        title="Menu"
        padding="md"
        position="right"
        size="md"
    >
        <Stack>
            <PrimaryText pointer text="Home" size="lg" onClick={ () => { navigate( "/" ); toggle(); } } />
            <PrimaryText pointer text="Course" size="lg" onClick={ () => { navigate( "/course/pre" ); toggle(); } } />
            <PrimaryText pointer text="PYQ" size="lg" onClick={ () => { navigate( "/pyq/test" ); toggle(); } } />
            <PrimaryText pointer text="Free Initiative" size="lg" onClick={ () => { navigate( '/freeinitiative' ); toggle(); } } />
            <PrimaryText pointer text="Demo" size="lg" onClick={ () => { navigate( '/demo' ); toggle(); } } />
            <PrimaryButton size="sm" text="Log In" onClick={ () => { open(); toggle(); } } />
        </Stack>
    </Drawer>
}