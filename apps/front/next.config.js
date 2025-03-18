/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const { contentSecurityPolicy } = require("./contentSecurityPolicy.js");

const securityHeaders = [
  /*
  This header controls DNS prefetching, allowing browsers to proactively perform domain name resolution on external links, images, CSS, JavaScript, and more. 
  This prefetching is performed in the background, so the DNS is more likely to be resolved by the time the referenced items are needed. 
  This reduces latency when the user clicks a link.
  */
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },

  /*
  This header informs browsers it should only be accessed using HTTPS, instead of using HTTP. 
  Using the configuration below, all present and future subdomains will use HTTPS for a max-age of 2 years. 
  This blocks access to pages or subdomains that can only be served over HTTP.
  */
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  /*
  This header stops pages from loading when they detect reflected cross-site scripting (XSS) attacks.
  Although this protection is not necessary when sites implement a strong Content-Security-Policy disabling the use of inline JavaScript ('unsafe-inline'), it can still provide protection for older web browsers that don't support CSP.
  */
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },

  /*
  This header indicates whether the site should be allowed to be displayed within an iframe. 
  This can prevent against clickjacking attacks. 
  This header has been superseded by CSP's frame-ancestors option, which has better support in modern browsers.
  */
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },

  /*
  This header allows you to control which features and APIs can be used in the browser. 
  It was previously named Feature-Policy. You can view the full list of permission options here.
  */
  {
    key: "Permissions-Policy",
    value: "camera=(self), microphone=(), geolocation=()",
  },

  /*
  This header prevents the browser from attempting to guess the type of content if the Content-Type header is not explicitly set. 
  This can prevent XSS exploits for websites that allow users to upload and share files. 
  For example, a user trying to download an image, but having it treated as a different Content-Type like an executable, which could be malicious. 
  This header also applies to downloading browser extensions. The only valid value for this header is nosniff
  */
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  /*
  This header controls how much information the browser includes when navigating from the current website (origin) to another. 
  You can read about the different options here.
  */
  {
    key: "Referrer-Policy",
    value: "strict-origin",
  },

  /*
  This header helps prevent cross-site scripting (XSS), clickjacking and other code injection attacks. 
  Content Security Policy (CSP) can specify allowed origins for content including scripts, stylesheets, images, fonts, objects, media (audio, video), iframes, and more.

  You can read about the many different CSP options here.

  You can add Content Security Policy directives using a template string.
  */

  // Before defining your Security Headers
  // add Content Security Policy directives using a template string.

  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },

  {
    key: "Cache-control",
    value: `public, max-age=${2 * 7 * 24 * 60 * 60}, immutable`, // 2 weeks
  },
];

function headers() {
  return [
    {
      // Apply these headers to all routes in your application.
      source: "/:path*",
      headers: securityHeaders,
    },
  ];
}

const config = {
  //reactStrictMode: true,

  headers,

  compress: true,

  images: {
    domains: ["*"],
    formats: ["image/avif", "image/webp"],
  },

  transpilePackages: ["@sayaup/ui-library"],

  experimental: {
    appDir: true,
  },
};

const nextConfig = withPWA({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
  skipWaiting: true,
})(config);

module.exports = nextConfig;
// module.exports = nextConfig;
