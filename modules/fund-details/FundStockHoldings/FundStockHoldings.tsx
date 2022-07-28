import { FundStockHolding, StockHoldingsKeynames } from '@cm-types/Fund'
import { CMTable, CMTableProps } from '@components/CMTable/CMTable'
import { Box, Group, Progress, Text, useMantineTheme } from '@mantine/core'
import { formatDate } from '@utils/date'
import { generateTableHeaders, stockHoldingsKeys } from '@utils/fund-details'
import { useMemo } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js'
import { formatInCr, roundOff } from '@utils/common'

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
)

interface FundStockHoldingsProps {
  fundStockHoldings: FundStockHolding[]
}

export const FundStockHoldingsTable: React.FC<FundStockHoldingsProps> = ({
  fundStockHoldings,
}) => {
  const theme = useMantineTheme()

  const tableData: CMTableProps['data'] = useMemo(() => {
    return fundStockHoldings.map((fundHolding) =>
      stockHoldingsKeys.map(({ key }) => {
        const value = fundHolding[key as keyof FundStockHolding]
        if (!value) {
          return <>NA</>
        }

        switch (key) {
          case StockHoldingsKeynames.Weight:
            return (
              <Group noWrap>
                <Progress
                  sx={{ width: 120 }}
                  value={value as number}
                  color="yellow"
                />
                <Text ml="sm" size="xs">
                  {value} %
                </Text>
              </Group>
            )
          case StockHoldingsKeynames.Last4Periods:
            return (
              <Box sx={{ height: theme.spacing.xl, width: 120 }}>
                <Line
                  options={{
                    scales: {
                      xAxes: { display: false },
                      yAxes: { display: false },
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                  data={{
                    labels: (value as number[]).map((val) => roundOff(val)),
                    datasets: [
                      {
                        label: 'weights',
                        data: value as number[],
                        borderColor: theme.colors.violet[4],
                      },
                    ],
                  }}
                />
              </Box>
            )
          case StockHoldingsKeynames.Name:
            return <Text size="xs">{value}</Text>
          case StockHoldingsKeynames.FirstBought:
            return (
              <Text size="xs">
                {formatDate(value as string, '', 'dd MMM yyyy', true)}
              </Text>
            )
          case StockHoldingsKeynames.Value:
            return <Text size="xs">₹{formatInCr(value as number)}</Text>
          default:
            return <Text size="xs">{roundOff((value as number) || 0)}%</Text>
        }
      }),
    )
  }, [fundStockHoldings, theme])

  return (
    <CMTable
      headers={generateTableHeaders(stockHoldingsKeys)}
      data={tableData}
      id="fund-holdings-table"
      mt="lg"
    />
  )
}
