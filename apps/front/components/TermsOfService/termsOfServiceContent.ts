import { LanguageContent } from "@i18n/useContent";

interface Content {
  title: string;
  updateTime: Date;
  lastUpdatedText: string;
  sections: {
    title: string;
    paragraphs: string[];
  }[];
}

export const termsOfServiceLanguageContent: LanguageContent<Content> = {
  en: {
    title: "Terms of Service",
    updateTime: new Date("2023-06-28"),
    lastUpdatedText: "Last updated:",
    sections: [
      {
        title: "Agreement to Terms",
        paragraphs: [
          'These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and SayaUp ("we," "us" or "our"), concerning your access to and use of the SayaUp website as well as any related applications (the "Services").',
          'We reserve the right, in our sole discretion, to make changes or modifications to these Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Terms. You waive any right to receive specific notice of each such change.',
        ],
      },
      {
        title: "Use of the Services",
        paragraphs: [
          "You agree that you will use the Services in compliance with all applicable local, state, national, and international laws, rules, and regulations. You shall not, shall not agree to, and shall not authorize or encourage any third party to use the Services to upload, transmit or otherwise distribute any content that is unlawful, defamatory, harassing, abusive, fraudulent, obscene, contains viruses, or is otherwise objectionable as determined by us in our sole discretion.",
        ],
      },
      {
        title: "User Content",
        paragraphs: [
          "We do not claim ownership of your content, but you give us your permission to use it to help us function and grow. That way, we won’t infringe any rights you have in your content and we can help promote your stuff.",
        ],
      },
      {
        title: "Intellectual Property Rights",
        paragraphs: [
          "The Services and its entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof), are owned by SayaUp, its licensors or other providers of such material and are protected by copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.",
        ],
      },
      {
        title: "Termination",
        paragraphs: [
          "We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.",
        ],
      },
      {
        title: "Limitation of Liability",
        paragraphs: [
          "In no event shall SayaUp, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.",
        ],
      },
      {
        title: "Governing Law",
        paragraphs: [
          "These Terms shall be governed and construed in accordance with the laws of Australia NSW and France, without regard to its conflict of law provisions.",
        ],
      },
      {
        title: "Contact Information",
        paragraphs: [
          "If you have any questions about these Terms, please contact us at contact@sayaup.com.",
        ],
      },
    ],
  },
  es: {
    title: "Términos de Servicio",
    updateTime: new Date("2023-06-28"),
    lastUpdatedText: "Última actualización :",
    sections: [
      {
        title: "Aceptación de los Términos",
        paragraphs: [
          'Estos Términos de Servicio ("Términos") constituyen un acuerdo legalmente vinculante entre usted, ya sea personalmente o en nombre de una entidad ("usted") y SayaUp ("nosotros", "nuestro"), en relación con su acceso y uso del sitio web de SayaUp así como todas las aplicaciones relacionadas (los "Servicios").',
          'Nos reservamos el derecho, a nuestra única discreción, de modificar o revisar estos Términos en cualquier momento y por cualquier razón. Le informaremos de cualquier cambio actualizando la fecha de "Última actualización" de estos Términos. Usted renuncia a cualquier derecho a recibir un aviso específico de cada cambio.',
        ],
      },
      {
        title: "Uso de los Servicios",
        paragraphs: [
          "Usted acepta usar los Servicios de conformidad con todas las leyes, reglas y regulaciones locales, estatales, nacionales e internacionales aplicables. Usted no debe, no debe aceptar y no debe autorizar o alentar a un tercero a usar los Servicios para descargar, transmitir o de otra manera distribuir un contenido que es ilegal, difamatorio, acosador, abusivo, fraudulento, obsceno, contiene virus, o es de alguna manera objetable a nuestra única discreción.",
        ],
      },
      {
        title: "Contenido de los Usuarios",
        paragraphs: [
          "No reclamamos la propiedad de su contenido, pero nos da permiso para usarlo para ayudarnos a operar y crecer. De esta manera, no violaremos ningún derecho que tenga sobre su contenido y podemos ayudar a promover su negocio.",
        ],
      },
      {
        title: "Derechos de Propiedad Intelectual",
        paragraphs: [
          "Los Servicios y todo su contenido, características y funcionalidades (incluyendo, pero no limitándose a, toda la información, software, texto, visualizaciones, imágenes, vídeo y audio, así como el diseño, selección y disposición de los mismos), son propiedad de SayaUp, sus licenciantes u otros proveedores de dicho material y están protegidos por leyes de derechos de autor, marcas comerciales, patentes, secretos comerciales y otras leyes de propiedad intelectual o derechos de propiedad.",
        ],
      },
      {
        title: "Terminación",
        paragraphs: [
          "Podemos terminar o suspender su cuenta e prohibir el acceso al Servicio de inmediato, sin previo aviso ni responsabilidad, a nuestra entera discreción, por cualquier motivo y sin limitación, incluyendo, pero no limitado a, una violación de los Términos.",
        ],
      },
      {
        title: "Limitación de Responsabilidad",
        paragraphs: [
          "Bajo ninguna circunstancia, SayaUp, ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables por cualquier daño indirecto, incidental, especial, consecuente o punitivo.",
        ],
      },
      {
        title: "Ley Aplicable",
        paragraphs: [
          "Estos Términos serán regidos e interpretados de acuerdo con las leyes de Australia y Francia, sin consideración a sus conflictos de provisiones legales.",
        ],
      },
      {
        title: "Contáctenos",
        paragraphs: [
          "Para cualquier pregunta o comentario sobre estos Términos, por favor contáctenos en contact@sayaup.com.",
        ],
      },
    ],
  },
  fr: {
    title: "Conditions Générales d'Utilisation",
    updateTime: new Date("2023-06-28"),
    lastUpdatedText: "Dernière mise à jour :",
    sections: [
      {
        title: "Acceptation des Conditions",
        paragraphs: [
          'Ces Conditions Générales d\'Utilisation ("Conditions") constituent un accord juridiquement contraignant conclu entre vous, que ce soit personnellement ou au nom d\'une entité ("vous") et SayaUp ("nous", "notre"), concernant votre accès et utilisation du site web de SayaUp ainsi que toutes les applications associées (les "Services").',
          'Nous nous réservons le droit, à notre seule discrétion, de modifier ou de réviser ces Conditions à tout moment et pour quelque raison que ce soit. Nous vous informerons de tout changement en mettant à jour la date de "Dernière mise à jour" de ces Conditions. Vous renoncez à tout droit de recevoir un avis spécifique de chaque changement.',
        ],
      },
      {
        title: "Utilisation des Services",
        paragraphs: [
          "Vous acceptez d'utiliser les Services en conformité avec toutes les lois, règles et réglementations locales, étatiques, nationales et internationales applicables. Vous ne devez pas, ne devez pas accepter et ne devez pas autoriser ou encourager un tiers à utiliser les Services pour télécharger, transmettre ou autrement distribuer un contenu qui est illégal, diffamatoire, harcelant, abusif, frauduleux, obscène, contient des virus, ou est autrement répréhensible à notre seule discrétion.",
        ],
      },
      {
        title: "Contenu des Utilisateurs",
        paragraphs: [
          "Nous ne revendiquons pas la propriété de votre contenu, mais vous nous donnez votre permission de l'utiliser pour nous aider à fonctionner et à grandir. De cette façon, nous ne violerons aucun droit que vous avez sur votre contenu et nous pourrons aider à promouvoir vos affaires.",
        ],
      },
      {
        title: "Droits de Propriété Intellectuelle",
        paragraphs: [
          "Les Services et l'ensemble de leur contenu, leurs fonctionnalités et fonctionnalités (y compris, mais sans s'y limiter, toutes les informations, logiciels, textes, affichages, images, vidéo et audio, ainsi que la conception, la sélection et la disposition de ceux-ci), sont la propriété de SayaUp, de ses concédants de licence ou d'autres fournisseurs de ce matériel et sont protégés par le droit d'auteur, la marque de commerce, le brevet, le secret commercial et d'autres lois sur la propriété intellectuelle ou les droits de propriété.",
        ],
      },
      {
        title: "Résiliation",
        paragraphs: [
          "Nous pouvons résilier ou suspendre votre compte et interdire l'accès au Service immédiatement, sans préavis ni responsabilité, à notre seule discrétion, pour quelque raison que ce soit et sans limitation, y compris, mais sans s'y limiter, une violation des Conditions.",
        ],
      },
      {
        title: "Limitation de Responsabilité",
        paragraphs: [
          "En aucun cas, SayaUp, ni ses directeurs, employés, partenaires, agents, fournisseurs ou affiliés, ne seront responsables de tout préjudice indirect, incident, spécial, conséquent ou punitif.",
        ],
      },
      {
        title: "Droit Applicable",
        paragraphs: [
          "Ces Conditions seront régies et interprétées conformément aux lois de l'Australie et de la France, sans égard aux conflits de dispositions légales.",
        ],
      },
      {
        title: "Nous Contacter",
        paragraphs: [
          "Pour toute question ou commentaire concernant ces Conditions, veuillez nous contacter à contact@sayaup.com.",
        ],
      },
    ],
  },

  de: {
    title: "Dienstleistungen",
    updateTime: new Date("28/06/2023"),
    lastUpdatedText: "",
    sections: [
      {
        title: "",
        paragraphs: [],
      },
    ],
  },
};
