import axios from 'axios'
import { FundDetails } from '@cm-types/Fund'
import { QueryFunctionContext } from '@tanstack/react-query'

export async function fetchFundByKeyword(
  queryContext: QueryFunctionContext<[string, { query: string }]>,
) {
  const { queryKey } = queryContext
  const [, { query }] = queryKey
  return axios.get<{
    data: { schemes: Pick<FundDetails, 'name' | 'schemeCode'>[] }
  }>(`http://174.138.123.10:8000/api/funds/search/`, {
    params: { name: query, limit: 20 },
  })
}