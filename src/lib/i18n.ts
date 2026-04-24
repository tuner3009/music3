export const locales = ['en','ro','hu','bg','de','fr','es','it','nl','pl','tr','ru','uk','ar','hi','zh','ja','ko','id','vi','th'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
