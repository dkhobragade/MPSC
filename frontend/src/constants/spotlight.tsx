import type { SpotlightActionData } from "@mantine/spotlight";
import { IconDownload, IconFilePencil, IconHistoryToggle, IconHome, IconLockOpen2, IconNotebook, IconVideo } from "@tabler/icons-react";


export const getActions = ( navigate: ( path: string ) => void ): SpotlightActionData[] => [
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Go to the dashboard',
    onClick: () => navigate( '/' ),
    leftSection: <IconHome size={ 16 } />
  },
  {
    id: 'pre',
    label: 'Couse Prelims',
    description: 'Go to the Prelims Course',
    onClick: () => navigate( '/course/pre' ),
    leftSection: <IconNotebook size={ 16 } />
  },
  {
    id: 'mains',
    label: 'Course Mains',
    description: 'Go to the Mains Course',
    onClick: () => navigate( '/course/mains' ),
    leftSection: <IconFilePencil size={ 16 } />
  },
  {
    id: 'PYQ',
    label: 'Test',
    description: 'Go to the Test PYQ',
    onClick: () => navigate( '/pyq/test' ),
    leftSection: <IconHistoryToggle size={ 16 } />
  },
  {
    id: 'download',
    label: 'Download',
    description: 'Go to the Download PYQ',
    onClick: () => navigate( '/pyq/download' ),
    leftSection: <IconDownload size={ 16 } />
  },
  {
    id: 'freeinitiative',
    label: 'Free Initiative',
    description: 'Go to the Free Initiative',
    onClick: () => navigate( '/freeinitiative' ),
    leftSection: <IconLockOpen2 size={ 16 } />
  },
  {
    id: 'demo',
    label: 'Demo',
    description: 'Go to the Demo',
    onClick: () => navigate( '/demo' ),
    leftSection: <IconVideo size={ 16 } />
  },
];