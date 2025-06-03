import { Box, Center, Container, Grid } from '@mantine/core';
import { useEffect, useState } from 'react';

const CounterBox = ( { label, targetCount, speed, color }: {
    label: string,
    targetCount: number,
    speed: number,
    color?: string
} ) =>
{
    const [ count, setCount ] = useState( 0 );

    useEffect( () =>
    {
        if ( count < targetCount )
        {
            const timer = setTimeout( () => setCount( count + 1 ), speed );
            return () => clearTimeout( timer );
        }
    }, [ count, targetCount, speed ] );

    return (
        <Center>
            <span style={ {
                fontSize: "6rem",
                fontFamily: "Pacifico",
                fontWeight: "bold",
                color: color || "#FFC72C"
            } }>
                { count }
                <Box mt="md" fz="30px" c="white">
                    { label }
                </Box>
            </span>
        </Center>
    );
};

const HighlightsSection = () =>
{
    return (
        <Container w="100%" fluid>
            <Grid>
                <Grid.Col span={ 4 }>
                    <Box
                        bg="#0A154F"
                        w="100%"
                        h="25rem"
                        p="30px"
                        style={ {
                            borderRadius: '10px',
                            textAlign: 'center',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        } }
                    >
                        <CounterBox label="Subscribers" targetCount={ 500 } speed={ 10 } />
                    </Box>
                </Grid.Col>

                <Grid.Col span={ 4 }>
                    <Box
                        bg="#0A154F"
                        w="100%"
                        h="25rem"
                        p="30px"
                        style={ {
                            borderRadius: '10px',
                            textAlign: 'center',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        } }
                    >
                        <CounterBox label="Views" targetCount={ 500 } speed={ 5 } color="#00FFB7" />
                    </Box>
                </Grid.Col>

                <Grid.Col span={ 4 }>
                    <Box
                        bg="#0A154F"
                        w="100%"
                        h="25rem"
                        p="30px"
                        style={ {
                            borderRadius: '10px',
                            textAlign: 'center',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        } }
                    >
                        <CounterBox label="Followers" targetCount={ 500 } speed={ 10 } color="#FF6A00" />
                    </Box>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default HighlightsSection;
