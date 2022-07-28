import { Box } from '@mantine/core'
import Image from 'next/image'
import Logo from '@assets/Logo.svg'
import useStyles from '@components/TopNav/TopNav.styles'

export const TopNav = () => {
  const { classes } = useStyles()
  return (
    <Box className={classes.navContainer} px={4}>
      <Box className={classes.content}>
        <Image width={200} src={Logo} alt="capitalmind-logo" />
      </Box>
    </Box>
  )
}
