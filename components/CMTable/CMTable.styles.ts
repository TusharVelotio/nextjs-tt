import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  thead: {
    height: 'xs',
    background: theme.colors.gray[1],
    fontWeight: 500,
    borderTopLeftRadius: theme.radius.sm,
    borderStartEndRadius: theme.radius.sm,
  },
  table: {
    width: '100%',
  },
}))
