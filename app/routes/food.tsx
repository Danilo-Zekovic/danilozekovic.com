import { createFileRoute } from '@tanstack/react-router'
import Page from '~/components/Page'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import FoodContent from '~/components/food'
import { foodEn, foodSr } from '~/data/food'

export const Route = createFileRoute('/food')({
  head: () => ({
    meta: [
      { title: 'Food | Danilo Zeković' },
      {
        name: 'description',
        content: 'Food I am allowed to eat and the techniques for preparing it.',
      },
      {
        name: 'robots',
        content: 'noindex, nofollow, noarchive, nosnippet, noimageindex',
      },
      {
        name: 'googlebot',
        content: 'noindex, nofollow, noarchive, nosnippet, noimageindex',
      },
      {
        name: 'bingbot',
        content: 'noindex, nofollow, noarchive, nosnippet, noimageindex',
      },
      {
        name: 'google-extended',
        content: 'noindex, nofollow',
      },
    ],
  }),
  component: Food,
})

function Food() {
  return (
    <Page>
      <Tabs defaultValue="srpski" className="w-full">
        <div className="flex justify-end mb-6 w-full">
          <TabsList>
            <TabsTrigger value="srpski">Srpski</TabsTrigger>
            <TabsTrigger value="english">English</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="srpski" className="mt-0">
          <FoodContent data={foodSr} />
        </TabsContent>

        <TabsContent value="english" className="mt-0">
          <FoodContent data={foodEn} />
        </TabsContent>
      </Tabs>
    </Page>
  )
}

export default Food
