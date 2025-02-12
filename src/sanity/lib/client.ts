import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
<<<<<<< HEAD
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
=======
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.SANITY_API_TOKEN,
>>>>>>> 80db49b (done)
})
