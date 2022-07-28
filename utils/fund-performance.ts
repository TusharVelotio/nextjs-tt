import parse from 'date-fns/parse'
import format from 'date-fns/format'
import { FundPerformance } from '@cm-types/Fund'

export const convertFundPerformanceToHighChartsData = (
  fundPerformance: FundPerformance[],
): number[][] =>
  fundPerformance.map((fp) => {
    const { value, date } = fp
    const parsedDateObj = parse(date, 'yyyy-MM-dd', new Date())
    const timestampedDateValue = parseInt(format(parsedDateObj, 'T'))
    return [timestampedDateValue, value]
  })
