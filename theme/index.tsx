import { MantineTheme } from '@mantine/core'
import { CSSObject } from '@emotion/react'

export const globalStyles: (theme: MantineTheme) => CSSObject = (
  theme: MantineTheme,
) => ({
  body: {
    ...theme.fn.fontStyles,
    backgroundColor: theme.colors.gray[1],
  },
})

export const appTheme: Partial<MantineTheme> = {
  colorScheme: 'light',
  fontFamily: "'Inter', sans-serif",
  primaryColor: 'green',
  other: {
    border: '1px solid',
    truncateText: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
  },
}
