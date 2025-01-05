import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Danilo Zeković' },
    {
      name: 'description',
      content:
        'Discover Danilo Zeković - Software Engineer. Explore my work, learn about my services, and get in touch.',
    },
  ]
}

export default function Index() {
  return (
    <div className="container mx-auto flex items-center justify-between px-4 py-3">
      Home
      <div className="flex flex-wrap w-100 text-red-700">
        <div className="h-20 w-40 bg-background">background</div>
        <div className="h-20 w-40 bg-foreground">foreground</div>
        <div className="h-20 w-40 bg-card">card</div>
        <div className="h-20 w-40 bg-card-foreground">card-foreground</div>
        <div className="h-20 w-40 bg-popover">popover</div>
        <div className="h-20 w-40 bg-popover-foreground">
          popover-foreground
        </div>
        <div className="h-20 w-40 bg-primary">primary</div>
        <div className="h-20 w-40 bg-primary-foreground">
          primary-foreground
        </div>
        <div className="h-20 w-40 bg-secondary">secondary</div>
        <div className="h-20 w-40 bg-secondary-foreground">
          secondary-foreground
        </div>
        <div className="h-20 w-40 bg-muted">muted</div>
        <div className="h-20 w-40 bg-muted-foreground">muted-foreground</div>
        <div className="h-20 w-40 bg-accent">accent</div>
        <div className="h-20 w-40 bg-accent-foreground">accent-foreground</div>
        <div className="h-20 w-40 bg-destructive">destructive</div>
        <div className="h-20 w-40 bg-destructive-foreground">
          destructive-foreground
        </div>
        <div className="h-20 w-40 bg-border">border</div>
        <div className="h-20 w-40 bg-input">input</div>
        <div className="h-20 w-40 bg-ring">ring</div>
        <div className="h-20 w-40 bg-chart-1">chart-1</div>
        <div className="h-20 w-40 bg-chart-2">chart-2</div>
        <div className="h-20 w-40 bg-chart-3">chart-3</div>
        <div className="h-20 w-40 bg-chart-4">chart-4</div>
        <div className="h-20 w-40 bg-chart-5">chart-5</div>
        <div className="h-20 w-40 bg-sidebar-background">
          sidebar-background
        </div>
        <div className="h-20 w-40 bg-sidebar-foreground">
          sidebar-foreground
        </div>
        <div className="h-20 w-40 bg-sidebar-primary">sidebar-primary</div>
        <div className="h-20 w-40 bg-sidebar-primary-foreground">
          sidebar-primary-foreground
        </div>
        <div className="h-20 w-40 bg-sidebar-accent"></div>
        <div className="h-20 w-40 bg-sidebar-accent-foreground"></div>
        <div className="h-20 w-40 bg-sidebar-border">sidebar-border</div>
        <div className="h-20 w-40 bg-sidebar-ring">sidebar-ring</div>
      </div>
    </div>
  )
}
