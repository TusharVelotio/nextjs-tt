import { TabsProps, Tabs } from '@mantine/core'

export const TabsComponent: React.FC<TabsProps> = ({ children }) => {
  return (
    <Tabs
      variant={'unstyled'}
      styles={(theme) => ({
        tabsList: {
          flexWrap: 'nowrap',
          overflow: 'auto',
        },
        tabControl: {
          backgroundColor: theme.white,
          color: theme.colors.green[8],
          border: theme.other.border,
          borderColor: theme.colors.green[8],
          fontSize: theme.fontSizes.sm,
          padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

          '&:not(:first-of-type)': {
            borderLeft: 0,
          },

          '&:first-of-type': {
            borderTopLeftRadius: theme.radius.md,
            borderBottomLeftRadius: theme.radius.md,
          },

          '&:last-of-type': {
            borderTopRightRadius: theme.radius.md,
            borderBottomRightRadius: theme.radius.md,
          },
        },

        tabActive: {
          backgroundColor: theme.colors.green[8],
          color: theme.white,
        },
      })}
    >
      {children}
    </Tabs>
  )
}
