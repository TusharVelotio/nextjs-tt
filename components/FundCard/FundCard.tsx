import {
  Card,
  Group,
  Text,
  Divider,
  Badge,
  SimpleGrid,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core'
import Logo from '@assets/logos/Mirae.svg'
import useStyles from '@components/FundCard/FundCard.styles'
import { StarIcon } from '@radix-ui/react-icons'
import { FundInfo } from '@components/FundCard/FundInfo'
import { FundInfoNav } from '@components/FundCard/FundInfoNav'
import { FundDetails } from '@cm-types/Fund'
import { FundInfoKey } from '@components/FundCard/FundInfoKey'
import { FundInfoValue } from '@components/FundCard/FundInfoValue'
import { formatDate } from '@utils/date'
import FundInfoNavValue from '@components/FundCard/FundInfoNavValue'
import { CMSelect } from '@components/FundCard/CMSelect'
import Image from 'next/image'
import { formatInCr, roundOff } from '@utils/common'

export default function FundCard({
  name,
  tags,
  inceptionDate,
  aum,
  status,
  cmCategory,
  expenseRatio,
  benchmark,
  peRatio,
  pbRatio,
  exitLoad,
  nav,
  returnsSinceInception,
  alpha,
  benchmarkType,
  isCmSelect,
}: FundDetails) {
  const { classes } = useStyles()
  const theme = useMantineTheme()
  const starAvatar = <StarIcon className={classes.starIcon} />

  const gridOne = (
    <SimpleGrid
      cols={2}
      breakpoints={[
        { maxWidth: 'md', cols: 1 },
        { maxWidth: 'sm', cols: 1 },
        { maxWidth: 'xs', cols: 1 },
      ]}
      className={classes.fundDetailsGrid}
    >
      <FundInfo>
        <FundInfoKey>Launched</FundInfoKey>
        <FundInfoValue>{formatDate(inceptionDate)}</FundInfoValue>
      </FundInfo>

      <FundInfo>
        <FundInfoKey>AUM(Fund Size)</FundInfoKey>
        <Group spacing={1}>
          <FundInfoValue>
            {aum?.value ? `${formatInCr(aum?.value)}cr` : ''}
          </FundInfoValue>
          <Text size="sm" color={theme.colors.gray[4]}>
            {aum?.asOn ? `As on ${formatDate(aum?.asOn || '')}` : ''}
          </Text>
        </Group>
      </FundInfo>

      <FundInfo>
        <FundInfoKey>Status</FundInfoKey>
        <FundInfoValue>{status}</FundInfoValue>
      </FundInfo>

      <FundInfo>
        <FundInfoKey>Riskometer</FundInfoKey>
        <FundInfoValue>Very High</FundInfoValue>
      </FundInfo>

      <FundInfo>
        <FundInfoKey>CM Category</FundInfoKey>
        <FundInfoValue>{cmCategory}</FundInfoValue>
      </FundInfo>

      <FundInfo>
        <FundInfoKey>Expense Ratio</FundInfoKey>
        <Group spacing={1}>
          <FundInfoValue>{expenseRatio?.value}%</FundInfoValue>
          <Text size="sm" color={theme.colors.gray[4]}>
            (As on {formatDate(expenseRatio?.asOn)})
          </Text>
        </Group>
      </FundInfo>

      <FundInfo>
        <FundInfoKey>BenchMark</FundInfoKey>
        <FundInfoValue>{benchmarkType}</FundInfoValue>
      </FundInfo>

      <FundInfo>
        <FundInfoKey>P/E ratio</FundInfoKey>
        <FundInfoValue>{roundOff(peRatio)}%</FundInfoValue>
      </FundInfo>

      <FundInfo>
        <FundInfoKey>Exit load</FundInfoKey>
        <FundInfoValue>
          {exitLoad ? `${roundOff(exitLoad)}%` : ''}
        </FundInfoValue>
      </FundInfo>

      <FundInfo>
        <FundInfoKey>P/B ratio</FundInfoKey>
        <FundInfoValue>{roundOff(pbRatio)}%</FundInfoValue>
      </FundInfo>
    </SimpleGrid>
  )

  const gridTwo = (
    <SimpleGrid
      cols={2}
      spacing="xl"
      breakpoints={[
        { maxWidth: 'md', cols: 2 },
        { maxWidth: 'sm', cols: 2 },
        { maxWidth: 'xs', cols: 2 },
      ]}
      className={classes.gridTwo}
    >
      <FundInfoNav>
        <FundInfoKey>NAV as on {formatDate(nav?.asOn)}</FundInfoKey>
        <Group spacing={'xs'}>
          <FundInfoNavValue value={nav?.percentage as number}>
            {roundOff(nav?.percentage as number)}%
          </FundInfoNavValue>
          <Text size="sm" color={theme.colors.dark[7]}>
            ₹{nav?.value}
          </Text>
        </Group>
      </FundInfoNav>

      <FundInfoNav>
        <FundInfoKey>Returns Since Inception</FundInfoKey>
        <FundInfoNavValue value={returnsSinceInception}>
          {roundOff(returnsSinceInception)}%
        </FundInfoNavValue>
      </FundInfoNav>

      <FundInfoNav>
        <FundInfoKey>Alpha</FundInfoKey>
        <FundInfoNavValue value={alpha?.return}>
          {alpha?.return}%
        </FundInfoNavValue>
      </FundInfoNav>

      <FundInfoNav>
        <FundInfoKey>Benchmark</FundInfoKey>
        <FundInfoNavValue value={benchmark?.return}>
          {benchmark?.return}%
        </FundInfoNavValue>
      </FundInfoNav>
    </SimpleGrid>
  )
  return (
    <Card sx={{ width: '100%' }} shadow="none" withBorder>
      <Group position="apart">
        <Group>
          <Image className={classes.fundImage} src={Logo} alt="Image" />
          <CMSelect name={name} tags={tags} />
        </Group>

        {isCmSelect ? (
          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <Badge
              variant="outline"
              className={classes.fundBadge}
              leftSection={starAvatar}
              size={'xl'}
            >
              Capitalmind Select
            </Badge>
          </MediaQuery>
        ) : null}
      </Group>
      <Divider my="sm" className={classes.dividerStyle} />
      <Group align="start" className={classes.fundDetailsContainer}>
        {gridOne}
        {gridTwo}
      </Group>
    </Card>
  )
}
