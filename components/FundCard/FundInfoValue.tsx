import { Text } from '@mantine/core'

interface FundInfoValueProps {
  children: React.ReactNode
}

export const FundInfoValue: React.FC<FundInfoValueProps> = (props: any) => {
  return <Text size={'sm'}>{props.children}</Text>
}
