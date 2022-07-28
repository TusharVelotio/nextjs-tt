import { Stack } from '@mantine/core'

interface FundInfoNaVProps {
  children: JSX.Element | JSX.Element[]
}

export const FundInfoNav: React.FC<FundInfoNaVProps> = ({ children }) => {
  return <Stack spacing={0}>{children}</Stack>
}
