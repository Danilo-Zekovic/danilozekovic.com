import { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node'

import { getDomainUrl } from '~/lib/utils'

// TODO switch to automatic generation of sitemap using @nasa-gcn/remix-seo

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const content = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
      <loc>${getDomainUrl(request)}</loc>
      <priority>0.7</priority>
      </url>
      <url>
      <loc>${getDomainUrl(request)}/about</loc>
      <priority>0.7</priority>
      </url>
      <url>
      <loc>${getDomainUrl(request)}/contact</loc>
      <priority>0.7</priority>
      </url>
      </urlset>
      `

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'UTF-8',
    },
  })
}
