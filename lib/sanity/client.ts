import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'x0kdvbds',
  dataset: 'production',
  apiVersion: '2024-10-18',
  useCdn: false, // Set to false for local development
  token: process.env.SANITY_API_TOKEN,
});

