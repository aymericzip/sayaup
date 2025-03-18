import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import {
  Language,
  defaultLanguage,
  getlanguagePathFrom,
  languages,
} from "./i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: [
    "/((?!api|_next/static|_next/image|objects|assets|favicon.ico|robots.txt|manifest.json|sw.js).*)",
  ],
};

const cookieName = "i18next";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.href.replace(req.nextUrl.origin, "");
  const langTargeted = pathname.split("/")[1];

  console.log("pathname", pathname);

  let lng;
  if (req.cookies.has(cookieName)) {
    const cookie = req.cookies.get(cookieName);
    if (cookie) {
      lng = acceptLanguage.get(cookie.value);
    }
  }
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = defaultLanguage;

  // Redirect if lng in path is not supported
  if (
    !languages.includes(langTargeted as Language) &&
    !pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(new URL(`/${lng}${pathname}`, req.url));
  }

  if (req.headers.has("referer")) {
    const refererString = req.headers.get("referer");
    if (refererString) {
      const refererLang = getlanguagePathFrom({ pathname: refererString });

      let refererUrl: URL;

      if (refererLang) {
        refererUrl = new URL(refererString);
      } else {
        refererUrl = new URL(`${refererString}/${lng}`);
      }

      const lngInReferer = languages.find((l) =>
        refererUrl.pathname.startsWith(`/${l}`)
      );
      const response = NextResponse.next();
      if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
      return response;
    }
  }

  return NextResponse.next();
}
