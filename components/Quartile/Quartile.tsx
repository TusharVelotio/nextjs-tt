import { Box, Stack } from '@mantine/core'
import useStyles from '@components/Quartile/Quartile.styles'

interface QuartileProps {
  rank: number
  id: string
}
export const Quartile: React.FC<QuartileProps> = ({ rank, id }) => {
  const { classes } = useStyles()

  return (
    <Stack spacing={0} className={classes.container}>
      {[...Array(4)].map((item, index) => (
        <Box
          className={`${rank === index + 1 ? classes.boxFilled : ''}  ${
            classes.box
          }`}
          key={`${id}-${index}-quartile-box`}
        />
      ))}
    </Stack>
  )
}
