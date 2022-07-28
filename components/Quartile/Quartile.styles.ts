import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  container: {
    width: theme.spacing.xl,
    border: theme.other.border,
    borderColor: theme.colors.dark[3],
  },

  box: {
    height: theme.spacing.xs,
    width: '100%',
    border: theme.other.border,
    borderColor: theme.colors.dark[3],
  },

  boxFilled: {
    backgroundColor: theme.colors.dark[3],
  },
}))
