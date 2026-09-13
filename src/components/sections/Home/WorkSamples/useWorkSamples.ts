'use client'

import { useState, useMemo } from 'react'
import { projects, Project } from '@/data/projects'

export const categories = [
  'All Work',
  'Film & Video',
  'Branding',
  'Design',
  'Marketing',
] as const

export type CategoryFilter = (typeof categories)[number]

export function useWorkSamples() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryFilter>('All Work')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Work') return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const openModal = (project: Project) => {
    setSelectedProject(project)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden'
    }
  }

  const closeModal = () => {
    setSelectedProject(null)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = ''
    }
  }

  return {
    categories,
    activeCategory,
    setActiveCategory,
    filteredProjects,
    selectedProject,
    openModal,
    closeModal,
  }
}
