import { Anchor, Stack, Text } from '@mantine/core'
import React from 'react'
import useStyles from '@components/Footer/Footer.styles'

export const FooterTag: React.FC = () => {
  const { classes } = useStyles()

  return (
    <>
      <Stack className={classes.footerStack}>
        <Text className={classes.gridLinkTitle}>Company</Text>
        <Stack spacing={2}>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            Company
          </Anchor>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            About us
          </Anchor>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            Disclosures
          </Anchor>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            Privacy Policy
          </Anchor>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            Terms & Condition
          </Anchor>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            Disclaimer
          </Anchor>
        </Stack>
      </Stack>

      <Stack className={classes.footerStack}>
        <Text className={classes.gridLinkTitle}>Top Fund Houses</Text>
        <Stack spacing={2}>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            SBI Mutual Fund
          </Anchor>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            HDFC Mutual Fund
          </Anchor>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            Nippon India Mutual Fund
          </Anchor>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            L&T Mutual Fund
          </Anchor>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            UTI Mutual Fund
          </Anchor>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            ICICI Prudential Mutual Fund
          </Anchor>
        </Stack>
      </Stack>

      <Stack className={classes.footerStack}>
        <Text className={classes.gridLinkTitle}>Explore</Text>
        <Stack spacing={2}>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            Mutual Funds
          </Anchor>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            Explore Stocks
          </Anchor>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            NPS Investment
          </Anchor>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            Health Insurance
          </Anchor>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            Term Insurance
          </Anchor>
          <Anchor
            className={classes.anchorStyles}
            href="https://google.com"
            target="_blank"
          >
            All Mutual Fund Schemes
          </Anchor>
        </Stack>
      </Stack>
    </>
  )
}
