/**
 * Every photograph used by the redesigned home sections, in one place.
 *
 * To swap a photo: drop the file in /public/images (or /public/images/editorial)
 * and change the path here. Photos shot on a plain, light background work best:
 * every frame uses the same warm neutral backdrop and `mix-blend-mode: multiply`,
 * so a white studio background melts into it and all cards look consistent.
 *
 * `pos` is the CSS object-position, used to crop in on the subject.
 */
export const SERVICE_IMAGE = {
  '/services/renovation-services': { src: '/images/renovation.webp', pos: '50% 50%' },
  '/services/ac-services': { src: '/images/08.jpg', pos: '60% 40%' },
  '/services/electrician-services': { src: '/images/04.jpg', pos: '45% 40%' },
  '/services/plumbing-services': { src: '/images/plumbing_service.webp', pos: '50% 50%' },
  '/services/painting-services': { src: '/images/painting_service.jpg', pos: '40% 50%' },
  '/services/false-ceiling-services': { src: '/images/ceiling_service.jpg', pos: '50% 60%' },
  '/services/carpentry-services': { src: '/images/carpentary_service.jpg', pos: '50% 50%' },
  '/services/floor-wall-tiling': { src: '/images/tile1.webp', pos: '50% 50%' },
  '/services/building-cleaning-services': { src: '/images/cleaning_service.jpg', pos: '50% 55%' },
  '/services/home-appliance-services': { src: '/images/appliance_service.jpg', pos: '45% 50%' },
}

export const ABOUT_IMAGES = {
  main: { src: '/images/08.jpg', pos: '58% 40%' },
  inset: { src: '/images/04.jpg', pos: '45% 40%' },
}

export const CTA_IMAGE = { src: '/images/ceiling_service.jpg', pos: '50% 55%' }

/** Portfolio uses data/gallery.json images; these are crop hints per index. */
export const PORTFOLIO_POS = ['50% 50%', '50% 50%', '50% 55%', '50% 30%', '50% 50%', '50% 50%', '55% 40%']
