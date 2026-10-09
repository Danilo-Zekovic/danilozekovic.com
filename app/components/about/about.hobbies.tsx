import {
  Camera,
  Mountain,
  MountainSnow,
  PencilRuler,
  Snowflake,
  TentTree,
  Trees,
  Volleyball,
  Waves,
} from 'lucide-react'
import { Card, CardContent } from '~/components/ui/card'

const items = [
  {
    title: 'Hiking',
    icon: <MountainSnow />,
  },
  {
    title: 'Rock climbing',
    icon: <Mountain />,
  },
  {
    title: 'Camping',
    icon: <TentTree />,
  },
  {
    title: 'Skiing',
    icon: <Snowflake />,
  },
  {
    title: 'Drawing',
    icon: <PencilRuler />,
  },
  {
    title: 'SUP',
    icon: <Waves />,
  },
  {
    title: 'Basketball',
    icon: <Volleyball />,
  },
  {
    title: 'Photography',
    icon: <Camera />,
  },
  {
    title: 'Wood working',
    icon: <Trees />,
  },
]

export default function Hobbies() {
  return (
    <Card>
      <CardContent className="pt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-2 max-w-[625px] w-full">
        {items.map(({ title, icon }) => (
          <div className="flex flex-col gap-2 m-4 items-center" key={title}>
            {icon}
            <span className="text-center">{title}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
