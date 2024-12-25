import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

// Define the static parameters to generate
export async function generateStaticParams() {
  return [
    {
      tool: 'tool1', // Example tool, replace it with your actual dynamic values
    },
    {
      tool: 'tool2', // Example tool
    },
    // Add more static tool routes as needed
  ]
}

export default function StudioPage() {
  return <NextStudio config={config} />
}
