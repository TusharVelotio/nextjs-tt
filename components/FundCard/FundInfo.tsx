import { Divider, Stack } from '@mantine/core'
import useStyles from '@components/FundCard/FundCard.styles'

interface FundInfoProps {
  children: JSX.Element | JSX.Element[]
}
export const FundInfo: React.FC<FundInfoProps> = ({ children }) => {
  const { classes } = useStyles()
  return (
    <>
      <Stack className={classes.removeGap}>
        {children}
        <Divider my="sm" className={classes.dividerStyle} />
      </Stack>
    </>
  )
}
