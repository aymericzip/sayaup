/*
  child-src
  Définit les sources valides pour les web workers et les éléments qui représentent des contextes de navigation imbriqués tels que <frame> et <iframe>.

  connect-src
  Restreint les URL qui peuvent être chargées via des scripts.

  default-src
  Représente la valeur par défaut des directives de récupération qui ne sont pas définies explicitement.

  font-src
  Définit les sources valides pour les polices de caractères chargées depuis @font-face.

  frame-src
  Définit les sources valides pour les éléments qui représentent des contextes de navigation imbriqués, tels que <frame> et <iframe>.

  img-src
  Définit les sources valides pour les images et les favicons.

  manifest-src
  Définit les sources valides pour les fichiers de manifeste d'application.

  media-src
  Définit les sources valides pour les ressources média des éléments <audio> et <video>.

  object-src
  Définit les sources valides pour les ressources des éléments <object>, <embed> et <applet>.
*/

const contentSecurityPolicy = `
  block-all-mixed-content;
  default-src 'none';
  script-src 'self' 'report-sample' 'unsafe-eval' *.${process.env.NEXT_PUBLIC_DOMAIN} *.stripe.com *.jsdelivr.net *.google.com *.google-analytics.com *.googletagmanager.com *.js.stripe.com;
  script-src-elem 'self' 'report-sample' 'unsafe-inline' blob: *.${process.env.NEXT_PUBLIC_DOMAIN} *.stripe.com *.jsdelivr.net *.google.com *.google-analytics.com *.googletagmanager.com *.js.stripe.com *.facebook.net;
  style-src 'self' 'report-sample' 'unsafe-inline' *.${process.env.NEXT_PUBLIC_DOMAIN};
  style-src-elem 'self' 'report-sample' 'unsafe-inline' *.${process.env.NEXT_PUBLIC_DOMAIN} *.stripe.com *.jsdelivr.net *.google.com *.googleapis.com *.googletagmanager.com *.googleapis.com;
  object-src 'self' data:;
  frame-src 'self' *.${process.env.NEXT_PUBLIC_DOMAIN} *.stripe.com *.stripe.network *.google.com *.googletagmanager.com *.firebaseapp.com;
  child-src 'self' *.${process.env.NEXT_PUBLIC_DOMAIN} *.googletagmanager.com;
  img-src 'self' data: blob: *.${process.env.NEXT_PUBLIC_DOMAIN} *.stripe.com *.google-analytics.com *.google.com *.gstatic.com *.googletagmanager.com *.cdninstagram.com *.jsdelivr.net;
  font-src 'self' data: *.${process.env.NEXT_PUBLIC_DOMAIN} *.jsdelivr.net  *.gstatic.com github.com;
  connect-src 'self' localhost *.${process.env.NEXT_PUBLIC_DOMAIN} *.stripe.com *.google.com *.googleapis.com *.google-analytics.com *.googletagmanager.com *.gstatic.com *.doubleclick.net *.cdninstagram.com *.jsdelivr.net *.instagram.com *.facebook.net unpkg.com *.openai.com;
  manifest-src 'self';
  base-uri 'self';
  form-action 'self';
  media-src 'self';
  worker-src 'self' blob: *.${process.env.NEXT_PUBLIC_DOMAIN};
`;

module.exports = {
  contentSecurityPolicy,
};
