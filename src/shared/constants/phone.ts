const PHONE_RAW = '+79629317371';

export const phone = {
  href: PHONE_RAW,
  
  // Для отображения: +7 (962) 931-73-71
  display: PHONE_RAW.replace(/^(\+7)(\d{3})(\d{3})(\d{2})(\d{2})$/, '$1 ($2) $3-$4-$5'),
  
  // Для schema.org: +7-962-931-73-71
  schema: PHONE_RAW.replace(/^(\+7)(\d{3})(\d{3})(\d{2})(\d{2})$/, '$1-$2-$3-$4-$5'),
}
