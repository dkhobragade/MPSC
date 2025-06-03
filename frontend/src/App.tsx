import { AppShell } from '@mantine/core'
import Header from './components/Header'
import AppRouter from './router/AppRouter'
import './App.css'

function App ()
{

  return (
    <AppShell>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main w='100%' h="100%" mih="100%" >
        <AppRouter />
      </AppShell.Main>
    </AppShell >
  )
}

export default App
