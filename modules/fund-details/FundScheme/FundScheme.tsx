import { Group, Stack, Text, useMantineTheme, Divider } from '@mantine/core'
import Image from 'next/image'
import { FundDetailsCardTitle } from '../FundDetailsCardTitle/FundDetailsCardTitle'
import useStyles from '@modules/fund-details/FundScheme/FundScheme.styles'
import Logo from '@assets/logos/Mirae.svg'
import { FundAmc } from '@cm-types/Fund'
import { formatDate } from '@utils/date'
import { formatInCr } from '@utils/common'

interface FundSchemeProps {
  amc: FundAmc
}

export const FundScheme: React.FC<FundSchemeProps> = ({
  amc: { name, asOn, totalSchemes, totalAum, address, phoneNumber },
}) => {
  const theme = useMantineTheme()
  const { classes } = useStyles()

  return (
    <Stack>
      <Group>
        <Image src={Logo} alt="Image-FundSchema" />
        <Stack spacing={0}>
          <FundDetailsCardTitle>{name}</FundDetailsCardTitle>
          <Text size="xs" color={theme.colors.gray[6]}>
            as of {formatDate(asOn as string)}
          </Text>
        </Stack>
      </Group>
      <Group className={classes.schemeContainer} grow>
        <Stack spacing={2}>
          <Text className={classes.TextStyle}>#SCHEMES</Text>
          <Text className={classes.subTextStyle}>{totalSchemes}</Text>
          <Text color={theme.colors.red[5]} className={classes.subTextStyle}>
            See all schemes
          </Text>
        </Stack>
        <Stack spacing={2}>
          <Text className={classes.TextStyle}>Total AUM</Text>
          <Text className={classes.subTextStyle}>
            ₹{formatInCr(totalAum.value)} Crs
          </Text>
          <Text color={theme.colors.dark[3]} className={classes.subTextStyle}>
            As on {formatDate(totalAum.asOn as string)}
          </Text>
        </Stack>
      </Group>
      <Divider my="sm" className={classes.dividerStyle} />
      <Stack spacing={0}>
        <Text size="sm" color={theme.colors.gray[8]}>
          Address:
        </Text>
        <Text size="sm" color={theme.colors.gray[8]}>
          {address}
        </Text>
        <Text size="sm" color={theme.colors.gray[8]}>
          Phone: {phoneNumber}
        </Text>
      </Stack>
    </Stack>
  )
}
