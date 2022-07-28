import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  gridContainer: {
    flexDirection: 'column-reverse',
  },
  fundName: {
    fontWeight: 'bold',
    fontSize: theme.fontSizes.xl,
  },
  fundDetailsContainer: {
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
    flexDirection: 'column-reverse',
  },
  fundDetailsGrid: {
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      width: '50%',
    },
    width: '100%',
  },
  fundBadge: {
    color: theme.colors.blue[7],
    fontSize: theme.spacing.sm,
    borderRadius: theme.spacing.xs,
    borderColor: theme.colors.blue[7],
    height: '44px',
    fontWeight: 'normal',
    textTransform: 'unset',
  },

  fundImage: {
    height: 'lg',
    width: 'lg',
  },

  dotColor: {
    color: theme.colors.gray[3],
  },

  starIcon: {
    color: theme.colors.gray[0],
    backgroundColor: theme.colors.blue[7],
    borderRadius: theme.radius.lg,
    marginTop: theme.spacing.xs,
    height: theme.spacing.lg,
    width: theme.spacing.lg,
    padding: '3px',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding: '1px',
      marginTop: '4px',
      height: theme.spacing.sm,
      width: theme.spacing.sm,
    },
  },

  removeGap: {
    gap: 0,
  },

  gridTwo: {
    marginTop: 'lg',
  },

  dividerStyle: {
    borderTopColor: theme.colors.gray[2],
  },

  cmSelect: {
    textTransform: 'unset',
    color: theme.colors.blue[7],
    fontWeight: 'normal',
  },
}))
