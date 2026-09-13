import { site } from '@/data/site'

export function useLogo() {
  return { name: site.name, href: '/' }
}
