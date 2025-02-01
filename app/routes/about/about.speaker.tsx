import { Speech } from 'lucide-react'
import { Card, CardContent } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'

const itemStyle = 'flex flex-col md:flex-row gap-0 md:gap-4 m-4'

const infoStyle = 'flex flex-col w-full'

const items = [
  {
    title: 'Fundamentals of GraphQL',
    type: 'Tutorial',
    event: {
      name: 'Open Source Convention (OSCON)',
      link: 'https://www.oreilly.com/conferences/oscon.html',
    },
    presenters: 'Brian Capouch, Danilo Zekovic',
    date: 'July 17, 2018',
    description:
      '"GraphQL—a schema-based, client-centric model for data interchange—offers web programmers an alternative to REST. Brian Capouch and Danilo Zekovic offer an overview of GraphQL basic concepts, its data types and schema, and the GraphiQL debugging interface and walk you through using a GraphQL starter kit to gain hands-on experience..."',
  },
  {
    title: 'Progressive Web Applications (PWA)',
    type: 'Session',
    event: {
      name: 'Open Source Convention (OSCON)',
      link: 'https://www.oreilly.com/conferences/oscon.html',
    },
    presenters: 'Brian Capouch, Danilo Zekovic',
    date: 'May 11, 2017',
    description:
      '"Brian Capouch and Danilo Zekovic offer a high-level overview of the emerging architecture of progressive web applications, examining code snippets that implement various components and functions and exploring the tools that provide the PWA developer with information about the application, in terms of its adherence to best practices and performance under real-world conditions..."',
  },
  {
    title: 'SPA Boot Camp',
    type: 'Tutorial',
    event: {
      name: 'Open Source Convention (OSCON)',
      link: 'https://www.oreilly.com/conferences/oscon.html',
    },
    presenters: 'Brian Capouch, Ben Devisson, Danilo Zekovic',
    date: 'May 17, 2016',
    description:
      '"Brian Capouch, Danilo Zekovic, and Ben Davisson offer an introduction to single-page apps, presenting an overview of concepts and techniques focused on practical familiarity with this technology. Brian, Danilo, and Ben review frameworks and toolkits, but their approach remains intensely vendor agnostic..."',
  },
]

export default function Speaker() {
  return (
    <Card>
      <CardContent className="pt-6 max-w-[625px]">
        {items.map(({ title, type, event, presenters, date, description }) => (
          <>
            <div className={itemStyle}>
              <Speech className="size-20" />
              <div className={infoStyle}>
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                <span className="text-muted-foreground">{type}</span>
                <span className="text-secondary-foreground">
                  Event:{' '}
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={event.name}
                    className="text-chart-3 hover:text-chart-2 underline"
                  >
                    {event.name}
                  </a>
                </span>
                <span className="text-secondary-foreground">
                  Presenters: {presenters}
                </span>
                <span className="text-muted-foreground">{date}</span>
                <p>{description}</p>
              </div>
            </div>
            <Separator className="last:hidden" />
          </>
        ))}
      </CardContent>
    </Card>
  )
}
