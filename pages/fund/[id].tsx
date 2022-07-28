import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useMemo } from 'react'
import {
  Breadcrumbs,
  Button,
  Group,
  Tabs,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { BreadcrumbItem } from '@cm-types/Breadcrumbs'
import { BasePageLayout } from '@components/BasePageLayout/BasePageLayout'
import { CMHead } from '@components/CMHead/CMHead'
import { TopNav } from '@components/TopNav/TopNav'
import { FundDetailsCard } from 'modules/fund-details/FundDetailsCard/FundDetailsCard'
import { ChevronRightIcon, HomeIcon } from '@radix-ui/react-icons'
import {
  FundCategory,
  FundDetails,
  FundDetailsApiPayload,
  FundDetailsProps,
  FundTrailingReturns,
  FundYearWiseReturns,
} from '@cm-types/Fund'
import {
  dataToComponents,
  trailingReturnsKeys,
  generateTableHeaders,
  generateYearWiseReturnKeys,
  riskVolatilityMeasuresKeys,
  convertApiDataToTableData,
} from '@utils/fund-details'
import { MainRoutes } from '@utils/routing'
import { fundDetailsMock } from '@utils/fund-details-mock'
import { CMTable } from '@components/CMTable/CMTable'
import { FundAssetAllocationAndHoldings } from '@modules/fund-details/FundAssetAllocation/FundAssetAllocation'
import { formatDate } from '@utils/date'
import { FundDetailsCardTitle } from '@modules/fund-details/FundDetailsCardTitle/FundDetailsCardTitle'
import FundCard from '@components/FundCard/FundCard'
import { FundStockHoldingsTable } from '@modules/fund-details/FundStockHoldings/FundStockHoldings'
import { FundManagement } from '@modules/fund-details/FundManagement/FundManagement'
import Footer from '@components/Footer/Footer'
import { FundScheme } from '@modules/fund-details/FundScheme/FundScheme'
import { FundPeerComparisonTable } from '@modules/fund-details/FundPeerComparison/FundPeerComparison'
import useStyles from '@modules/fund-details/FundDetailsCard/fund-details.styles'
import { FundPerformanceChart } from '@modules/fund-details/FundPerformance/FundPerformance'
import { useDisclosure } from '@mantine/hooks'
import { TabsComponent } from '@components/TabsComponent/TabsComponent'

export default function FundDetailsPage({
  fundDetails,
  trailingReturns,
  yearWiseReturns,
  riskVolatilityMeasures,
  assetAllocation,
  stockHoldings,
  fundManagers,
  peerComparison: peerComparsion,
  fundPerformance,
}: FundDetailsProps) {
  const { tags, name, schemeCode, amc } = fundDetails
  const breadcrumbs: BreadcrumbItem[] = useMemo(
    () => [
      { route: MainRoutes.AllFunds, text: tags?.[0] as FundCategory },
      { route: `${MainRoutes.AllFunds}/${schemeCode}`, text: name as string },
    ],
    [tags, schemeCode, name],
  )

  const { classes } = useStyles()

  const yearWiseReturnsKeys = useMemo(
    () => generateYearWiseReturnKeys(yearWiseReturns?.[0] ?? {}),
    [yearWiseReturns],
  )
  const [expanded, handlers] = useDisclosure(false)
  const theme = useMantineTheme()
  return (
    <>
      <CMHead />
      <TopNav />
      <BasePageLayout>
        <Breadcrumbs
          separator={<ChevronRightIcon />}
          sx={{ alignItems: 'center' }}
        >
          <Link href="/">
            <HomeIcon />
          </Link>
          {breadcrumbs.map((breadcrumbItem) => (
            <Link href={breadcrumbItem.route} key={`${breadcrumbItem.route}`}>
              <Text size="sm">{breadcrumbItem.text}</Text>
            </Link>
          ))}
        </Breadcrumbs>
        <FundCard {...fundDetails} />
        <FundDetailsCard>
          <Group position="apart">
            <FundDetailsCardTitle>Fund Performance</FundDetailsCardTitle>
            <TabsComponent>
              <Tabs.Tab label="Trailing Ret" />
              <Tabs.Tab label="Rolling Ret" />
              <Tabs.Tab label="SIP Ret" />
              <Tabs.Tab label="Drawdown" />
            </TabsComponent>
          </Group>
          <FundPerformanceChart
            fundPerformance={fundPerformance}
            fundDetails={fundDetails as FundDetails}
          />
        </FundDetailsCard>
        <FundDetailsCard>
          <FundDetailsCardTitle>Trailing Returns (%)</FundDetailsCardTitle>
          <CMTable
            {...{
              id: 'trailing-returns-table',
              mt: 'md',
              headers: [...generateTableHeaders(trailingReturnsKeys)],
              data: [...dataToComponents(trailingReturns, trailingReturnsKeys)],
            }}
          />
        </FundDetailsCard>
        <FundDetailsCard>
          <FundDetailsCardTitle>Year-wise Returns (%)</FundDetailsCardTitle>
          <CMTable
            {...{
              id: 'yearwise-returns-table',
              mt: 'md',
              headers: [...generateTableHeaders(yearWiseReturnsKeys)],
              data: [...dataToComponents(yearWiseReturns, yearWiseReturnsKeys)],
            }}
          />
        </FundDetailsCard>
        <FundDetailsCard>
          <FundDetailsCardTitle>
            Risk and Volatility Measures (%)
          </FundDetailsCardTitle>
          <CMTable
            {...{
              id: 'risk-volatility-measures',
              mt: 'md',
              headers: [...generateTableHeaders(riskVolatilityMeasuresKeys)],
              data: [
                ...dataToComponents(
                  riskVolatilityMeasures,
                  riskVolatilityMeasuresKeys,
                ),
              ],
            }}
          />
        </FundDetailsCard>
        <FundDetailsCard>
          <Group align="center" position="apart">
            <FundDetailsCardTitle>
              Asset Allocation and Holding (%)
            </FundDetailsCardTitle>
            <Text size="xs" color={theme.colors.dark[3]}>
              As on {formatDate(assetAllocation.asOn)}
            </Text>
          </Group>
          <FundAssetAllocationAndHoldings assetAllocation={assetAllocation} />
        </FundDetailsCard>
        <FundDetailsCard>
          <Group align="center" position="apart">
            <FundDetailsCardTitle>Stock Holding</FundDetailsCardTitle>
            <Text size="xs" color={theme.colors.dark[3]}>
              As on TBD
            </Text>
          </Group>
          <FundStockHoldingsTable
            fundStockHoldings={
              expanded ? stockHoldings.data : stockHoldings.data.slice(0, 10)
            }
          />
          {stockHoldings.data.length > 10 ? (
            <Button
              size="xs"
              variant="outline"
              mt="lg"
              radius="md"
              onClick={() => handlers.toggle()}
            >
              See {expanded ? 'less' : 'all holdings'}
            </Button>
          ) : (
            <></>
          )}
        </FundDetailsCard>
        <FundDetailsCard className={classes.fundSchemeGrid}>
          <FundDetailsCardTitle>Fund Management</FundDetailsCardTitle>
          <FundManagement fundManagers={fundManagers} />
        </FundDetailsCard>
        <FundDetailsCard className={classes.fundSchemeGrid}>
          <FundScheme amc={amc} />
        </FundDetailsCard>
        <FundDetailsCard>
          <FundDetailsCardTitle>Peer Comparison</FundDetailsCardTitle>
          <FundPeerComparisonTable peerComparison={peerComparsion} />
          <Button size="xs" variant="outline" mt="md">
            See all ELSS funds
          </Button>
        </FundDetailsCard>
      </BasePageLayout>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<FundDetailsProps> = async (
  ctx
) => {
  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=30, stale-while-revalidate=150'
  )
  const fundId = ctx.params?.id
  const fundDetailsRes = await sendRequest(
    `http://174.138.123.10:8000/api/funds/${fundId}`, 'get'
  )
  const fundDetails: FundDetailsApiPayload = await fundDetailsRes.json()
  const { trailingReturns, yearWiseReturns, ...otherFundDetails } = fundDetails

  return {
    props: {
      ...otherFundDetails,
      trailingReturns: convertApiDataToTableData<FundTrailingReturns>(
        trailingReturns,
        otherFundDetails.fundDetails,
      ),
      yearWiseReturns: convertApiDataToTableData<FundYearWiseReturns>(
        yearWiseReturns,
        otherFundDetails.fundDetails,
      ),
      fundPerformance: fundDetailsMock.fundPerformance,
    },
  }
}

const sendRequest=(url: string, method: string)=> {
  const myHeaders = new Headers();

  const options = {
      method: method,
      headers: myHeaders,
      mode: 'no-cors'
  };


  return fetch(url, options as any);
}
