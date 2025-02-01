import { Laptop } from 'lucide-react'
import { Card, CardContent } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'

const itemStyle = 'flex flex-col md:flex-row gap-0 md:gap-4 m-4'

const infoStyle = 'flex flex-col w-full'

const items = [
  {
    role: 'Software Engineer',
    company: 'Symphony',
    location: 'Novi Sad, Serbia',
    date: 'Okt 2023 - Present',
    link: 'https://symphony.is/',
  },
  {
    role: 'Software Engineer',
    company: 'Arrideo (previously NeonCat)',
    location: 'Novi Sad, Serbia',
    date: 'Dec 2020 - Jun 2023',
    link: 'https://arrideo.io/',
  },
  {
    role: 'Software Engineer',
    company: 'Symphony',
    location: 'Novi Sad, Serbia',
    date: 'Jun 2018 - Dec 2020',
    link: 'https://symphony.is/',
  },
  {
    role: 'Software Developer',
    company: 'Compass Holding, LLC',
    location: 'Chicago, IL',
    date: 'Aug 2016 - Aug 2018',
    link: 'https://www.compassholding.net/',
  },
]

export default function Experience() {
  return (
    <Card>
      <CardContent className="pt-6 max-w-[625px]">
        {items.map(({ role, company, location, date, link }) => (
          <>
            <div className={itemStyle}>
              <Laptop className="size-24" />
              <div className={infoStyle}>
                <h4 className="text-lg font-semibold mb-2">{role}</h4>
                <span className="text-secondary-foreground">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={company}
                    className="text-chart-3 hover:text-chart-2 underline"
                  >
                    {company}
                  </a>
                  , {location}
                </span>
                <span className="text-muted-foreground">{date}</span>
              </div>
            </div>
            <Separator className="last:hidden" />
          </>
        ))}
      </CardContent>
    </Card>
  )
}
