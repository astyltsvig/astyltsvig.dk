import type { ImageMetadata } from 'astro';
import mallardLogo from '~/assets/clients/mallard.png';
import cpofLogo from '~/assets/clients/care-pension-forsikring.png';
import securelifeLogo from '~/assets/clients/securelife.png';
import cuaLogo from '~/assets/clients/cycling-without-age.png';
import ddlLogo from '~/assets/clients/ddl.png';
import df1866Logo from '~/assets/clients/df1866-lockup.png';
import fspLogo from '~/assets/clients/festival-sans-pression-lockup.png';
import book2goLogo from '~/assets/clients/book2go.png';
import smartlinjenLogo from '~/assets/clients/smartlinjen.png';
import matematikKlarLogo from '~/assets/clients/matematik-klar.png';
import showsCalendarLogo from '~/assets/clients/shows-calendar.png';

/* Listings always show the client's logo for a uniform look —
   screenshots live on the case pages themselves. */
export const caseLogos: Record<string, ImageMetadata> = {
  mallard: mallardLogo,
  cpof: cpofLogo,
  securelife: securelifeLogo,
  'cycling-without-age': cuaLogo,
  'ddl-tegnsprogspakken': ddlLogo,
  df1866: df1866Logo,
  'festival-sans-pression': fspLogo,
  book2go: book2goLogo,
  smartlinjen: smartlinjenLogo,
  'matematik-klar': matematikKlarLogo,
  'shows-calendar': showsCalendarLogo,
};
