import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  fundSchemeGrid: {
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      width: '50%',
    },
    width: '100%',
  },
}))
