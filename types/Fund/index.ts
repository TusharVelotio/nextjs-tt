export enum FundCategory {
  DirectGrowth = 'direct-growth',
  EquityELSS = 'Equity: ELSS',
}

export enum CMCategory {
  EquityActive = 'equity-active',
}

export enum FundStatus {
  OpenEnded = 'open-ended',
}

export enum FundBenchmarkType {
  Nifty500Tri = 'nifty-500-tri',
}

export type FundValue = {
  value: number
  asOn: string
  percentage?: number
}

export type FundExpenseRatio = {
  value: number
  asOn: string
}

export type FundReturnsApiResponse<T> = {
  [key in FundReturnKeynames]: Omit<T, 'name' | 'id'>
}

export type FundTrailingReturns = {
  name: string
  id: string
  YTD?: number
  '1W'?: number
  '1M'?: number
  '3M'?: number
  '6M'?: number
  '1Y'?: number
  '2Y'?: number
  '3Y'?: number
  '5Y'?: number
  '10Y'?: number
  INC?: number
}

export type FundYearWiseReturns = {
  [key: string]: number | string
}

export type FundRiskVolatilityMeasures = {
  name?: string
  beta?: number
  alpha?: number
  stdDeviation?: number
  sharpe?: number
  sortino?: number
  worstDrawdown?: number
  currentDrawdown?: number
}

export type FundAssetAllocationFundType = {
  Equity?: number
  Debt?: number
  Others?: number
}

export type FundAssetAllocationMarketCap = {
  largeCap: number
  midCap: number
  smallCap: number
}

export type FundAssetAllocationCompanyType = {
  top_10: number
  top_11_20: number
  top_21_30: number
  rest: number
}

export type FundAssetAllocation = {
  byFundType: FundAssetAllocationFundType
  byTopHoldingPercentage: FundAssetAllocationCompanyType
  byMarketCap: FundAssetAllocationMarketCap
  asOn: string
}

export type FundTableData = {
  [key: string]: string | number
}

export enum StockHoldingsKeynames {
  Name = 'name',
  Weight = 'weight',
  FirstBought = 'firstBought',
  Value = 'marketValue',
  Last4Periods = 'lastFourPeriods',
  WeightChange = 'weightChange',
  OneYearReturn = '1YReturn',
}

export enum FundReturnKeynames {
  Scheme = 'scheme',
  Benchmark = 'benchmark',
  Category = 'category',
  Quartile = 'quartile',
  Percentile = 'percentile',
}

export enum PeerComparisonKeynames {
  Name = 'name',
  InceptionDate = 'inceptionDate',
  OneYReturn = '1YReturn',
  TwoYReturn = '2YReturn',
  ThreeYReturn = '3YReturn',
  FiveYReturn = '5YReturn',
  TenYReturn = '10YReturn',
  ExpenseRatio = 'expenseRatio',
  AUM = 'aum',
}

export type FundStockHolding = {
  [key in StockHoldingsKeynames]: string | number | number[]
}

export type FundManager = {
  name: string
  qualification: string
  managedSince: string
  initial: string
}

export type FundPeerComparison = {
  [key in PeerComparisonKeynames]: string | number
}

export type FundPerformance = {
  date: string
  value: number
}

export type FundStockHoldings = {
  data: FundStockHolding[]
  asOn?: string
}

export type FundAmc = {
  name: string
  asOn?: string
  totalSchemes: number
  totalAum: {
    value: number
    asOn?: string
  }
  address: string
  phoneNumber: string
}
export interface FundPerfomancePayload {
  fundPerformance: FundPerformance[]
}

export interface FundDetails {
  schemeCode: number
  name: string
  status: FundStatus
  inceptionDate: string
  tags: string[]
  isCmSelect?: boolean
  aum: FundValue
  benchmarkType: FundBenchmarkType
  exitLoad: number
  expenseRatio: FundValue
  peRatio: number
  pbRatio: number
  nav: FundValue
  returnsSinceInception: number
  amc: FundAmc
  alpha: {
    return: number
  }
  category: FundCategory
  cmCategory: CMCategory
  riskLevel: number
  benchmark: {
    name: string
    return: number
  }
}

export interface BasicFundDetails {
  fundDetails: FundDetails
  riskVolatilityMeasures: FundRiskVolatilityMeasures[]
  assetAllocation: FundAssetAllocation
  stockHoldings: FundStockHoldings
  fundManagers: FundManager[]
  peerComparison: FundPeerComparison[]
}
export interface FundDetailsApiPayload extends BasicFundDetails {
  trailingReturns: FundReturnsApiResponse<FundTrailingReturns>
  yearWiseReturns: FundReturnsApiResponse<FundYearWiseReturns>
}

export interface FundDetailsProps extends BasicFundDetails {
  trailingReturns: FundTrailingReturns[]
  yearWiseReturns: FundYearWiseReturns[]
  fundPerformance: FundPerfomancePayload
}

export interface FundAutocompleteOption {
  value: string
  fp: FundPerformance[]
}
