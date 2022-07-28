import { Badge, ColorSwatch, useMantineTheme } from '@mantine/core'
import { useMemo } from 'react'
import useStyles from './BadgeComponent.styles'
import { RemoveButton } from './RemoveButton'

interface BadgeProps {
  children: React.ReactNode
  hasRemoveButton?: boolean
}
export const BadgeComponent: React.FC<BadgeProps> = ({ children }) => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  const swatch = useMemo(
    () => <ColorSwatch color={theme.colors.cyan[5]} size={theme.spacing.xs} />,
    [theme.colors.cyan, theme.spacing.xs],
  )

  return (
    <Badge
      variant="outline"
      className={classes.badge}
      rightSection={<RemoveButton />}
      leftSection={swatch}
    >
      {children}
    </Badge>
  )
}
