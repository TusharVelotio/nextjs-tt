import { Card, CardProps } from '@mantine/core'

interface FundDetailsCardProps extends CardProps<'div'> {
  children: JSX.Element | JSX.Element[]
}

export const FundDetailsCard: React.FC<FundDetailsCardProps> = ({
  children,
  ...rest
}) => (
  <Card mt="md" sx={{ width: '100%' }} withBorder {...rest}>
    {children}
  </Card>
)
