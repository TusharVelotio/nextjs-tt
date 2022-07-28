import { Card } from '@mantine/core'
import type { NextPage } from 'next'
import { BasePageLayout } from '../components/BasePageLayout/BasePageLayout'
import { CMHead } from '../components/CMHead/CMHead'
import { TopNav } from '../components/TopNav/TopNav'

const Home: NextPage = () => {
  return (
    <div>
      <CMHead />
      <TopNav />
      <BasePageLayout>
        <Card sx={{ width: '100%' }} shadow="none" withBorder>
          Card here
        </Card>
      </BasePageLayout>
    </div>
  )
}

export default Home
