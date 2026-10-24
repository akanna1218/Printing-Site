import { env } from 'node:process'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const repository = env.GITHUB_REPOSITORY
const [owner, name] = repository?.split('/') ?? []
const base =
  owner && name && name.toLowerCase() !== `${owner.toLowerCase()}.github.io`
    ? `/${name}/`
    : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
