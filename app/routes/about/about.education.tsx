import { GraduationCap } from 'lucide-react'
import { Card, CardContent } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'

const educationItemStyle = 'flex flex-col md:flex-row gap-0 md:gap-4 m-4 '

const educationInfoStyle = 'flex flex-col w-full'

export default function Education() {
  return (
    <Card>
      <CardContent className="pt-6 max-w-[625px]">
        <div className={educationItemStyle}>
          <GraduationCap className="size-24" />
          <div className={educationInfoStyle}>
            <h4 className="text-lg font-semibold mb-2">
              Faculty of Technical Sciences, University of Novi Sad
            </h4>
            <span className="text-secondary-foreground">
              Master&apos;s degree, Computer Software Engineer
            </span>
            <span className="text-muted-foreground">2017 - 2019</span>
            <span className="text-secondary-foreground">Grade: 9.86/10.0</span>
          </div>
        </div>
        <Separator />
        <div className={educationItemStyle}>
          <GraduationCap className="size-24" />
          <div className={educationInfoStyle}>
            <h4 className="text-lg font-semibold mb-2">
              Saint Joseph&apos;s College
            </h4>
            <span className="text-secondary-foreground">
              Bachelors&apos;s degree, Computer Science
            </span>
            <span className="text-muted-foreground">2012 - 2016</span>
            <span className="text-secondary-foreground">Grade: 3.92/4.0</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
