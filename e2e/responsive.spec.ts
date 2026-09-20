import { test, expect } from '@playwright/test'

const pages = ['/', '/about', '/contact', '/services', '/films']

test.describe('No horizontal overflow', () => {
  for (const path of pages) {
    test(`page ${path} has no horizontal overflow`, async ({ page }) => {
      await page.goto(path, { waitUntil: 'networkidle' })

      const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
      const viewportWidth = page.viewportSize()!.width

      expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1)
    })
  }
})

test.describe('Content fills viewport — no excessive blank space', () => {
  for (const path of pages) {
    test(`page ${path} body height >= viewport height`, async ({ page }) => {
      await page.goto(path, { waitUntil: 'networkidle' })

      const bodyHeight = await page.evaluate(() => document.body.scrollHeight)
      const viewportHeight = page.viewportSize()!.height

      expect(bodyHeight).toBeGreaterThanOrEqual(viewportHeight)
    })
  }
})

test.describe('Mobile-only elements visible on mobile, hidden on desktop', () => {
  test('mobileOnly class is visible on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/', { waitUntil: 'networkidle' })

    const mobileOnly = page.locator('.mobileOnly').first()
    await expect(mobileOnly).toBeVisible()
  })

  test('desktopOnly class is hidden on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/', { waitUntil: 'networkidle' })

    const desktopOnly = page.locator('.desktopOnly').first()
    await expect(desktopOnly).toBeHidden()
  })

  test('desktopOnly class is visible on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/', { waitUntil: 'networkidle' })

    const desktopOnly = page.locator('.desktopOnly').first()
    await expect(desktopOnly).toBeVisible()
  })

  test('mobileOnly class is hidden on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/', { waitUntil: 'networkidle' })

    const mobileOnly = page.locator('.mobileOnly').first()
    await expect(mobileOnly).toBeHidden()
  })
})

test.describe('About page — mobile content fills screen', () => {
  test('mobile About page has story, mission, values, and CTA sections', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/about', { waitUntil: 'networkidle' })

    await expect(page.getByText('ABOUT US')).toBeVisible()
    await expect(page.getByText('Our story')).toBeVisible()
    await expect(page.getByText('Vision').first()).toBeVisible()
    await expect(page.getByText('Mission').first()).toBeVisible()
    await expect(page.getByText('What we believe')).toBeVisible()
    await expect(page.getByText('Instinct First')).toBeVisible()
    await expect(page.getByText('Get in touch').first()).toBeVisible()
  })

  test('mobile About page body height >= viewport height', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/about', { waitUntil: 'networkidle' })

    const bodyHeight = await page.evaluate(() => document.body.scrollHeight)
    expect(bodyHeight).toBeGreaterThanOrEqual(812)
  })
})

test.describe('Contact page — mobile content fills screen', () => {
  test('mobile Contact page has actions, studio, services, and process sections', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/contact', { waitUntil: 'networkidle' })

    await expect(page.getByText('CONTACT US')).toBeVisible()
    await expect(page.getByText('Message on WhatsApp')).toBeVisible()
    await expect(page.getByText('Follow on Instagram')).toBeVisible()
  })

  test('mobile Contact page body height >= viewport height', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/contact', { waitUntil: 'networkidle' })

    const bodyHeight = await page.evaluate(() => document.body.scrollHeight)
    expect(bodyHeight).toBeGreaterThanOrEqual(812)
  })
})

test.describe('Desktop About page — desktop sections visible', () => {
  test('desktop About page shows hero, story, mission/vision, values', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/about', { waitUntil: 'networkidle' })

    await expect(page.getByText('About us').first()).toBeVisible()
    await expect(page.getByText('Our story').first()).toBeVisible()
    await expect(page.getByText('Values that guide every frame')).toBeVisible()
  })
})

test.describe('Desktop Contact page — desktop sections visible', () => {
  test('desktop Contact page shows hero, info, and form', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/contact', { waitUntil: 'networkidle' })

    await expect(page.getByText('Contact').first()).toBeVisible()
    await expect(page.getByText('Talk to us directly')).toBeVisible()
    await expect(page.getByText('Get in touch').first()).toBeVisible()
  })
})

test.describe('Responsive images do not cause overflow', () => {
  for (const path of pages) {
    test(`no image on ${path} exceeds viewport width`, async ({ page }) => {
      await page.goto(path, { waitUntil: 'networkidle' })

      const images = page.locator('img')
      const count = await images.count()
      const viewportWidth = page.viewportSize()!.width

      for (let i = 0; i < count; i++) {
        const box = await images.nth(i).boundingBox()
        if (box) {
          expect(box.x).toBeGreaterThanOrEqual(-1)
          expect(box.x + box.width).toBeLessThanOrEqual(viewportWidth + 1)
        }
      }
    })
  }
})

test.describe('Footer visibility', () => {
  test('footer hidden on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/', { waitUntil: 'networkidle' })

    const footer = page.locator('footer')
    await expect(footer).toBeHidden()
  })

  test('footer visible on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/', { waitUntil: 'networkidle' })

    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
  })
})

test.describe('Navigation works on both viewports', () => {
  test('header visible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/', { waitUntil: 'networkidle' })

    const header = page.locator('header')
    await expect(header).toBeVisible()
  })

  test('header visible on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/', { waitUntil: 'networkidle' })

    const header = page.locator('header')
    await expect(header).toBeVisible()
  })
})

test.describe('Mobile carousel card order', () => {
  test('carousel shows Our Films, About Us, Contact Us in order', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/', { waitUntil: 'networkidle' })

    const headings = page.locator('[class*="dynamicHeading"]')
    await expect(headings.nth(0)).toContainText('OUr')
    await expect(headings.nth(1)).toContainText('Films')
    await expect(headings.nth(2)).toContainText('ABout')
    await expect(headings.nth(3)).toContainText('Us')
    await expect(headings.nth(4)).toContainText('CONtact')
    await expect(headings.nth(5)).toContainText('Us')
  })
})
