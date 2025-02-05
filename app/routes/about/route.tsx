import { MetaFunction } from '@remix-run/node'
import Page from '~/components/Page'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import Education from './about.education'
import Speaker from './about.speaker'
import Hobbies from './about.hobbies'
import Experience from './about.experience'

import profile from '~/images/portrait.jpeg'

export const meta: MetaFunction = () => {
  return [
    { title: 'About | Danilo Zeković' },
    {
      name: 'description',
      content:
        'A glimpse into my world. Learn about my expertise, my philosophy, and what makes me unique.',
    },
  ]
}

const About = () => {
  return (
    <Page>
      <section>
        <h1>About</h1>
        <h4 className="mt-6">Hey, I&apos;m Danilo Zekovic</h4>
        <p>
          I am a full stack software engineer, from Novi Sad, Serbia. To some I
          am also known by my nick name Zeka (which means rabbit in Serbian).
        </p>
      </section>
      <section className="mt-6">
        <h2>Long story short</h2>
        <p>
          Born and raised in Novi Sad, Serbia. I spent most of my childhood
          running around the banks of the Danube River and exploring Fruška Gora
          mountain. From the age of seven, I started playing basketball, which
          set me on an unexpected path and played a key role in my future. So,
          the young Danilo was dedicated to both studying and playing basketball
          (even winning a Junior Championship of Serbia), until a significant
          change occurred. Combining my basketball skills with good grades, I
          crossed the Atlantic to study at Saint Joseph&apos;s College in
          Rensselaer, Indiana, where I successfully graduated. Upon returning to
          Serbia, I faced new professional challenges.
        </p>
      </section>
      <section className="mt-6">
        <h2>Software development</h2>
        <p>
          While in college, I developed a love for writing software,
          particularly web applications. So it&apos;s no surprise that I&apos;ve
          been developing web apps since the start of my professional career. Of
          course, the tech stacks I&apos;ve used have evolved, transitioning
          from the initial Angular and simple Express.js to React and NestJS
          today. One thing&apos;s for sure: whether by choice or circumstance,
          JavaScript has been a constant companion throughout my developer
          journey. Currently, I primarily use TypeScript, React, and NestJS,
          along with the necessary supporting technologies to bring applications
          to life.
        </p>
        <p>
          My professional journey has been a rewarding one, marked by
          collaborations with a few exceptional companies. I&apos;ve perfected
          my skills at Compass Holding and NeonCat, and I&apos;m currently
          fortunate to be contributing to the success of Symphony, where I
          previously had the pleasure of working as well.
        </p>
      </section>
      <section className="mt-6 flex justify-center w-full">
        <Tabs
          defaultValue="experience"
          className="max-w-[800px] flex flex-col "
        >
          <TabsList className="m-auto">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="speaker">Speaker</TabsTrigger>
            <TabsTrigger value="hobbies">Hobbies</TabsTrigger>
          </TabsList>
          <TabsContent value="experience">
            <Experience />
          </TabsContent>
          <TabsContent value="education">
            <Education />
          </TabsContent>
          <TabsContent value="speaker">
            <Speaker />
          </TabsContent>
          <TabsContent value="hobbies">
            <Hobbies />
          </TabsContent>
        </Tabs>
      </section>
      <section className="mt-6 flex justify-center w-full">
        <div className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden">
          <img
            alt="Danilo Zekovic profile"
            src={profile}
            className="rounded-full object-cover object-top"
            style={{ objectPosition: 'center -40px' }}
          />
        </div>
      </section>
    </Page>
  )
}

export default About
