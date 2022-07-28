import { FundAutocompleteOption } from '@cm-types/Fund'
import { RemoveButton } from '@components/BadgeComponent/RemoveButton'
import { ActionIcon, Badge, Group } from '@mantine/core'

interface SelectedFundBadgesProps {
  selectedFunds: Array<FundAutocompleteOption & { isIndex?: boolean }>
  removeFund: (selectedFund: FundAutocompleteOption) => void
}

export const SelectedFundBadges: React.FC<SelectedFundBadgesProps> = ({
  selectedFunds,
  removeFund,
}) => {
  return (
    <Group>
      {selectedFunds.map((sf) => (
        <Badge
          key={`selected-fund-${sf.value}`}
          variant="outline"
          rightSection={
            sf?.isIndex ? null : (
              <ActionIcon onClick={() => removeFund(sf)}>
                <RemoveButton />
              </ActionIcon>
            )
          }
        >
          {sf.value}
        </Badge>
      ))}
    </Group>
  )
}
