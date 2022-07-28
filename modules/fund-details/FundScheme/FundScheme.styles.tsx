import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  subTextStyle: {
    size: theme.fontSizes.md,
    textAlign: 'center',
  },

  TextStyle: {
    size: 'md',
    color: theme.colors.dark[4],
    textAlign: 'center',
  },

  schemeContainer: {
    justifyContent: 'space-around',
  },

  dividerStyle: {
    height: 'lg',
    color: theme.colors.dark[3],
  },
}))
