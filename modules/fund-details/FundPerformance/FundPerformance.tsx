import {
  FundAutocompleteOption,
  FundDetails,
  FundPerfomancePayload,
} from '@cm-types/Fund'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { useMemo, useState } from 'react'
import { convertFundPerformanceToHighChartsData } from '@utils/fund-performance'
import { Stack } from '@mantine/core'
import { FundAddScheme } from './FundAddScheme'
import { SelectedFundBadges } from './SelectedFundBadges'
import { generateRandomFundPerformances } from '@utils/fund-details-mock'
interface FundPerformanceProps {
  fundPerformance: FundPerfomancePayload
  fundDetails: FundDetails
}

export const FundPerformanceChart: React.FC<FundPerformanceProps> = ({
  fundPerformance,
  fundDetails,
}) => {
  const [selectedFunds, setSelectedFunds] = useState<FundAutocompleteOption[]>(
    [],
  )

  const chartOptions: Highcharts.Options = useMemo(
    () => ({
      rangeSelector: {
        selected: 1,
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },
      series: [
        { fp: fundPerformance.fundPerformance, value: fundDetails.name },
        { fp: generateRandomFundPerformances(), value: 'Nifty 500 TRI' },
        { fp: generateRandomFundPerformances(), value: 'Category' },
        ...selectedFunds,
      ].map(({ value, fp }) => ({
        name: value,
        data: convertFundPerformanceToHighChartsData(fp),
        tooltip: {
          valueDecimals: 2,
        },
        type: 'line',
        showInLegend: true,
      })),
    }),
    [fundDetails.name, fundPerformance, selectedFunds],
  )

  const addFund = (selectedFund: FundAutocompleteOption) => {
    setSelectedFunds([...selectedFunds, selectedFund])
  }

  const removeFund = (selectedFund: FundAutocompleteOption) => {
    const filteredFunds = selectedFunds.filter(
      (sf) => sf.value !== selectedFund.value,
    )
    setSelectedFunds(filteredFunds)
  }

  const selectedFundBadges = useMemo(
    () =>
      selectedFunds.map((sf) => ({
        ...sf,
        isIndex: sf.value === fundDetails.name,
      })),
    [fundDetails.name, selectedFunds],
  )

  return (
    <Stack>
      <FundAddScheme addFund={addFund} />
      <SelectedFundBadges
        selectedFunds={selectedFundBadges}
        removeFund={removeFund}
      />
      <HighchartsReact
        highcharts={Highcharts}
        constructorType="stockChart"
        options={chartOptions}
      />
    </Stack>
  )
}
