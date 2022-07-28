import { useState } from 'react'
import useStyles from '@components/Footer/Footer.styles'
import { Collapse, Group, Text } from '@mantine/core'
import { ChevronDownIcon } from '@radix-ui/react-icons'

interface tagProps {
  children: JSX.Element | JSX.Element[]
  title: string
}

export const FooterDropdown: React.FC<tagProps> = ({ children, title }) => {
  const { classes } = useStyles()

  const [opened, setOpen] = useState(false)

  return (
    <>
      <Group position={'apart'} onClick={() => setOpen((o) => !o)}>
        <Text className={classes.gridLinkTitle}>{title}</Text>
        <ChevronDownIcon className={classes.gridLinkTitle} />
      </Group>

      <Collapse in={opened}>{children}</Collapse>
    </>
  )
}
