import { LanguageContent } from "@i18n/useContent";

interface Service {
  title: string;
  children: string[];
}

interface Content {
  service: Service[];
}

export const servicesLanguageContent: LanguageContent<Content> = {
  en: {
    service: [
      {
        title: "Web Development",
        children: [
          "At SayaUp, our team of passionate developers bring your ideas to life on the web. Using cutting-edge technologies like React and NextJS, we design, build, and maintain engaging, user-friendly websites and applications that not only look great but perform excellently.",
          "Our commitment to clean code and Agile methodologies ensures that your project is built with stability and flexibility in mind. Whether you're launching a new startup or scaling up an existing small business, we're here to support your journey with top-tier web development services.",
          "Our web development process is built around React/NextJS, delivering fast, SEO-friendly and accessible websites. We use modern tools and practices like CI/CD for streamlined development and updates, Docker/Kubernetes for environment consistency, and implement robust testing to ensure high quality.",
          "Our developers are experienced with Backend Nodejs, Firebase, Amplify, and can efficiently integrate CMSs and payment systems like Stripe and PayPal. We also provide secure application development, web performance optimization, and can extend the functionality with features like authentication and analytics tool integration.",
        ],
      },
      {
        title: "SEO",
        children: [
          "Being visible online is crucial to your business success. Our dedicated SEO experts at SayaUp work closely with you to boost your website’s search engine rankings, increasing your visibility and driving more traffic to your website.",
          "We adopt a comprehensive approach to SEO, factoring in keyword analysis, content optimization, technical SEO and more. The goal is to make your business more discoverable by your target audience, helping you attract more customers and grow.",
          "Our SEO practices are always up to date with the latest algorithms and trends. We perform in-depth keyword research, create SEO-optimized content, enhance your site's speed and performance, and ensure it's fully responsive for an improved user experience.",
          "We also incorporate essential SEO tactics like on-page and off-page SEO, link building, local SEO, and technical SEO to enhance your website's visibility and rankings. Through regular monitoring and reports, we track your website's performance and make data-driven decisions.",
        ],
      },
      {
        title: "Green IT",
        children: [
          "We care about our planet as much as we care about your business. SayaUp is committed to Green IT, optimizing our digital solutions to be energy-efficient and sustainable. We aim to minimize the environmental impact while maximizing performance.",
          "Our Green IT initiatives are not just good for the planet, but also beneficial for your business. Energy-efficient applications are also cost-efficient, reducing operating costs. We believe in sustainable growth and help you contribute to a greener future.",
          "Our developers utilize Green IT practices like energy-efficient coding, server optimization, and responsible resource allocation. This reduces the energy consumption of your web applications, making them more sustainable and cost-effective.",
          "We also consider Green IT in our choice of technologies, opting for those that are energy efficient and have a lesser environmental footprint. By doing so, we help your business to be a part of the solution for a sustainable future.",
        ],
      },
      {
        title: "DevOps",
        children: [
          "DevOps at SayaUp is not just a practice, it’s a culture. We believe in seamless collaboration between development and operations, enabling faster, more reliable software delivery. We help businesses enhance performance, stability, and speed to market.",
          "We leverage CI/CD pipelines to automate the build, test, and deployment process, ensuring swift releases and quick feedback. This continuous and seamless process allows your team to release new features and fixes to your users quickly and reliably.",
          "Our DevOps team uses modern infrastructure as code (IaC) tools such as Terraform and Ansible for automatic provisioning and managing of cloud-based infrastructure. This ensures a stable, scalable, and replicable environment across your entire software development lifecycle.",
          "We also implement robust monitoring and logging solutions to gain actionable insights into application performance. This allows for timely identification and resolution of issues, improving the reliability and user experience of your applications.",
        ],
      },
      {
        title: "Cloud",
        children: [
          "The cloud is the future, and we can help you be part of it. SayaUp offers comprehensive cloud solutions, ensuring your business has the scalability, flexibility, and security it needs to grow. We help you leverage the power of the cloud, transforming the way you do business.",
          "Our experts are experienced in managing popular cloud platforms like AWS, Google Cloud, and Azure. We understand the importance of data security and comply with industry best practices to ensure your data is safe and accessible.",
          "We leverage cloud-based services like AWS Lambda, Google Cloud Functions, and Azure Functions to build serverless applications, increasing scalability and reducing operational costs. We also implement cloud-native technologies like Docker and Kubernetes for seamless application deployment and scaling.",
          "Our cloud services include infrastructure setup and management, cloud migration, managed services, and cloud-native application development. We ensure that your cloud journey is smooth and beneficial, providing continuous support and optimization.",
        ],
      },
      {
        title: "Analytics",
        children: [
          "Data drives growth, and we at SayaUp understand that. We provide comprehensive analytics services that give you insights into your website's performance, user behavior, and more. We turn data into actionable insights to help your business grow.",
          "We're proficient in leveraging leading analytics tools such as Google Analytics, Firebase, and custom analytics setup. We help you make informed, data-driven decisions, optimizing your strategies and enhancing your user experience.",
          "Our team sets up extensive tracking for user interactions on your applications, providing in-depth user behavior insights. We also implement custom event tracking, funnel analysis, and conversion optimization to help your business understand its users better and increase its revenue.",
          "We ensure to comply with data privacy regulations, and our approach to analytics is always privacy-centric. We help you gain insights into your business while respecting the privacy of your users.",
        ],
      },
    ],
  },
  es: {
    service: [
      {
        title: "Desarrollo Web",
        children: [
          "En SayaUp, nuestro equipo de apasionados desarrolladores da vida a tus ideas en la web. Usando tecnologías de vanguardia como React y NextJS, diseñamos, construimos y mantenemos sitios web y aplicaciones atractivas y fáciles de usar que no sólo lucen bien, sino que también son de alto rendimiento.",
          "Nuestro compromiso con el código limpio y las metodologías Agile asegura que tu proyecto se construye con estabilidad y flexibilidad. Ya sea que estés lanzando una nueva start-up o desarrollando un pequeño negocio existente, estamos aquí para apoyar tu trayecto con servicios de desarrollo web de primera clase.",
          "Nuestro proceso de desarrollo web se construye alrededor de React/NextJS, entregando sitios web rápidos, SEO-friendly y accesibles. Usamos herramientas y prácticas modernas como CI/CD para un desarrollo y actualizaciones simplificados, Docker/Kubernetes para la consistencia del entorno, e implementamos pruebas robustas para garantizar una alta calidad.",
          "Nuestros desarrolladores son experimentados con Backend Nodejs, Firebase, Amplify, y pueden integrar eficazmente CMS y sistemas de pago como Stripe y PayPal. También proporcionamos desarrollo de aplicaciones seguras, optimización del rendimiento web, y podemos extender las funcionalidades con características como autenticación e integración de herramientas de análisis.",
        ],
      },
      {
        title: "SEO",
        children: [
          "Ser visible en línea es crucial para el éxito de tu negocio. Nuestros expertos en SEO dedicados en SayaUp trabajan estrechamente contigo para mejorar el ranking de tu sitio web en los motores de búsqueda, aumentando tu visibilidad y atrayendo más tráfico a tu sitio web.",
          "Adoptamos un enfoque integral del SEO, teniendo en cuenta el análisis de palabras clave, la optimización de contenido, el SEO técnico y más. El objetivo es hacer que tu negocio sea más descubrible por tu público objetivo, ayudándote a atraer más clientes y a crecer.",
          "Nuestras prácticas de SEO están siempre actualizadas con los últimos algoritmos y tendencias. Realizamos una investigación profunda de palabras clave, creamos contenido optimizado para SEO, mejoramos la velocidad y el rendimiento de tu sitio, y nos aseguramos de que sea totalmente responsivo para una mejor experiencia del usuario.",
          "También incorporamos tácticas de SEO esenciales como el SEO en la página y fuera de la página, la construcción de enlaces, el SEO local y el SEO técnico para mejorar la visibilidad y el ranking de tu sitio web. Con monitoreo y reportes regulares, seguimos el rendimiento de tu sitio web y tomamos decisiones basadas en los datos.",
        ],
      },
      {
        title: "Green IT",
        children: [
          "SayaUp está a la vanguardia de la adopción de Green IT. Estamos comprometidos a minimizar el impacto ambiental de nuestros servicios de desarrollo tecnológico, integrando prácticas ecológicas en todos los aspectos de nuestro trabajo.",
          "Continuamente buscamos reducir nuestro consumo de energía y promover la eficiencia energética en nuestros proyectos. Al utilizar tecnologías y metodologías más respetuosas con el medio ambiente, contribuimos a crear un futuro digital más verde.",
          "En el corazón de nuestro compromiso con Green IT se encuentra el diseño ecológicamente responsable de nuestros productos y servicios. Utilizamos técnicas de codificación eficientes, plataformas de bajo consumo de energía y prácticas de trabajo sostenibles para minimizar la huella de carbono de nuestros proyectos.",
          "Nuestra misión es ayudar a nuestros clientes a alcanzar sus objetivos mientras se mantienen ecológicamente responsables. Ya sea optimizando el consumo de energía de su sitio web o eligiendo hosts verdes para sus proyectos, estamos aquí para ayudarle a tomar decisiones ecológicas.",
        ],
      },
      {
        title: "DevOps",
        children: [
          "SayaUp se enorgullece de sus habilidades y conocimientos en DevOps. Fomentamos la estrecha colaboración entre los equipos de desarrollo y operaciones para optimizar la productividad y la calidad de nuestro trabajo.",
          "Nuestros procesos DevOps se centran en la integración continua (CI) y la entrega continua (CD), asegurando un flujo de trabajo eficiente y una rápida entrega de proyectos.",
          "Usamos tecnologías Docker/Kubernetes para asegurar la coherencia de los entornos, proporcionando así una flexibilidad y facilidad de gestión inigualables para sus proyectos.",
          "Nuestras soluciones DevOps están diseñadas para fomentar la automatización, reducir el time-to-market y mejorar la fiabilidad de sus aplicaciones. Ofrecemos una experiencia DevOps sin fisuras que respalda el crecimiento de su negocio.",
        ],
      },
      {
        title: "Cloud",
        children: [
          "En SayaUp, aprovechamos el poder de la nube para proporcionar soluciones ágiles y escalables a nuestros clientes. Integramos y gestionamos servicios en la nube para una variedad de aplicaciones, desde bases de datos hasta servidores web.",
          "Usamos tecnologías en la nube avanzadas para asegurar que sus aplicaciones sean altamente disponibles, seguras y capaces de manejar cargas de trabajo pesadas.",
          "Tenemos experiencia con una variedad de proveedores de servicios en la nube, incluyendo Firebase y Amplify, y podemos ayudarle a seleccionar e implementar la mejor solución para sus necesidades específicas.",
          "Ya sea que esté migrando a la nube, desarrollando una nueva aplicación nativa de la nube o optimizando su infraestructura en la nube existente, SayaUp es su socio de confianza para todas sus necesidades de computación en la nube.",
        ],
      },
      {
        title: "Analytics",
        children: [
          "SayaUp entiende la importancia de los datos para el crecimiento de su negocio. Por eso, ofrecemos servicios completos de análisis para ayudarle a entender el comportamiento de sus usuarios y mejorar su rendimiento.",
          "Nuestro equipo utiliza herramientas de análisis avanzadas como Google Analytics para recoger, analizar e interpretar los datos de su sitio web o aplicación. Esta información le ayudará a tomar decisiones más informadas para su negocio.",
          "Nos esforzamos por hacer que sus datos sean útiles y accesibles, proporcionando informes de análisis claros y detallados y ayudándole a entender las tendencias y patrones.",
          "Ya sea que quiera mejorar el compromiso del usuario, aumentar las conversiones o entender mejor a su audiencia, los servicios de análisis de SayaUp están aquí para ayudarle.",
        ],
      },
    ],
  },
  fr: {
    service: [
      {
        title: "Développement Web",
        children: [
          "Chez SayaUp, notre équipe de développeurs passionnés donne vie à vos idées sur le web. En utilisant des technologies de pointe comme React et NextJS, nous concevons, construisons et maintenons des sites web et des applications engageantes et conviviales qui non seulement ont un bel aspect, mais sont aussi performants.",
          "Notre engagement envers le code propre et les méthodologies Agile garantit que votre projet est construit avec stabilité et flexibilité. Que vous lanciez une nouvelle start-up ou que vous développiez une petite entreprise existante, nous sommes là pour soutenir votre parcours avec des services de développement web de premier ordre.",
          "Notre processus de développement web est construit autour de React/NextJS, livrant des sites web rapides, SEO-friendly et accessibles. Nous utilisons des outils et pratiques modernes comme CI/CD pour un développement et des mises à jour simplifiés, Docker/Kubernetes pour la consistance de l'environnement, et mettons en œuvre des tests robustes pour assurer une haute qualité.",
          "Nos développeurs sont expérimentés avec Backend Nodejs, Firebase, Amplify, et peuvent intégrer efficacement les CMS et les systèmes de paiement comme Stripe et PayPal. Nous fournissons également un développement d'application sécurisé, une optimisation des performances web, et pouvons étendre les fonctionnalités avec des fonctionnalités comme l'authentification et l'intégration d'outils d'analyse.",
        ],
      },
      {
        title: "SEO",
        children: [
          "Être visible en ligne est crucial pour la réussite de votre entreprise. Nos experts SEO dédiés chez SayaUp travaillent étroitement avec vous pour améliorer le classement de votre site web dans les moteurs de recherche, augmentant votre visibilité et attirant plus de trafic vers votre site web.",
          "Nous adoptons une approche globale du SEO, tenant compte de l'analyse des mots clés, de l'optimisation du contenu, du SEO technique et plus encore. L'objectif est de rendre votre entreprise plus découvrable par votre public cible, vous aidant à attirer plus de clients et à grandir.",
          "Nos pratiques SEO sont toujours à jour avec les derniers algorithmes et tendances. Nous réalisons une recherche approfondie de mots clés, créons du contenu optimisé pour le SEO, améliorons la vitesse et les performances de votre site, et nous assurons qu'il est entièrement réactif pour une meilleure expérience utilisateur.",
          "Nous incorporons également des tactiques SEO essentielles comme le SEO on-page et off-page, la construction de liens, le SEO local et le SEO technique pour améliorer la visibilité et le classement de votre site web. Grâce à une surveillance et des rapports réguliers, nous suivons les performances de votre site web et prenons des décisions basées sur les données.",
        ],
      },
      {
        title: "Green IT",
        children: [
          "SayaUp est à la pointe de l'adoption du Green IT. Nous sommes déterminés à minimiser l'impact environnemental de nos services de développement technologique, en intégrant des pratiques écologiques dans tous les aspects de notre travail.",
          "Nous cherchons continuellement à réduire notre consommation d'énergie et à favoriser l'efficacité énergétique dans nos projets. En utilisant des technologies et des méthodologies plus respectueuses de l'environnement, nous contribuons à créer un avenir numérique plus vert.",
          "Au cœur de notre engagement envers le Green IT se trouve la conception éco-responsable de nos produits et services. Nous utilisons des techniques de codage efficaces, des plateformes à faible consommation d'énergie et des pratiques de travail durables pour minimiser l'empreinte carbone de nos projets.",
          "Notre mission est d'aider nos clients à atteindre leurs objectifs tout en restant écologiquement responsables. Que ce soit en optimisant la consommation d'énergie de votre site web ou en choisissant des hébergeurs verts pour vos projets, nous sommes là pour vous aider à faire des choix écologiques.",
        ],
      },
      {
        title: "DevOps",
        children: [
          "SayaUp est fier de ses compétences et connaissances en DevOps. Nous favorisons la collaboration étroite entre les équipes de développement et d'exploitation pour optimiser la productivité et la qualité de notre travail.",
          "Nos processus DevOps mettent l'accent sur l'intégration continue (CI) et le déploiement continu (CD), garantissant un flux de travail efficace et une livraison de projet rapide.",
          "Nous utilisons les technologies Docker/Kubernetes pour assurer la cohérence des environnements, offrant ainsi une flexibilité et une facilité de gestion inégalées pour vos projets.",
          "Nos solutions DevOps sont conçues pour favoriser l'automatisation, réduire les délais de commercialisation et améliorer la fiabilité de vos applications. Nous offrons une expérience de DevOps transparente qui soutient la croissance de votre entreprise.",
        ],
      },
      {
        title: "Cloud",
        children: [
          "Chez SayaUp, nous exploitons la puissance du cloud pour fournir des solutions agiles et évolutives à nos clients. Nous intégrons et gérons des services cloud pour une variété d'applications, allant des bases de données aux serveurs web.",
          "Nous utilisons des technologies cloud avancées pour garantir que vos applications sont hautement disponibles, sécurisées et capables de gérer des charges de travail importantes.",
          "Nous sommes expérimentés avec une variété de fournisseurs de services cloud, y compris Firebase et Amplify, et nous pouvons vous aider à sélectionner et à implémenter la meilleure solution pour vos besoins spécifiques.",
          "Qu'il s'agisse de migrer vers le cloud, de développer une nouvelle application cloud-native ou d'optimiser votre infrastructure cloud existante, SayaUp est votre partenaire de confiance pour toutes vos exigences en matière de cloud computing.",
        ],
      },
      {
        title: "Analytics",
        children: [
          "SayaUp comprend l'importance des données pour la croissance de votre entreprise. C'est pourquoi nous offrons des services d'analyse complets pour vous aider à comprendre le comportement de vos utilisateurs et à améliorer vos performances.",
          "Notre équipe utilise des outils d'analyse avancés comme Google Analytics pour collecter, analyser et interpréter les données de votre site web ou de votre application. Ces informations vous aideront à prendre des décisions plus éclairées pour votre entreprise.",
          "Nous nous efforçons de rendre vos données utiles et accessibles, en fournissant des rapports d'analyse clairs et détaillés et en vous aidant à comprendre les tendances et les modèles.",
          "Que vous souhaitiez améliorer l'engagement de l'utilisateur, augmenter les conversions ou comprendre mieux votre audience, les services d'analyse de SayaUp sont là pour vous aider.",
        ],
      },
    ],
  },
  de: {
    service: [
      {
        title: "Web Development",
        children: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ad maxime suscipit, obcaecati repellat illo consectetur ipsum? Optio quo in nihil ducimus autem, ipsam reiciendis ea labore. Magnam, nesciunt recusandae.",
        ],
      },
    ],
  },
};
