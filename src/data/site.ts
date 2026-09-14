export type ContactChannel = {
  label: string
  value: string
  href: string
  action: string
}

export type SocialLink = {
  label: string
  href: string
}

export const site = {
  name: 'KALAKAR',
  tagline: 'Stories that Build Brands.',
  description:
    'KALAKAR is an Indian creative agency solving problems through branding, cinematic content and innovative marketing. We transform businesses into unforgettable brands.',
  url: 'https://kalakar.studio',
  email: 'hello@kalakar.studio',
  phone: '+91 9633328074',
  phoneRaw: '+919633328074',
  whatsapp: '+91 9633328074',
  whatsappRaw: '+91 9633328074',
  address: '12 Reel Street, Film Nagar, Mumbai 400001, India',
  companyName: 'KALAKAR Media Pvt. Ltd.',
  copyright: `© ${new Date().getFullYear()} KALAKAR Media Pvt. Ltd.`,
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
  adobePortfolioUrl:
    process.env.NEXT_PUBLIC_ADOBE_PORTFOLIO_URL ||
    'https://kalakarhouseoffilm.myportfolio.com/',
  whatsappUrl:
    'https://wa.me/9633328074?text=' +
    encodeURIComponent(
      "Hi KALAKAR! I'd like to discuss a project with your agency."
    ),
  instagramUrl:
    'https://www.instagram.com/p/Da3F-XngdKI/?stkn=MXJhaGRtOXV3YThiNQ==',
  socials: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/p/Da3F-XngdKI/?stkn=MXJhaGRtOXV3YThiNQ==',
    },
    { label: 'WhatsApp', href: 'https://wa.me/9633328074' },
    { label: 'Portfolio', href: 'https://kalakarhouseoffilm.myportfolio.com/' },
    { label: 'YouTube', href: 'https://youtube.com/@kalakar' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/kalakar' },
  ],
}

export const contactActions: ContactChannel[] = [
  {
    label: 'WhatsApp',
    value: site.whatsapp,
    href: site.whatsappUrl,
    action: 'Message on WhatsApp',
  },
  {
    label: 'Instagram',
    value: '@kalakar',
    href: site.instagramUrl,
    action: 'Follow on Instagram',
  },
  {
    label: 'Phone',
    value: site.phone,
    href: `tel:${site.phoneRaw}`,
    action: 'Call',
  },
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    action: 'Email',
  },
]
