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

export const privacyNoticeLanguageContent: LanguageContent<Content> = {
  en: {
    title: "Privacy Notice",
    updateTime: new Date("2023-06-28"),
    lastUpdatedText: "Last updated:",
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "At SayaUp, your privacy is critically important to us. This Privacy Notice provides an explanation as to what happens to any personal data that you provide to us, or that we collect from you.",
        ],
      },
      {
        title: "Information We Collect",
        paragraphs: [
          "We may collect and process information about your use of our services, including details of your visits such as pages viewed and the resources that you access. Such information includes traffic data, location data, and other communication data.",
          "We may collect information that you provide when you communicate with us by any means.",
        ],
      },
      {
        title: "Use of Cookies",
        paragraphs: [
          "Cookies provide information regarding the computer used by a visitor. We may use cookies where appropriate to gather information about your computer in order to assist us in improving our website.",
        ],
      },
      {
        title: "Use of Your Information",
        paragraphs: [
          "The information that we collect and store relating to you is primarily used to enable us to provide our services to you. We may use the information for one or more of the following purposes: to provide information to you that you request from us relating to our products or services, to provide information to you relating to other products that may be of interest to you.",
          "If you have previously purchased goods or services from us we may provide to you details of similar goods or services, or other goods and services, that you may be interested in.",
        ],
      },
      {
        title: "Storing Your Personal Data",
        paragraphs: [
          "In operating our website it may become necessary to transfer data that we collect from you to locations outside of the European Union for processing and storing. By providing your personal data to us, you agree to this transfer, storing or processing. We do our utmost to ensure that all reasonable steps are taken to make sure that your data is stored securely.",
        ],
      },
      {
        title: "Disclosing Your Information",
        paragraphs: [
          "We will not disclose your personal information to any other party other than in accordance with this Privacy Notice and in the circumstances detailed below: where we are legally required by law to disclose your personal information, to further fraud protection and reduce the risk of fraud.",
        ],
      },
      {
        title: "Contacting Us",
        paragraphs: [
          "Please do not hesitate to contact us regarding any matter relating to this Privacy Notice at contact@sayaup.com.",
        ],
      },
    ],
  },
  fr: {
    title: "Avis de Confidentialité",
    updateTime: new Date("2023-06-28"),
    lastUpdatedText: "Dernière mise à jour :",
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "Chez SayaUp, votre vie privée est d'une importance capitale pour nous. Cet Avis de Confidentialité fournit une explication quant à ce qui arrive à toutes les données personnelles que vous nous fournissez, ou que nous recueillons auprès de vous.",
        ],
      },
      {
        title: "Informations Que Nous Collectons",
        paragraphs: [
          "Nous pouvons recueillir et traiter des informations concernant votre utilisation de nos services, y compris des détails de vos visites tels que les pages vues et les ressources auxquelles vous accédez. De telles informations comprennent les données de trafic, les données de localisation et d'autres données de communication.",
          "Nous pouvons recueillir des informations que vous fournissez lorsque vous communiquez avec nous par quelque moyen que ce soit.",
        ],
      },
      {
        title: "Utilisation des Cookies",
        paragraphs: [
          "Les cookies fournissent des informations concernant l'ordinateur utilisé par un visiteur. Nous pouvons utiliser des cookies, si approprié, pour recueillir des informations sur votre ordinateur afin de nous aider à améliorer notre site web.",
        ],
      },
      {
        title: "Utilisation de Vos Informations",
        paragraphs: [
          "Les informations que nous recueillons et stockons à votre sujet sont principalement utilisées pour nous permettre de vous fournir nos services. Nous pouvons utiliser les informations à une ou plusieurs des fins suivantes : pour vous fournir des informations que vous nous demandez sur nos produits ou services, pour vous fournir des informations sur d'autres produits susceptibles de vous intéresser.",
          "Si vous avez déjà acheté des biens ou des services chez nous, nous pouvons vous fournir des détails sur des biens ou services similaires, ou d'autres biens et services, susceptibles de vous intéresser.",
        ],
      },
      {
        title: "Stockage de Vos Données Personnelles",
        paragraphs: [
          "Dans le cadre de l'exploitation de notre site web, il peut être nécessaire de transférer les données que nous recueillons auprès de vous vers des lieux en dehors de l'Union Européenne pour traitement et stockage. En nous fournissant vos données personnelles, vous acceptez ce transfert, ce stockage ou ce traitement. Nous faisons tout notre possible pour prendre toutes les mesures raisonnables pour assurer que vos données sont stockées de manière sécurisée.",
        ],
      },
      {
        title: "Divulgation de Vos Informations",
        paragraphs: [
          "Nous ne divulguerons pas vos informations personnelles à une autre partie autrement qu'en conformité avec cet Avis de Confidentialité et dans les circonstances détaillées ci-dessous : lorsque nous sommes légalement tenus par la loi de divulguer vos informations personnelles, pour renforcer la protection contre la fraude et réduire le risque de fraude.",
        ],
      },
      {
        title: "Nous Contacter",
        paragraphs: [
          "N'hésitez pas à nous contacter pour toute question relative à cet Avis de Confidentialité à contact@sayaup.com.",
        ],
      },
    ],
  },
  es: {
    title: "Aviso de Privacidad",
    updateTime: new Date("2023-06-28"),
    lastUpdatedText: "Última actualización :",
    sections: [
      {
        title: "Introducción",
        paragraphs: [
          "En SayaUp, su privacidad es de suma importancia para nosotros. Este Aviso de Privacidad proporciona una explicación sobre qué ocurre con cualquier dato personal que nos proporcione, o que recopilemos de usted.",
        ],
      },
      {
        title: "Información Que Recopilamos",
        paragraphs: [
          "Podemos recopilar y procesar información sobre su uso de nuestros servicios, incluyendo detalles de sus visitas tales como páginas vistas y los recursos a los que accede. Dicha información incluye datos de tráfico, datos de ubicación y otras comunicaciones de datos.",
          "Podemos recoger información que usted nos proporciona cuando se comunica con nosotros por cualquier medio.",
        ],
      },
      {
        title: "Uso de Cookies",
        paragraphs: [
          "Las cookies proporcionan información sobre el equipo informático utilizado por un visitante. Podemos usar cookies, cuando corresponda, para recopilar información acerca de su equipo con el fin de ayudarnos a mejorar nuestro sitio web.",
        ],
      },
      {
        title: "Uso de Su Información",
        paragraphs: [
          "La información que recopilamos y almacenamos sobre usted se utiliza principalmente para permitirnos proporcionar nuestros servicios. Podemos utilizar la información para uno o más de los siguientes propósitos: proporcionarle información que nos solicite sobre nuestros productos o servicios, proporcionarle información sobre otros productos que puedan ser de su interés.",
          "Si ya ha adquirido bienes o servicios de nosotros, podemos proporcionarle detalles sobre bienes o servicios similares, o bienes y servicios que puedan ser de su interés.",
        ],
      },
      {
        title: "Almacenamiento de Sus Datos Personales",
        paragraphs: [
          "Como parte de la operación de nuestro sitio web, puede ser necesario transferir los datos que recopilamos de usted a lugares fuera de la Unión Europea para su procesamiento y almacenamiento. Al proporcionarnos sus datos personales, usted acepta esta transferencia, almacenamiento o procesamiento. Hacemos todo lo posible para tomar todas las medidas razonables para asegurar que sus datos se almacenan de forma segura.",
        ],
      },
      {
        title: "Divulgación de Su Información",
        paragraphs: [
          "No divulgaremos su información personal a ningún otro partido que no sea de acuerdo con este Aviso de Privacidad y en las circunstancias detalladas a continuación: cuando estamos legalmente obligados por la ley a divulgar su información personal, para aumentar la protección contra el fraude y reducir el riesgo de fraude.",
        ],
      },
      {
        title: "Contactarnos",
        paragraphs: [
          "Por favor no dude en contactarnos en relación con cualquier asunto relacionado con este Aviso de Privacidad en contact@sayaup.com.",
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
