import { AppShell, rem } from '@mantine/core'
import './App.css'
import Header from './components/Header'
import AppRouter from './router/AppRouter'

function App ()
{

  return (
    <AppShell>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main mt="10%" w='100%' h="100%" mih="100%" pt={ `calc(${ rem( 20 ) } + var(--mantine-spacing-md))` }>
        <AppRouter />
      </AppShell.Main>
    </AppShell>
  )
}

export default App
