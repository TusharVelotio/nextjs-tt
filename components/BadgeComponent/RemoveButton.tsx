import { Cross1Icon } from '@radix-ui/react-icons'
import useStyles from './BadgeComponent.styles'

export const RemoveButton: React.FC = () => {
  const { classes } = useStyles()

  return <Cross1Icon className={classes.crossBadge} />
}
