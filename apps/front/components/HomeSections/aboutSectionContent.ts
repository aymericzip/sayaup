import { LanguageContent } from "@i18n/useContent";

interface Content {
  title: string;
  sections: {
    title?: string;
    content: string;
  }[];
}

export const aboutLanguageContent: LanguageContent<Content> = {
  en: {
    title: "Our agency",
    sections: [
      {
        content:
          "SayaUp, meaning 'Happiness' in Filipino, is a leading web agency based in Sydney, NSW, that takes pride in crafting high-quality digital solutions. Our team of dedicated developers, who are experts in advanced technologies like React and NextJS, work tirelessly to deliver superior IT services. We strive to blend modern design, robust development, and green IT optimization to provide sustainable, future-proof digital solutions. We're not just a company; we're a vibrant community of tech enthusiasts working to bring joy and success through our work.",
      },
      {
        title: "Our Clients",
        content:
          "Our clients are the lifeblood of SayaUp. We primarily serve startups and small businesses, focusing on their unique needs and growth potential. We value their dreams and ambitions as our own, helping them navigate the digital landscape with our comprehensive IT services. Our aim is to be a reliable partner for these businesses, growing alongside them, and contributing to their success.",
      },
      {
        title: "Our Projects",
        content:
          "SayaUp projects are the testimony of our capability and passion. From responsive NextJS websites to SEO-optimized platforms, secure applications, and efficient e-commerce integrations, we've done it all. Our versatility also extends to developing mobile applications with React Native and implementing analytics tools like Google Analytics. Each project is a reflection of our commitment to clean code, innovative design, and Agile methodology. These sections were written in a professional yet inviting tone to convey the expertise and approachability of your company. I hope this aligns well with your expectations! If there are any changes needed, feel free to let me know.",
      },
    ],
  },
  es: {
    title: "Nuestra agencia",
    sections: [
      {
        content:
          "SayaUp, que significa 'Felicidad' en filipino, es una destacada agencia web con sede en Sydney, NSW, que se enorgullece de diseñar soluciones digitales de alta calidad. Nuestro equipo de desarrolladores dedicados, expertos en tecnologías avanzadas como React y NextJS, trabajan incansablemente para ofrecer servicios de TI superiores. Nos esforzamos por fusionar el diseño moderno, el desarrollo sólido y la optimización de Green IT para proporcionar soluciones digitales sostenibles y a prueba de futuro. No somos solo una empresa; somos una vibrante comunidad de entusiastas de la tecnología trabajando para brindar alegría y éxito a través de nuestro trabajo.",
      },
      {
        title: "Nuestros Clientes",
        content:
          "Nuestros clientes son el motor de SayaUp. Atendemos principalmente a startups y pequeñas empresas, centrandonos en sus necesidades únicas y el potencial de crecimiento. Valoramos sus sueños y ambiciones como propios, ayudándoles a navegar por el panorama digital con nuestros servicios integrales de TI. Nuestro objetivo es ser un socio confiable para estas empresas, creciendo junto a ellas y contribuyendo a su éxito.",
      },
      {
        title: "Nuestros Proyectos",
        content:
          "Los proyectos de SayaUp son el testimonio de nuestra capacidad y pasión. Desde sitios web receptivos NextJS hasta plataformas optimizadas para SEO, aplicaciones seguras e integraciones eficientes de comercio electrónico, lo hemos hecho todo. Nuestra versatilidad también se extiende al desarrollo de aplicaciones móviles con React Native e implementación de herramientas analíticas como Google Analytics. Cada proyecto es un reflejo de nuestro compromiso con el código limpio, el diseño innovador y la metodología Agile.",
      },
    ],
  },
  fr: {
    title: "Notre agence",
    sections: [
      {
        content:
          "SayaUp, signifiant 'Bonheur' en filipino, est une agence web de premier plan basée à Sydney, NSW, qui se targue de créer des solutions numériques de haute qualité. Notre équipe de développeurs dédiés, experts en technologies avancées telles que React et NextJS, travaille sans relâche pour fournir des services informatiques supérieurs. Nous nous efforçons de mélanger le design moderne, le développement robuste et l'optimisation IT verte pour fournir des solutions numériques durables et prêtes pour l'avenir. Nous ne sommes pas seulement une entreprise ; nous sommes une communauté vibrante d'enthousiastes de la technologie travaillant pour apporter joie et succès à travers notre travail.",
      },
      {
        title: "Nos Clients",
        content:
          "Nos clients sont la vie de SayaUp. Nous servons principalement les startups et les petites entreprises, en nous concentrant sur leurs besoins uniques et leur potentiel de croissance. Nous valorisons leurs rêves et leurs ambitions comme les nôtres, les aidant à naviguer dans le paysage numérique avec nos services informatiques complets. Notre objectif est d'être un partenaire fiable pour ces entreprises, en grandissant avec elles et en contribuant à leur succès.",
      },
      {
        title: "Nos Projets",
        content:
          "Les projets SayaUp sont le témoignage de notre capacité et de notre passion. Des sites web réactifs NextJS aux plateformes optimisées pour le SEO, les applications sécurisées et les intégrations efficaces de commerce électronique, nous avons tout fait. Notre polyvalence s'étend également au développement d'applications mobiles avec React Native et à la mise en œuvre d'outils analytiques comme Google Analytics. Chaque projet est le reflet de notre engagement envers le code propre, le design innovant et la méthodologie Agile.",
      },
    ],
  },
  de: {
    title: "Ons agentschap",
    sections: [
      {
        content: "",
      },
      {
        title: "",
        content: "",
      },
      {
        title: "",
        content: "",
      },
    ],
  },
};
