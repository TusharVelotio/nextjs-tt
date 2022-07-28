import { FundManager } from '@cm-types/Fund'
import {
  Accordion,
  Avatar,
  Box,
  Group,
  Text,
  useMantineTheme,
  useAccordionState,
} from '@mantine/core'
import { formatDate } from '@utils/date'
import useStyles from '@modules/fund-details/FundManagement/FundManagement.styles'

interface FundManagement {
  fundManagers: FundManager[]
}

interface FundManagerAccordionLabelProps {
  fundManager: FundManager
  isExpanded?: boolean
}

const FundManagerAccordionLabel: React.FC<FundManagerAccordionLabelProps> = ({
  fundManager: { name, managedSince },
  isExpanded,
}) => {
  const theme = useMantineTheme()
  return (
    <Group align="center">
      <Avatar color="green" radius="xl">
        {name?.[0]?.toUpperCase()}
      </Avatar>
      <Box sx={{ flex: 1 }}>
        <Text size="sm" weight="bold">
          {name}
        </Text>
        <Text size="xs" color={theme.colors.dark[3]}>
          {managedSince ? `Since ${formatDate(managedSince)}` : ''}
        </Text>
      </Box>
      <Text color="green" size="sm">
        {isExpanded ? '- Hide Details ' : '+ Show Details'}
      </Text>
    </Group>
  )
}

export const FundManagement: React.FC<FundManagement> = ({ fundManagers }) => {
  const theme = useMantineTheme()
  const { classes } = useStyles()

  const [state, { setState }] = useAccordionState({
    initialItem: 0,
    total: fundManagers.length,
  })

  return (
    <Accordion
      initialState={state}
      className={classes.accordion}
      iconPosition="right"
      icon={<></>}
      iconSize={0}
      multiple
      onChange={(s) => setState(s)}
    >
      {fundManagers.map((fundManager, index) => (
        <Accordion.Item
          label={
            <FundManagerAccordionLabel
              isExpanded={state[index]}
              fundManager={fundManager}
            />
          }
          key={`fund-management-${index}`}
          className={classes.accordionItem}
        >
          <Text size="sm">Education</Text>
          <Text size="sm" color={theme.colors.dark[3]}>
            {fundManager.initial} {fundManager.name} is{' '}
            {fundManager.qualification}
          </Text>
          <Text mt="md" size="sm" color="green">
            View all managed funds (5)
          </Text>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}
