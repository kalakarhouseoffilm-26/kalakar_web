export function useSectionHeading(title: string, subtitle?: string) {
  const id = title.toLowerCase().replace(/\s+/g, '-')
  return {
    id,
    subtitleId: subtitle ? `${id}-subtitle` : undefined,
  }
}
