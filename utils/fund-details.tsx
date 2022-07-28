import {
  FundDetails,
  FundReturnKeynames,
  FundReturnsApiResponse,
  FundTableData,
  FundYearWiseReturns,
} from '@cm-types/Fund'
import { roundOff } from './common'

type KeysData = Array<{ key: string; title: string }>

export const trailingReturnsKeys: KeysData = [
  {
    key: 'name',
    title: 'Fund Name',
  },
  {
    key: 'YTD',
    title: 'YTD',
  },
  {
    key: '1W',
    title: '1W',
  },
  {
    key: '1M',
    title: '1M',
  },
  {
    key: '3M',
    title: '3M',
  },
  {
    key: '6M',
    title: '6M',
  },
  {
    key: '1Y',
    title: '1Y',
  },
  {
    key: '2Y',
    title: '2Y',
  },
  {
    key: '3Y',
    title: '3Y',
  },
  {
    key: '5Y',
    title: '5Y',
  },
  {
    key: '10Y',
    title: '10Y',
  },
  {
    key: 'inception',
    title: 'Inception',
  },
]

export const riskVolatilityMeasuresKeys: KeysData = [
  { key: 'name', title: 'Fund Name' },
  { key: 'beta', title: 'Beta' },
  { key: 'alpha', title: 'Alpha' },
  { key: 'stdDeviation', title: 'Std Deviation' },
  { key: 'sharpe', title: 'Sharpe' },
  { key: 'sortino', title: 'Sortino' },
  { key: 'worstDrawdown', title: 'Worst Drawdown' },
  { key: 'currentDrawdown', title: 'Current Drawdown' },
]

export const stockHoldingsKeys: KeysData = [
  { key: 'name', title: 'Holding' },
  { key: 'weight', title: 'Weight' },
  { key: 'firstBought', title: 'First Bought' },
  { key: 'marketValue', title: 'Value (Cr)' },
  { key: 'lastFourPeriods', title: 'Last 4 Periods' },
  { key: 'weightChange', title: 'Weight Change (%)' },
  { key: '1YReturn', title: '1Y Return' },
]

export const peerComparisonKeys: KeysData = [
  { key: 'name', title: 'Fund Name' },
  { key: 'inceptionDate', title: 'Inception Date' },
  { key: '1YReturn', title: '1Y Return' },
  { key: '2YReturn', title: '2Y Return' },
  { key: '3YReturn', title: '3Y Return' },
  { key: '5YReturn', title: '5Y Return' },
  { key: '10YReturn', title: '10Y Return' },
  { key: 'expenseRatio', title: 'Expense Ratio (%)' },
  { key: 'aum', title: 'Assets (Cr)' },
]

export function generateTableHeaders(keyData: KeysData) {
  return keyData.map(({ title }) => <>{title}</>)
}

export function generateYearWiseReturnKeys(
  yearWiseReturnsData: FundYearWiseReturns,
): KeysData {
  const yearWiseReturnsKeys: KeysData = [
    { key: 'name', title: 'Fund Name' },
    { key: 'YTD', title: 'YTD' },
  ]
  const cloneYearWiseReturnsData = { ...yearWiseReturnsData }
  delete cloneYearWiseReturnsData.YTD
  delete cloneYearWiseReturnsData.name
  delete cloneYearWiseReturnsData.id
  return [
    ...yearWiseReturnsKeys,
    ...Object.keys(cloneYearWiseReturnsData).map((key) => ({
      key,
      title: key === 'name' ? 'Fund Name' : key,
    })),
  ]
}

export function dataToComponents(
  data: FundTableData[],
  keys: KeysData,
): JSX.Element[][] {
  return data.map((dataPoint) => {
    const componentDataPoint: JSX.Element[] = []
    keys.forEach(({ key }) => {
      const value = dataPoint[key]
      const tableValue = typeof value === 'number' ? roundOff(value) : value
      componentDataPoint.push(<>{tableValue || 'NA'}</>)
    })
    return componentDataPoint
  })
}

export function convertApiDataToTableData<T>(
  apiData: FundReturnsApiResponse<T>,
  fundDetails: FundDetails,
) {
  return Object.entries(apiData).map(([keyname, value]) => {
    const name =
      keyname === FundReturnKeynames.Scheme ? fundDetails.name : keyname
    return {
      name,
      id: keyname,
      ...value,
    }
  })
}
