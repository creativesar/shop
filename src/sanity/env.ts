<<<<<<< HEAD
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-17'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
=======
import { createClient } from '@sanity/client';

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-10';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'production'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'nufncm7t'
);

export const token = "skVrMOAlQkhOCMKWEYcSCC0cG9b58fNVjzVFEzuLaKj1MLIaXxFOzRYKDCXiv9PYrzvS9U055q911jAZIjxLs64Hp50MRHRNjQBzIRWlvifNRnprpVGiDdsuJQZFXWX11EezZw69qJ3yBZgeFGQG69fHjECWcpeBpbBAFOLcQLYI4sUjhb3P";

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

export const client = createClient({
  projectId,
  dataset,
  useCdn: false, // Disable caching for real-time updates
  token,
  apiVersion,
});
>>>>>>> 80db49b (done)
