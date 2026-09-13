import type { ComponentType, SVGProps } from 'react'
import { BrandingIcon } from './BrandingIcon'
import { CreativeProductionIcon } from './CreativeProductionIcon'
import { MarketingIcon } from './MarketingIcon'
import { DesignIcon } from './DesignIcon'
import { StrategicIcon } from './StrategicIcon'
import { CreativeIcon } from './CreativeIcon'
import { CinematicIcon } from './CinematicIcon'
import { PartnershipIcon } from './PartnershipIcon'

export { BrandingIcon } from './BrandingIcon'
export { CreativeProductionIcon } from './CreativeProductionIcon'
export { MarketingIcon } from './MarketingIcon'
export { DesignIcon } from './DesignIcon'
export { StrategicIcon } from './StrategicIcon'
export { CreativeIcon } from './CreativeIcon'
export { CinematicIcon } from './CinematicIcon'
export { PartnershipIcon } from './PartnershipIcon'

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export type ServiceIconId =
  'branding' | 'creative-production' | 'marketing' | 'design'

export type PillarIconId =
  'strategic' | 'creative' | 'cinematic' | 'partnership'

export const serviceIcons: Record<ServiceIconId, IconComponent> = {
  branding: BrandingIcon,
  'creative-production': CreativeProductionIcon,
  marketing: MarketingIcon,
  design: DesignIcon,
}

export const pillarIcons: Record<PillarIconId, IconComponent> = {
  strategic: StrategicIcon,
  creative: CreativeIcon,
  cinematic: CinematicIcon,
  partnership: PartnershipIcon,
}
