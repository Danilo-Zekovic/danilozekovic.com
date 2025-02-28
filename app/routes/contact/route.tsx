import { MetaFunction } from '@remix-run/node'
import { Linkedin, Mail, Users } from 'lucide-react'
import Page from '~/components/Page'
import { GitHub, SocialMedia, X } from '~/components/social-media'

export const meta: MetaFunction = () => {
  return [
    { title: 'Contact | Danilo Zeković' },
    {
      name: 'description',
      content: `Get in touch! I'd love to hear from you. Whether you have a project inquiry, a question, or just want to say hello, feel free to contact me.`,
    },
  ]
}

const Contact = () => {
  return (
    <Page>
      <section>
        <h1>Contact</h1>
        <p>
          Thanks for visiting my site. There are few ways to reach out to me:
        </p>
      </section>
      <section className="mt-6">
        <h2 className="flex items-center gap-2">
          Send me an email <Mail className="size-8" />
        </h2>
        <p>
          If you want to say &quot;hi&quot;, or talk, or elaborate on any of
          your ideas, feel free to reach me at{' '}
          <a
            href={`mailto:${SocialMedia.Email}`}
            title="eMail"
            className="font-bold text-chart-3 hover:text-chart-2 underline"
          >
            danilozeka93@gmail.com
          </a>
        </p>
      </section>
      <section className="mt-6">
        <h2 className="flex items-center gap-2">
          Follow me or chat with me on social media <Users className="size-8" />
        </h2>
        <p>
          You can follow me on social media as well where I occasionally post
          some work and life related info:
        </p>
        <div className="flex justify-around mt-6">
          <a
            href={SocialMedia.X}
            target="_blank"
            rel="noopener noreferrer"
            title="X"
            className="flex flex-col items-center text-chart-3 hover:text-chart-2 underline"
          >
            <X width={'24px'} height={'100%'} />
            <span>X</span>
          </a>
          <a
            href={SocialMedia.LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="flex flex-col items-center text-chart-3 hover:text-chart-2 underline"
          >
            <Linkedin />
            <span>LinkedIn</span>
          </a>
          {/* <a
            href={SocialMedia.Facebook}
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="flex flex-col items-center text-chart-3 hover:text-chart-2 underline"
          >
            <Facebook width={'24px'} height={'100%'} />
            <span>Facebook</span>
          </a> */}
        </div>
      </section>
      <section className="mt-6">
        <h2 className="flex items-center gap-2">
          Checkout my GitHub profile <GitHub className="size-8" />
        </h2>
        <p>
          Due to my work obligations I am not as active as I used to be. But if
          you want to check out my experiments, personal projects or occasional
          open source work feel free to visit my{' '}
          <a
            href={SocialMedia.GitHub}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="font-bold text-chart-3 hover:text-chart-2 underline"
          >
            GitHub profile Danilo-Zekovic
          </a>
        </p>
      </section>
    </Page>
  )
}

export default Contact
