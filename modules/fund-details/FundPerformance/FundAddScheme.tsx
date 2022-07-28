import { useQuery } from '@tanstack/react-query'
import { FundAutocompleteOption } from '@cm-types/Fund'
import { Autocomplete, Button, Group } from '@mantine/core'
import { useDebouncedValue, useDisclosure } from '@mantine/hooks'
import useStyle from '@modules/fund-details/FundPerformance/FundAddScheme.styles'
import { generateRandomFundPerformances } from '@utils/fund-details-mock'
import { useState } from 'react'
import { fetchFundByKeyword } from '../queries'

type FundAddSchemeProps = {
  addFund: (fund: FundAutocompleteOption) => void
}

export const FundAddScheme: React.FC<FundAddSchemeProps> = ({ addFund }) => {
  const [showInputField, setShowInputField] = useDisclosure(false)
  const [value, setValue] = useState('')
  const { classes } = useStyle()
  const [debounced] = useDebouncedValue(value, 200)

  const { data } = useQuery(
    ['fund-search', { query: debounced }],
    fetchFundByKeyword,
    { enabled: !!debounced, retry: false, staleTime:60000 },
  )

  // The actual data is too nested - refactor
  const fundPerformanceOptions = data
    ? data?.data?.data?.schemes?.map((fundDetails) => ({
        value: fundDetails.name,
        fp: generateRandomFundPerformances(),
      }))
    : []

  const handleSelect = (selectedFund: FundAutocompleteOption) =>
    addFund(selectedFund)

  return (
    <Group mt="md" position="right">
      {!showInputField ? (
        <Button
          variant="outline"
          radius="md"
          className={classes.addButton}
          onClick={() => {
            setShowInputField.open()
          }}
        >
          Add fund to graph
        </Button>
      ) : (
        <Autocomplete
          onChange={(v) => setValue(v)}
          onItemSubmit={handleSelect}
          placeholder="Search scheme"
          data={fundPerformanceOptions}
          className={classes.autoInput}
        />
      )}
    </Group>
  )
}
