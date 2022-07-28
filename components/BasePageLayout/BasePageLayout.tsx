import { Grid, Group, MediaQuery } from '@mantine/core'
import useStyles from '@components/BasePageLayout/BasePageLayout.styles'

type BasePageLayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export const BasePageLayout: React.FC<BasePageLayoutProps> = ({ children }) => {
  const { classes } = useStyles()

  return (
    <Group position="center">
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Grid className={classes.grid} columns={12} gutter="lg" px="sm">
          {children}
        </Grid>
      </MediaQuery>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Grid className={classes.grid} columns={4} gutter="sm">
          {children}
        </Grid>
      </MediaQuery>
    </Group>
  )
}
