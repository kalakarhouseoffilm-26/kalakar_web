export type Project = {
  id: string
  title: string
  client: string
  category: 'Film & Video' | 'Branding' | 'Design' | 'Marketing'
  year: string
  tagline: string
  description: string
  challenge: string
  solution: string
  deliverables: string[]
  duration?: string
  aspectRatio: string
  accentColor: string
  image: string
}

export const projects: Project[] = [
  {
    id: 'first-fire-anthem',
    title: 'The First Fire',
    client: 'Kalakar Originals',
    category: 'Film & Video',
    year: '2025',
    tagline:
      'Cinematic brand film celebrating the ancient origin of human storytelling.',
    description:
      'A poetic commercial film shot on anamorphic lenses exploring how humanity moved from cave walls to digital screens, capturing the primordial thrill of creating something that lasts.',
    challenge:
      'Translate the raw essence of stone-carving and primitive fire into a sleek, premium media house manifesto.',
    solution:
      'Shot on location across volcanic rock terrain with authentic firelight, custom orchestral score, and vintage optical treatment.',
    deliverables: [
      'Director Cut (120s)',
      'Cinema DCP 4K',
      'Original Score & Sound Design',
      'Social Cutdowns (15s/30s)',
    ],
    duration: '2:14',
    aspectRatio: '16 / 9',
    accentColor: '#E8622C',
    image: '/home_page/section1/layer1.png',
  },
  {
    id: 'totem-identity',
    title: 'Totem & Stone',
    client: 'Aethel Spirits',
    category: 'Branding',
    year: '2025',
    tagline: 'A sculpted brand identity and bespoke tactile packaging system.',
    description:
      'Full visual identity and custom glass bottle emboss design inspired by ancient monolithic totems. Designed to feel carved by hand, engineered for modern retail dominance.',
    challenge:
      'Establish a category-defining identity in a crowded luxury beverage market without resorting to generic gold foil tropes.',
    solution:
      'Engineered a bespoke stone-textured typographic system, monolithic bottle silhouette, and custom hand-stamped label embossing.',
    deliverables: [
      'Brand Identity System',
      'Custom Bottle Design',
      'Embossed Label Collateral',
      'Brand Guidelines (120p)',
    ],
    aspectRatio: '4 / 3',
    accentColor: '#C9B99A',
    image: '/home_page/section2/second__layer.png',
  },
  {
    id: 'malabar-origins',
    title: 'Malabar Roast',
    client: 'Western Ghats Heritage',
    category: 'Film & Video',
    year: '2024',
    tagline:
      'Aerial cinematography and cinematic portraiture through highland mist.',
    description:
      'A documentary-style advertising campaign tracking single-origin coffee farmers across steep cliff plantations, blending aerial drone choreography with intimate macro portraiture.',
    challenge:
      'Deliver emotional authenticity while capturing harsh, high-altitude rainforest weather conditions.',
    solution:
      'High-speed drone passes through mountain mist, natural lighting, and binaural rainforest ambient audio capture.',
    deliverables: [
      'Campaign Hero Film (90s)',
      '35mm Still Photography Suite',
      'Vertical Social Reels (x8)',
      'Print Campaign',
    ],
    duration: '1:45',
    aspectRatio: '16 / 9',
    accentColor: '#4A5D3A',
    image: '/home_page/section5/BACKROUND.png',
  },
  {
    id: 'wild-horizon-campaign',
    title: 'Wild Horizons',
    client: 'Kerala Eco Sanctuary',
    category: 'Marketing',
    year: '2024',
    tagline:
      'High-conversion organic social engine and experiential influencer launch.',
    description:
      'A multi-platform digital rollout that generated over 4.2M organic impressions in 30 days by pairing raw wilderness storytelling with interactive creator expeditions.',
    challenge:
      'Drive direct bookings without paying exorbitant OTA fees or using generic travel stock tropes.',
    solution:
      'Coordinated a 7-day secluded creator residency producing 40+ native short-form assets synced to algorithmic sound trends.',
    deliverables: [
      'Social Strategy',
      'Influencer Creator Kits',
      'Performance Ad Creative',
      'Community Playbook',
    ],
    aspectRatio: '4 / 3',
    accentColor: '#E8622C',
    image: '/home_page/section4/layer1.png',
  },
  {
    id: 'kinetic-totem-motion',
    title: 'Kalaakar Movement',
    client: 'Film Nagar Arts',
    category: 'Design',
    year: '2025',
    tagline: '3D kinetic typography and stone-relief motion identity.',
    description:
      'Procedural motion graphic suite where monolithic glyphs crack, assemble and carve into dynamic 3D screens for film festivals and interactive gallery displays.',
    challenge:
      'Bring static glyphs into fluid 60fps motion while maintaining heavy physical weight and mass.',
    solution:
      'Rigged procedural physics simulations with custom stone fragment particle effects and dynamic shadow mapping.',
    deliverables: [
      'Broadcast Title Package',
      '3D Glyph Rigs',
      'Event Screen Loops',
      'Lottie Web Assets',
    ],
    duration: '0:45',
    aspectRatio: '16 / 9',
    accentColor: '#F5F1E8',
    image: '/home_page/section3/Layer 9.png',
  },
]
