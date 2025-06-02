import { Box, Center, Container, Grid, Image, Stack } from '@mantine/core'
import TestImg from '../assets/test.svg'
import PrimarySelect from '../components/PrimarySelect'
import PrimaryButton from '../components/PrimaryButton'
import { TestType } from '../constants/type'

export const Test = () =>
{

    return (
        <Container>
            <Box w="100%" pos="relative" display="inline-block"  >
                <Image src={ TestImg } />
                <Center>
                    <Box bg="white"
                        w="35rem"
                        h="25rem"
                        pos="absolute"
                        top="15%"
                        right="3%">
                        <Stack gap="lg" >
                            <Grid>
                                <Grid.Col span={ 6 } >
                                    <PrimarySelect data={ TestType } label='Select Type' />
                                </Grid.Col>
                                <Grid.Col span={ 6 } >
                                    <PrimarySelect data={ TestType } label='Select Language' />
                                </Grid.Col>
                            </Grid>
                            <PrimarySelect data={ [] } label='Select Year' />
                            <PrimaryButton text="Start Test" />
                        </Stack>
                    </Box>
                </Center>
            </Box>
        </Container>
    )
}
