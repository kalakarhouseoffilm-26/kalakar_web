'use client'

import { useCallback, useState } from 'react'
import { site } from '@/data/site'

export type ContactFormData = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>

const initialData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

function validate(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!data.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (data.phone.trim() && !/^[\d+\-\s()]{7,}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (!data.message.trim()) {
    errors.message = 'Please tell us about your project.'
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  return errors
}

function buildWhatsAppUrl(data: ContactFormData): string {
  const lines = [
    '*New KALAKAR inquiry*',
    '',
    `*Name:* ${data.name}`,
    `*Email:* ${data.email}`,
  ]
  if (data.phone) {
    lines.push(`*Phone:* ${data.phone}`)
  }
  if (data.service) {
    lines.push(`*Service:* ${data.service}`)
  }
  lines.push('', `*Message:* ${data.message}`)
  const text = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${site.whatsappRaw}?text=${text}`
}

function buildMailtoUrl(data: ContactFormData): string {
  const subject = encodeURIComponent(`New project inquiry from ${data.name}`)
  const body = encodeURIComponent(
    [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : '',
      data.service ? `Service: ${data.service}` : '',
      '',
      data.message,
    ]
      .filter(Boolean)
      .join('\n')
  )
  return `mailto:${site.email}?subject=${subject}&body=${body}`
}

export function useContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const update = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setData((prev) => ({ ...prev, [field]: value }))
      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev }
          delete next[field]
          return next
        })
      }
    },
    [errors]
  )

  const submit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const validationErrors = validate(data)
      setErrors(validationErrors)

      if (Object.keys(validationErrors).length > 0) {
        return
      }

      const url = buildWhatsAppUrl(data)
      const mailto = buildMailtoUrl(data)

      try {
        window.open(url, '_blank', 'noopener,noreferrer')
      } catch {
        window.location.href = mailto
      }

      setSubmitted(true)
    },
    [data]
  )

  return {
    data,
    errors,
    submitted,
    update,
    submit,
    mailtoUrl: buildMailtoUrl(data),
  }
}
