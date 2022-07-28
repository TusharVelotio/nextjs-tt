import { FundPeerComparison, PeerComparisonKeynames } from '@cm-types/Fund'
import { CMTable } from '@components/CMTable/CMTable'
import { Group, Text } from '@mantine/core'
import Logo from '@assets/logos/Mirae.svg'
import { generateTableHeaders, peerComparisonKeys } from '@utils/fund-details'
import Image from 'next/image'
import { useMemo } from 'react'
import { roundOff } from '@utils/common'
import useStyles from '@modules/fund-details/FundPeerComparison/FundPeerComparison.styles'

interface FundPeerComparisonProps {
  peerComparison: FundPeerComparison[]
}

const tableHeaders = generateTableHeaders(peerComparisonKeys)

const numberKeys = [
  PeerComparisonKeynames.OneYReturn,
  PeerComparisonKeynames.TenYReturn,
  PeerComparisonKeynames.ThreeYReturn,
  PeerComparisonKeynames.TwoYReturn,
  PeerComparisonKeynames.ExpenseRatio,
  PeerComparisonKeynames.FiveYReturn,
  PeerComparisonKeynames.AUM,
]

export const FundPeerComparisonTable: React.FC<FundPeerComparisonProps> = ({
  peerComparison,
}) => {
  const { classes } = useStyles()

  const peerComparisonData = useMemo(
    () =>
      peerComparison.map((fundDetail) => {
        const components: JSX.Element[] = []
        peerComparisonKeys.forEach(({ key }) => {
          if (key === 'name') {
            components.push(
              <Group
                align="center"
                className={classes.fundNameContainer}
                noWrap
              >
                <Image src={Logo} width={32} height={32} />
                <Text size="xs" className={classes.fundName}>
                  {fundDetail[key]}
                </Text>
              </Group>,
            )
            return
          }
          const value = fundDetail[key as PeerComparisonKeynames]
          if (!value) {
            components.push(<>NA</>)
            return
          }
          if (numberKeys.includes(key as PeerComparisonKeynames)) {
            components.push(<>{roundOff(value as number)}</>)
            return
          }
          components.push(<>{value}</>)
        })
        return components
      }),
    [classes, peerComparison],
  )

  return (
    <CMTable
      id="fund-peer-comparison-table"
      data={peerComparisonData}
      headers={tableHeaders}
      mt="md"
    />
  )
}
