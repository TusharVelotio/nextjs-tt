import { Badge, Group, MediaQuery, Stack, Text } from '@mantine/core'
import useStyles from '@components/FundCard/FundCard.styles'
import { DotFilledIcon, StarIcon } from '@radix-ui/react-icons'

interface CMSelectProps {
  name: string
  tags: string[]
}

export const CMSelect: React.FC<CMSelectProps> = ({ name, tags }) => {
  const { classes } = useStyles()
  const starAvatar = <StarIcon className={classes.starIcon} />

  return (
    <Stack className={classes.removeGap}>
      <Text className={classes.fundName}>{name}</Text>
      <Group spacing={2}>
        <Text size="xs"> {tags?.[0]}</Text>
        <DotFilledIcon className={classes.dotColor} />
        <Text size="xs">{tags?.[1]}</Text>

        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Group className={classes.removeGap}>
            <DotFilledIcon className={classes.dotColor} />
            <Badge
              size="sm"
              leftSection={starAvatar}
              radius="xs"
              className={classes.cmSelect}
            >
              CM Select
            </Badge>
          </Group>
        </MediaQuery>
      </Group>
    </Stack>
  )
}
