import { Text } from '@mantine/core'

interface FundDetailsCardTitleProps {
  children: React.ReactNode
}

export const FundDetailsCardTitle: React.FC<FundDetailsCardTitleProps> = ({
  children,
}) => (
  <Text size="md" weight="semibold">
    {children}
  </Text>
)
