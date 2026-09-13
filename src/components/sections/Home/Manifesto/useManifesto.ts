import { artPanels } from '@/lib/siteImages'

export function useManifesto() {
  return {
    paragraphs: [
      'KALAKAR began with the same spark every creative feels on the first day of college — the belief that ideas can become something real.',
      'We built our identity around the things we love most: designing, filming, editing and bringing ideas to life for brands that want to be remembered.',
      'Our purpose is simple: solve problems creatively. Every project is a chance to turn raw instinct into polished work that connects with people.',
    ],
    artPanel: artPanels.story,
  }
}
