import {
  FundAssetAllocationCompanyType,
  FundAssetAllocationFundType,
  FundAssetAllocationMarketCap,
} from '@cm-types/Fund'
import { ChartData } from 'chart.js'

export function prepareFundTypeChartData(
  fundTypeData: FundAssetAllocationFundType,
  colors: string[],
): ChartData<'doughnut', number[], unknown> {
  return {
    labels: ['Equity', 'Debt', 'Others'],
    datasets: [
      {
        label: 'Percentage (%)',
        data: [
          fundTypeData?.Debt || 0,
          fundTypeData?.Equity || 0,
          fundTypeData?.Others || 0,
        ],
        backgroundColor: [...colors],
      },
    ],
  }
}

export function prepareCompanyTypeData(
  companyTypeData: FundAssetAllocationCompanyType,
  colors: string[],
): ChartData<'doughnut', number[], unknown> {
  return {
    labels: ['Top 10', 'Top 20', 'Top 30', 'Rest'],
    datasets: [
      {
        label: 'Percentage (%)',
        data: [
          companyTypeData?.top_10,
          companyTypeData?.top_11_20,
          companyTypeData?.top_21_30,
          companyTypeData?.rest,
        ],
        backgroundColor: [...colors],
      },
    ],
  }
}

export function prepareMarketCapData(
  marketCapData: FundAssetAllocationMarketCap,
  colors: string[],
): ChartData<'doughnut', number[], unknown> {
  return {
    labels: ['Large Cap', 'Mid Cap', 'Small Cap'],
    datasets: [
      {
        label: 'Percentage (%)',
        data: [
          marketCapData?.largeCap,
          marketCapData?.midCap,
          marketCapData?.smallCap,
        ],
        backgroundColor: [...colors],
      },
    ],
  }
}
