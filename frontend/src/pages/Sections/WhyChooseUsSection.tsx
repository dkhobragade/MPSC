import { Box, Container, Grid, Image, Stack, Text } from '@mantine/core';
import ThinkingImg from '../../assets/thinking1.svg';
import bg1 from '../../assets/bg1.jpg';
import PrimaryButton from '../../components/PrimaryButton';
import { IconBook2, IconClock, IconLanguage, IconVideo } from '@tabler/icons-react';
import { useNavigate } from 'react-router';

const WhyChooseUsSection = () =>
{
    const navigate = useNavigate()

    return (
        <Container
            w="100%"
            fluid
            style={ {
                backgroundImage: `url(${ bg1 })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                fontFamily: 'Poppins, sans-serif',
                overflow: 'hidden',
                maxWidth: '100vw',
                position: 'relative',
            } }
        >
            <Stack>
                <Grid>
                    <Grid.Col span={ 3 }>
                        <Box w="100%" h="50rem">
                            <Image src={ ThinkingImg } w="100%" h="100%" />
                        </Box>
                    </Grid.Col>

                    {/* Right Text */ }
                    <Grid.Col span={ 9 } mt="10%">
                        <Box w="700px" pos="relative" style={ { textWrap: 'wrap' } }  >
                            <Text size="2.8rem" fw={ 700 } ff="Parkinsans" ta="start" mb="lg" c="dark">
                                Why Choose Us
                            </Text>

                            <Text size="lg" lh={ 1.7 } mb="sm" c="black"  >
                                <IconBook2 />
                                We provide updated and exam-focused study material that covers the syllabus in a clear and structured manner.
                            </Text>

                            <Text size="lg" lh={ 1.7 } mb="sm" c="black">
                                <IconClock />
                                Regular mock tests and practice papers help you assess your performance and improve your speed and accuracy.
                            </Text>

                            <Text size="lg" lh={ 1.7 } mb="sm" c="black">
                                <IconVideo />
                                You’ll get both live and recorded lectures—study anytime, anywhere, without missing out on quality learning.
                            </Text>
                            <Text size="lg" lh={ 1.7 } mb="sm" c="black">
                                <i>
                                    <IconLanguage />
                                    Whether you're from a Marathi or English medium, we provide bilingual support to make learning easier and more effective.
                                </i>
                            </Text>
                        </Box>
                        <PrimaryButton text="🚀 Explore Courses" color="#FF3F33" onClick={ () => navigate( "/course/pre" ) } />
                    </Grid.Col>
                </Grid>
            </Stack>
        </Container>
    );
};

export default WhyChooseUsSection;
