/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'images.wikidexcdn.net', 'projectpokemon.org']
  }
}

module.exports = nextConfig