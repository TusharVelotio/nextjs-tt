import { FundAssetAllocation } from '@cm-types/Fund'
import { Box, SimpleGrid, useMantineTheme } from '@mantine/core'
import {
  prepareCompanyTypeData,
  prepareFundTypeChartData,
  prepareMarketCapData,
} from '@utils/asset-allocation'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import { useMemo } from 'react'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, Title)

interface FundAssetAllocationProps {
  assetAllocation: FundAssetAllocation
}

export const FundAssetAllocationAndHoldings: React.FC<
  FundAssetAllocationProps
> = ({
  assetAllocation: { byFundType, byTopHoldingPercentage, byMarketCap },
}) => {
  const theme = useMantineTheme()

  const colorTheme = useMemo(
    () => [
      theme.colors.green[4],
      theme.colors.yellow[4],
      theme.colors.pink[4],
      theme.colors.grape[4],
    ],
    [theme.colors],
  )

  return (
    <SimpleGrid
      cols={3}
      spacing="lg"
      breakpoints={[
        { maxWidth: 'md', cols: 3, spacing: 'md' },
        { maxWidth: 'sm', cols: 1, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' },
      ]}
    >
      <Box p="md">
        <Doughnut
          data={prepareFundTypeChartData(byFundType, colorTheme)}
          options={{
            plugins: {
              title: { display: true, text: 'Asset Allocation' },
              legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true,
                },
              },
            },
          }}
        />
      </Box>
      <Box p="md">
        <Doughnut
          data={prepareCompanyTypeData(byTopHoldingPercentage, colorTheme)}
          options={{
            plugins: {
              title: {
                display: true,
                text: 'Asset Allocation',
                position: 'top',
              },
              legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true,
                },
              },
            },
          }}
        />
      </Box>
      <Box p="md">
        <Doughnut
          data={prepareMarketCapData(byMarketCap, colorTheme)}
          options={{
            plugins: {
              title: { display: true, text: 'Allocation by Market Cap' },
              legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true,
                },
              },
            },
          }}
        />
      </Box>
    </SimpleGrid>
  )
}
