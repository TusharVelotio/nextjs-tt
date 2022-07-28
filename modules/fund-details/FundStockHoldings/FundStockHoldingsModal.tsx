import { Modal, useMantineTheme } from '@mantine/core'
import { FundStockHolding } from '@cm-types/Fund'
import { FundStockHoldingsTable } from './FundStockHoldings'

interface FundStockHoldingModalProps {
  opened: boolean
  onClose: VoidFunction
  fundStockHoldings: FundStockHolding[]
}

export const FundStockHoldingModal: React.FC<FundStockHoldingModalProps> = ({
  fundStockHoldings,
  opened,
  onClose,
}) => {
  const theme = useMantineTheme()

  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        title="Stock Holding"
        size={theme.breakpoints.md}
      >
        <FundStockHoldingsTable fundStockHoldings={fundStockHoldings} />
      </Modal>
    </>
  )
}
