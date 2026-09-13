import { services } from '@/data/services'
import { artPanels } from '@/lib/siteImages'

export function useServicesGrid() {
  return { services, image: artPanels.services }
}
