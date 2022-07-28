import { Text, useMantineTheme } from '@mantine/core'

interface FundInfoNavValueProps {
  value: number
  children: React.ReactNode
}

const FundInfoNavValue: React.FC<FundInfoNavValueProps> = ({
  value,
  children,
}) => {
  const theme = useMantineTheme()

  return (
    <Text
      color={value >= 0 ? theme.colors.green[9] : theme.colors.red[9]}
      weight="semi-bold"
      size="xl"
    >
      {children}
    </Text>
  )
}

export default FundInfoNavValue
