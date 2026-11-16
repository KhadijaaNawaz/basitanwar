/**
 * All home-page copy, links and tool choices live here, so text and the
 * tool shown for each service/step can be changed without touching scene code.
 * Tool names are keys of TOOLS in ./Tools.js.
 */

export const PHONE = { href: 'tel:+971524052485', label: '+971 52 405 2485' }

export const HERO_COPY = {
  sub: 'Expert technicians across Dubai for air conditioning, renovation, electrical, plumbing and finishing work — booked when it suits you, priced with no surprises.',
}

export const INTRO = {
  eyebrow: 'Basat Anwer Technical Services LLC',
  statement:
    'One team of engineers and skilled technicians keeping Dubai homes comfortable, safe and running.',
  copy: 'We are one of the leading maintenance service providers in the Emirate of Dubai. We are constantly working to improve delivery performance and customer satisfaction, because we care about our clients.',
  founder: { name: 'Muhammad Basat', role: 'Founder and CEO', img: '/images/basat.jpg' },
}

export const STATS = [
  { value: '10+', label: 'Years serving Dubai' },
  { value: '10', label: 'Specialist services' },
  { value: '24/7', label: 'Emergency callout' },
  { value: '100%', label: 'Transparent pricing' },
]

/** One tool per service. Keyed by the service page link. */
export const SERVICE_TOOL = {
  '/services/renovation-services': 'toolbox',
  '/services/ac-services': 'ac',
  '/services/electrician-services': 'bulb',
  '/services/plumbing-services': 'pipe',
  '/services/painting-services': 'roller',
  '/services/false-ceiling-services': 'drill',
  '/services/carpentry-services': 'hammer',
  '/services/floor-wall-tiling': 'trowel',
  '/services/building-cleaning-services': 'brush',
  '/services/home-appliance-services': 'wrench',
}

export const TRANSFORMATION = {
  eyebrow: 'The Transformation',
  title: 'From bare site to finished room',
  desc: 'A living room taken from dust sheets and exposed ceiling to a finished space — the kind of result we deliver across Dubai.',
  label: 'Watch the transformation',
}

export const PROCESS = {
  eyebrow: 'Solutions Roadmap',
  title: 'How It Works',
  intro:
    'Explore our streamlined process, guiding you from consultation to completion with clarity and efficiency.',
  steps: [
    {
      num: '01',
      title: 'Book',
      tool: 'toolbox',
      desc: 'Tell us what needs doing by phone, WhatsApp or the contact form. We confirm scope and a time that suits you.',
    },
    {
      num: '02',
      title: 'Assign',
      tool: 'wrench',
      desc: 'We match the job to the right specialist from our team and give you a clear, itemised price before work starts.',
    },
    {
      num: '03',
      title: 'Completion',
      tool: 'drill',
      desc: 'Our technicians carry out the work to schedule, keep the site clean, and walk you through the result.',
    },
    {
      num: '04',
      title: 'Review',
      tool: 'roller',
      desc: 'We check the finish with you and stay available afterwards — the relationship does not end at the invoice.',
    },
  ],
}

export const WHY = {
  eyebrow: 'Main Highlights',
  title: 'Why Choose Us',
  items: [
    {
      tool: 'toolbox',
      title: 'One team, every trade',
      desc: 'AC, electrical, plumbing, painting, carpentry, tiling and renovation handled by specialists from the same team, so you are not chasing six contractors.',
    },
    {
      tool: 'trowel',
      title: 'A price before work starts',
      desc: 'We match the job to the right specialist and give you a clear, itemised price up front. No obligation, no hidden fees.',
    },
    {
      tool: 'bulb',
      title: 'Always reachable',
      desc: 'Phone, WhatsApp or the contact form. Our 24/7 emergency callout means a fault at night is not left until morning.',
    },
    {
      tool: 'brush',
      title: 'Clean, on schedule, checked with you',
      desc: 'Our technicians work to schedule, keep the site clean, and walk you through the finished result before we leave.',
    },
  ],
}

export const EMERGENCY = {
  eyebrow: '24/7 Emergency Callout',
  title: 'Leak, power fault or AC down?',
  desc: 'Call us directly. A specialist from our team will get to you quickly, with a clear price before any work starts.',
  video: '/vedios/faq.mp4',
  videoLabel: 'Technician adjusting a plumbing fixture',
}

export const CTA = {
  title: 'Ready to start your project?',
  desc: 'Tell us what needs doing and we will come back with a clear scope and an itemised price — no obligation, no hidden fees.',
}

/**
 * Lottie files in public/json/brand (recoloured to the site palette by
 * tools/recolor-lottie.py from the originals in public/json). Swap a file
 * here to change an animation. All of them loop continuously.
 */
export const LOTTIE = {
  gears: '/json/brand/gears.json', // intro
  steps: '/json/brand/steps.json', // process
  clock: '/json/brand/clock.json', // emergency
  clockGold: '/json/brand/clock-gold.json', // closing CTA, no background
  support: '/json/brand/support.json', // reviews
}
