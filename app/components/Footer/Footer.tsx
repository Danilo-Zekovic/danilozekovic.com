import { Linkedin, Mail } from 'lucide-react'

import { Facebook, GitHub, SocialMedia, X } from '@/components/social-media'

export default function Footer() {
  return (
    <footer className="bg-ring text-white py-4">
      <div className="container mx-auto text-center max-w-[800px]">
        <p>Copyright &copy; {new Date().getFullYear()} Danilo Zeković</p>

        <div className="flex justify-center gap-2 mt-2">
          <a
            href={`mailto:${SocialMedia.Email}`}
            title="eMail"
            className="hover:text-chart-2"
          >
            <Mail />
          </a>
          <a
            href={SocialMedia.GitHub}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="hover:text-chart-2"
          >
            <GitHub width={'24px'} height={'100%'} />
          </a>
          <a
            href={SocialMedia.X}
            target="_blank"
            rel="noopener noreferrer"
            title="X"
            className="hover:text-chart-2"
          >
            <X width={'24px'} height={'100%'} />
          </a>
          <a
            href={SocialMedia.LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="hover:text-chart-2"
          >
            <Linkedin />
          </a>
          <a
            href={SocialMedia.Facebook}
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="hover:text-chart-2"
          >
            <Facebook width={'24px'} height={'100%'} />
          </a>
        </div>
      </div>
    </footer>
  )
}
