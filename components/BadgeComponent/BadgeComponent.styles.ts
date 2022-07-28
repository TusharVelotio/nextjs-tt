import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  badge: {
    height: theme.spacing.xl,
    color: theme.colors.dark[3],
    fontWeight: 'normal',
    textTransform: 'unset',
    borderColor: theme.colors.dark[0],
    lineHeight: `${theme.spacing.xs}px`,
  },

  crossBadge: {
    height: theme.spacing.sm,
  },
}))
