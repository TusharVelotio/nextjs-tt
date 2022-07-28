import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  footerContainer: {
    background: theme.colors.dark[6],
    width: '100%',
  },
  footerContent: {
    maxWidth: theme.breakpoints.md,
    margin: 'auto',
    padding: theme.spacing.xl,
    marginTop: theme.spacing.xl,
  },

  logo: {
    color: theme.colors.dark[0],
    maxWidth: '50% !important',
  },

  gridContainer: {
    margin: theme.spacing.xl,
  },

  gridLinkTitle: {
    color: theme.colors.gray[0],
    fontSize: theme.spacing.lg,
  },

  anchorStyles: {
    color: theme.colors.dark[0],
    fontWeight: theme.fontSizes.xs,
  },

  dividerStyle: {
    borderTopColor: theme.colors.dark[3],
  },

  rightsText: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      textAlign: 'center',
    },
  },

  footerStack: {
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: 'none',
    },
  },

  footerStackMobile: {
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      display: 'none',
    },
  },

  termsGroup: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      justifyContent: 'center',
      flexGrow: 1,
    },
  },
}))
