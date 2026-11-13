/**
 * Business details – Kareem Parker, masonry & concrete repair, Hamilton, Ontario.
 * Source: client-supplied ad text, phone and address (Kijiji profile: https://www.kijiji.ca/o-profile/1044358850/1).
 * No business name was given – "Kareem Parker Masonry" is used. CONFIRM. Edit here, then `npm run build` and `node flatten.js`.
 */
module.exports = {
  name: 'Kareem Parker Masonry',
  shortName: 'Kareem Parker Masonry',
  brandSub: 'Brick, Concrete & Masonry Repair · Hamilton',
  lang: 'en-CA',
  locale: 'en_CA',
  phoneFormat: 'US', // North American numbers
  url: 'https://www.kareemparkermasonry.ca', // placeholder domain – CONFIRM
  area: 'Hamilton and surrounding area',
  phone: '(289) 816-1525',
  phoneIntl: '+12898161525',
  phoneHref: 'tel:+12898161525',
  whatsapp: '',
  whatsappNumber: '12898161525', // used for the "send by WhatsApp / text" fallback on the quote form
  address: { street: '232 Tragina Ave S', city: 'Hamilton', region: 'ON', postcode: 'L8K 2Z8', country: 'CA' },
  addressLine: 'Hamilton, Ontario',
  fullAddress: '232 Tragina Ave S, Hamilton, ON L8K 2Z8',
  mapQuery: '232 Tragina Ave S, Hamilton, ON L8K 2Z8',
  yell: 'https://www.kijiji.ca/o-profile/1044358850/1',
  reviewSiteName: 'Kijiji',
  hours: [],
  openFrom: null, openTo: null,
  hoursShort: '',
  hoursLabel: '',
  openingHoursSchema: '',
  rating: null,
  reviews: [],
  contactName: 'Kareem',
  schemaType: 'HomeAndConstructionBusiness',
  schemaDescription: 'Masonry and concrete repair in Hamilton, Ontario: brick repair and repointing, concrete crack repair, foundation cracks and parging, chimney repair, steps and porches, and all masonry repairs. Works with your budget, with full clean-up.',
  footerAbout: 'Brick, concrete and masonry repairs in Hamilton, done properly and cleaned up afterwards. Tell Kareem your budget and he’ll work with it.',
  ctaTitle: 'Cracked brick or concrete?',
  ctaText: 'Call or text Kareem with a photo of the damage. He works with your budget.',
  ctaButton: 'Request an estimate',
  headerCta: 'Get an estimate',
  manifestShort: 'KP Masonry',
  license: '',
  nav: { services: 'Services', about: 'About', portfolio: 'Gallery' },
  email: '', // no email supplied – the form opens WhatsApp / text message instead
  formEndpoint: null,
  socials: [],
};
if (!module.exports.formEndpoint && module.exports.email) {
  module.exports.formEndpoint = 'https://formsubmit.co/ajax/' + module.exports.email;
}
