import {
  Anchor,
  Box,
  Divider,
  Group,
  SimpleGrid,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import useStyles from '@components/Footer/Footer.styles'
import Logo from '@assets/LogoWhite.svg'
import Image from 'next/image'
import { FooterTag } from '@components/Footer/FooterTag'
import { FooterTagResponsive } from './FooterTagResponsive'

export default function Footer() {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <Box className={classes.footerContainer}>
      <Stack className={classes.footerContent}>
        <SimpleGrid
          className={classes.gridContainer}
          cols={4}
          spacing="xl"
          breakpoints={[
            { maxWidth: 'md', cols: 1 },
            { maxWidth: 'sm', cols: 1 },
            { maxWidth: 'xs', cols: 1 },
          ]}
          m={0}
        >
          <Stack>
            <Image className={classes.logo} src={Logo} alt="capitalmind-logo" />
            <Text color={theme.colors.dark[0]} size="xs">
              2323, Prakash Arcade, 3rd Floor, 17th Cross Sector 1, HSR Layout,
              Bengaluru – 560102
            </Text>
            <Text color={theme.colors.dark[0]} size="xs">
              SEBI Regd. Portfolio Manager INP000005847
            </Text>
          </Stack>
          <FooterTag />
          <FooterTagResponsive />
        </SimpleGrid>
        <Divider my="sm" className={classes.dividerStyle} />

        <Group position="apart">
          <Text
            className={classes.rightsText}
            color={theme.colors.dark[0]}
            size="xs"
          >
            © 2022 Wizemarkets Analytics Private Limited. All rights reserved.
          </Text>
          <Group className={classes.termsGroup}>
            <Anchor className={classes.anchorStyles}>Terms </Anchor>
            <Anchor className={classes.anchorStyles}>Privacy </Anchor>
            <Anchor className={classes.anchorStyles}>Legal </Anchor>
          </Group>
        </Group>

        <Divider my="sm" className={classes.dividerStyle} />
        <Stack>
          <Text color={theme.colors.dark[0]} size="xs">
            Mutual fund investments are subject to market risks. Please read the
            scheme information and other related documents carefully before
            investing. Past performance of the schemes is neither an indicator
            nor a guarantee of future performance.
          </Text>
          <Text color={theme.colors.dark[0]} size="xs">
            Please consider your specific investment requirements, risk
            tolerance, investment goal, time frame and the cost associated with
            the investment before choosing a mutual fund / fixed deposit, or
            designing a portfolio of mutual funds that suits your needs.
          </Text>
          <Text color={theme.colors.dark[0]} size="xs">
            Wizemarkets Analytics Private Limited. has gathered the data,
            information, statistics from sources believed to be highly reliable
            and true. All necessary precautions have been taken to avoid any
            error, lapse or insufficiency, however, no representations or
            warranties are made (express or implied) as to the reliability,
            accuracy or completeness of such information. The Company cannot be
            held liable for any loss arising directly or indirectly from the use
            of, or any action taken in on, any information appearing herein.
          </Text>
        </Stack>
      </Stack>
    </Box>
  )
}
