import { Container, Grid, Image, Stack } from '@mantine/core'
import logo from '../assets/logo.png'
import PrimaryText from './PrimaryText';

export const Footer = () =>
{
    return (
        <Container w="100%" h="100%" mih="100%" fluid  >
            <Grid>
                <Grid.Col span={ 3 } >
                    <Image src={ logo } w="100px" h="100px" />
                </Grid.Col>
                <Grid.Col span={ 4 } >
                    <Stack>
                        <PrimaryText pointer text="Home >" size="lg" />
                        <PrimaryText pointer text="Pre >" size="lg" />
                        <PrimaryText pointer text="Test >" size="lg" />
                        <PrimaryText pointer text="Download >" size="lg" />
                        <PrimaryText pointer text="Free Initiative >" size="lg" />
                        <PrimaryText pointer text="Demo >" size="lg" />
                    </Stack>
                </Grid.Col>
            </Grid>
        </Container>
    )
}
