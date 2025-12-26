export interface LinkAction {
  label: string;
  href: string;
}

export interface HeroCta {
  primary?: LinkAction;
  secondary?: LinkAction;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export interface StatItem {
  label: string;
  value: string;
  detail?: string;
}

export interface ContactField {
  label: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
}

export interface ContactForm {
  title: string;
  description: string;
  fields: ReadonlyArray<ContactField>;
  submitLabel: string;
  note?: string;
}
