import { Text, useMantineTheme } from '@mantine/core'

interface FundInfoKeyProps {
  children: React.ReactNode
}

export const FundInfoKey: React.FC<FundInfoKeyProps> = ({ children }) => {
  const theme = useMantineTheme()

  return (
    <Text color={theme.colors.dark[1]} size="sm">
      {children}
    </Text>
  )
}
