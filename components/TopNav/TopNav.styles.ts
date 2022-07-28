import { createStyles } from '@mantine/core'

const NAV_HEIGHT = 70

export default createStyles((theme) => ({
  navContainer: {
    width: '100%',
    height: `${NAV_HEIGHT}px`,
    background: '#ffffff',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: theme.breakpoints.lg,
    height: `${NAV_HEIGHT}px`,
    background: '#ffffff',
    margin: 'auto',
  },
  logoImage: {
    width: 200,
  },
}))
