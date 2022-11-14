export const countriesOfOperation = ['Nigeria', 'Ghana'];

export const suggestNew = [
  {
    title: 'General Business Information',
    label: 'Official Business Name',
    id: 1,
  },
  {
    title: 'General Business Information',
    label: 'Type Of Business',
    id: 2,
    isSelect: true,
    values: ['Restaurant', 'Hotel', 'Attraction', 'Event Organizer'],
    default: 'Restaurant',
  },
  {
    title: 'General Business Information',
    label: 'Owner/Representative Of Business',
    id: 3,
    isSelect: true,
    values: ['CEO', 'Staff'],
    default: 'CEO',
  },
  {
    title: 'General Business Information',
    label: 'Full Name',
    id: 4,
    stepEnd: true,
  },
  // Next Stage
  {
    title: 'Address Information',
    label: 'Country of Business',
    id: 1,
    isSelect: true,
    values: countriesOfOperation,
    default: 'Nigeria',
  },
  {
    title: 'Address Information',
    label: 'City',
    id: 2,
  },
  {
    title: 'Address Information',
    label: 'Street Address',
    id: 3,
  },
  {
    title: 'Address Information',
    label: 'Other Address(If Applicable)',
    id: 4,
    stepEnd: true,
    optional: true,
  },
  // Next Stage
  {
    title: 'Contact Information',
    label: 'Phone Number',
    isPhone: true,
    id: 1,
  },
  {
    title: 'Contact Information',
    label: 'Official Email',
    id: 2,
  },
  {
    title: 'Contact Information',
    label: 'Website(If Applicable)',
    id: 3,
    stepEnd: true,
    finalText: 'Suggest Business',
    optional: true,
  },
];

export const advertise = [
  {
    title: 'Advertise With Us',
    label: 'Company Name',
  },
  {
    title: 'General Business Info',
    label: 'Email',
  },
  {
    title: 'General Business Info',
    label: 'Phone Number',
    isPhone: true,
  },
  {
    title: 'General Business Info',
    label: 'Country',
    isSelect: true,
    values: countriesOfOperation,
    default: 'Nigeria',
  },
  {
    title: 'General Business Info',
    label: 'City',
  },
  {
    title: 'General Business Info',
    label: 'Industry',
    isSelect: true,
    values: ['Restaurant', 'Hotel', 'Attraction', 'Event Organizer', 'Other'],
    default: 'Restaurant',
    nextDependent: 'Other',
  },
  {
    title: 'General Business Info',
    label: 'If other please state industry',
    optional: true,
  },
  {
    title: 'General Business Info',
    label: 'Product service or experience you want to promote',
  },

  {
    title: 'General Business Info',
    label: 'Advertising budget in usd',
    isSelect: true,
    values: ['$0 - $1000', '$1000 - $10000', '>$10000'],
    default: '$1000 - $10000',
    finalText: 'Advertise with us',
    hasNext: false,
  },
];

export const claim = [
  {
    title: 'Claim Your Business',
    label: 'Official Business Name',
  },
  {
    title: 'General Business Info',
    label: 'Relationship with business',
    isSelect: true,
    values: ['CEO', 'Growth', 'Other'],
    default: 'CEO',
  },
  {
    title: 'General Business Info',
    label: 'Full Name',
  },
  {
    title: 'General Business Info',
    label: 'Country',
    isSelect: true,
    values: countriesOfOperation,
    default: 'Nigeria',
  },
  {
    title: 'General Business Info',
    label: 'City',
  },
  {
    title: 'General Business Info',
    label: 'Email',
  },
  {
    title: 'General Business Info',
    label: 'Phone Number',
    isPhone: true,
  },
  {
    title: 'General Business Info',
    label: 'How did you hear about business on highTable',
    isSelect: true,
    values: ['Twitter', 'LinkedIn', 'Search Engine', 'Other'],
    default: 'Search Engine',
    hasNext: false,
    finalText: 'Claim your Business',
  },
];
