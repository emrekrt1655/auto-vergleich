import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "de", "tr"],

  defaultLocale: "de",

  localePrefix: "always" 
});

export const config = {
  matcher: ["/", "/(de|en|tr)/:path*"]
};