export type KalakarImage = {
  src: string
  alt: string
  width: number
  height: number
  cloudId?: string
  priority?: boolean
}
export const cloudName = 'your-cloud-name'
export const brandImages = {
  emblem: {
    src: '/navbar/Logo.png',
    alt: 'KALAKAR tribal caveman filmmaker logo emblem',
    width: 1024,
    height: 1024,
    priority: true,
  },
  heroCover: {
    src: '/home_page/section1/layer1.png',
    alt: 'KALAKAR cinematic hero — caveman filmmaker with vintage camera',
    width: 1938,
    height: 1145,
    priority: true,
  },
  heroCompact: {
    src: '/home_page/section1/layer1.png',
    alt: 'KALAKAR cinematic hero artwork',
    width: 1024,
    height: 575,
    priority: true,
  },
  mark: {
    src: '/navbar/Logo.png',
    alt: 'KALAKAR caveman filmmaker mark',
    width: 1024,
    height: 1024,
    cloudId: 'brand/kalakar-mark',
  },
  artist: {
    src: '/home_page/section5/FINAL LAYER.png',
    alt: 'Kalaakaran Vannallo — The Artist is Here founder story',
    width: 1938,
    height: 1120,
    cloudId: 'brand/artist',
  },
  craft: {
    src: '/home_page/section2/second__layer.png',
    alt: 'Stories that Build Brands — caveman sculpting stone totem',
    width: 1938,
    height: 1120,
    cloudId: 'brand/craft',
  },
  sculptorTrans: {
    src: '/home_page/section2/second__layer.png',
    alt: '3D Caveman sculptor carving stone totem',
    width: 1024,
    height: 469,
  },
  story: {
    src: '/home_page/section4/layer1.png',
    alt: 'Starts With a Story — cave painting ancient rock art',
    width: 1938,
    height: 1120,
    cloudId: 'brand/story',
  },
  services: {
    src: '/home_page/section6/3.png',
    alt: 'KALAKAR services — hanging wooden signage boards',
    width: 1938,
    height: 1120,
    cloudId: 'brand/services',
  },
  vision: {
    src: '/home_page/section3/Layer 9.png',
    alt: 'KALAKAR purpose — Vision and Mission',
    width: 1938,
    height: 1120,
    cloudId: 'brand/vision',
  },
  cavePainting: {
    src: '/home_page/section4/layer1.png',
    alt: 'Warm KALAKAR cave-painting stone wall in firelight',
    width: 1920,
    height: 881,
    cloudId: 'brand/cave-painting',
  },
  caveman: {
    src: '/home_page/section1/layer2.png',
    alt: 'KALAKAR caveman cameraman character',
    width: 737,
    height: 909,
    cloudId: 'brand/camera-caveman',
  },
  jungle: {
    src: '/home_page/section1/layer1.png',
    alt: 'Cinematic jungle cave illuminated by warm firelight',
    width: 1600,
    height: 734,
    cloudId: 'brand/jungle-cave',
  },
  cave: {
    src: '/home_page/section5/BACKROUND.png',
    alt: 'Cinematic KALAKAR cave world',
    width: 1600,
    height: 734,
    cloudId: 'brand/cinematic-cave',
  },
  sculptor: {
    src: '/home_page/section2/second__layer.png',
    alt: 'KALAKAR sculptor character in a cave studio',
    width: 1920,
    height: 881,
    cloudId: 'brand/sculptor-scene',
  },
}
export const artPanels = {
  hero: brandImages.heroCover,
  craft: brandImages.craft,
  story: brandImages.story,
  artist: brandImages.artist,
  services: brandImages.services,
  vision: brandImages.vision,
}
export const foliageImages = [
  '/home_page/section1/leaf1.png',
  '/home_page/section1/leaft2.png',
  '/home_page/section2/third_left_top.png',
]
export const serviceImage = (slug: string): KalakarImage => ({
  src: `/home_page/section6/3.png`,
  alt: `KALAKAR ${slug.replace(/-/g, ' ')} artwork`,
  width: 900,
  height: 900,
  cloudId: `services/${slug}`,
})
