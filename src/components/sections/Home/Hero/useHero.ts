import { site } from '@/data/site'
import { brandImages } from '@/lib/siteImages'

export function useHero() {
  return {
    site,
    sculptorImg: brandImages.sculptorTrans,
    craftSlideImg: brandImages.craft,
  }
}
