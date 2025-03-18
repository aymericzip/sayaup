import { LanguageContent } from "@i18n/useContent";
import { v4 } from "uuid";

export enum SubsectionType {
  DEFAULT = "DEFAULT",
  QUANTITY = "QUANTITY",
  BOOLEAN = "BOOLEAN",
  SCALE = "SCALE",
  CHOICE_LIST = "CHOICE_LIST",
  ENUMERATION = "ENUMERATION",
}

export interface Pricer {
  extraDays?: number; // Days to add to the estimate
  multiplier?: number; // Multiplier to apply to the estimate
  errorMargin?: number; // Percentage of error to apply to the estimate
}

export type PricingEstimate = Record<string, Pricer>;

export interface Section {
  id: string;
  title: string;
  description?: string;
  dailyCost?: number;
  subsection?: SectionChoice[];
}

export interface DefaultSection extends Section {
  type: SubsectionType.DEFAULT;
}

export interface QuantitySection extends Section {
  type: SubsectionType.QUANTITY;
  pricingPerUnit: PricingEstimate;
}

export interface BooleanSection extends Section {
  type: SubsectionType.BOOLEAN;
  true?: {
    pricing?: PricingEstimate;
    subsection?: SectionChoice[];
  };
  false?: {
    pricing?: PricingEstimate;
    subsection?: SectionChoice[];
  };
}

export interface ScaleSection extends Section {
  type: SubsectionType.SCALE;
  scale: Record<number, { label: string; pricing?: PricingEstimate }>;
}

interface Choice {
  id: string;
  title: string;
  pricing?: PricingEstimate;
  default?: boolean;
  subsection?: SectionChoice[];
}

export interface ChoiceListSection extends Section {
  type: SubsectionType.CHOICE_LIST;
  choiceList: Choice[];
  pricing?: PricingEstimate;
}

export interface EnumerationSection extends Section {
  type: SubsectionType.ENUMERATION;
  itemName: string;
  pricingPerUnit?: PricingEstimate;
  subsection: SectionChoice[];
}

export type SectionChoice =
  | BooleanSection
  | ChoiceListSection
  | ScaleSection
  | QuantitySection
  | EnumerationSection
  | DefaultSection;

interface Content {
  service: SectionChoice[];
  dailyCost: number;
}

export const estimateLanguageContent: LanguageContent<Content> = {
  en: {
    dailyCost: 700,
    service: [
      {
        id: v4(),
        title: "Applicative architecture",
        description: "What type of application do you need?",
        type: SubsectionType.DEFAULT,
        subsection: [
          {
            id: v4(),
            title: "Frontend",
            description:
              "A frontend is the part of a website that users interact with. It is the visual interface of a website.",
            type: SubsectionType.BOOLEAN,
            true: {
              subsection: [
                {
                  id: v4(),
                  title: "List of the frontend application",
                  description: "How many applications do you need?",
                  itemName: "Frontend application",
                  type: SubsectionType.ENUMERATION,
                  subsection: [
                    {
                      id: v4(),
                      title: "Application already exists",
                      description:
                        "Do you already have the application that needs to be improved?",
                      type: SubsectionType.BOOLEAN,
                      true: {
                        pricing: {
                          frontend: {
                            extraDays: 0.5,
                            multiplier: 1.2,
                          },
                        },
                        subsection: [
                          {
                            id: v4(),
                            title: "Front application type",
                            description:
                              "What type of application do you have?",
                            type: SubsectionType.CHOICE_LIST,
                            choiceList: [
                              {
                                id: v4(),
                                title: "React",
                                pricing: {
                                  frontend: {
                                    multiplier: 1,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Next.js",
                                pricing: {
                                  frontend: {
                                    multiplier: 1.1,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Gatsby",
                                pricing: {
                                  frontend: {
                                    multiplier: 2,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Vue",
                                pricing: {
                                  frontend: {
                                    multiplier: 1.7,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Nuxt.js",
                                pricing: {
                                  frontend: {
                                    multiplier: 2,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Static website",
                                pricing: {
                                  frontend: {
                                    multiplier: 3,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Angular",
                                pricing: {
                                  frontend: {
                                    multiplier: 4,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Svelte",
                                pricing: {
                                  frontend: {
                                    multiplier: 3,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Other",
                                pricing: {
                                  frontend: {
                                    multiplier: 4,
                                  },
                                },
                              },
                            ],
                          },
                          {
                            id: v4(),
                            title: "List of pages to create",
                            description:
                              "Detail the pages than you need to create?",
                            type: SubsectionType.ENUMERATION,
                            itemName: "Page",
                            pricingPerUnit: {
                              frontend: {
                                extraDays: 2,
                                errorMargin: 0.3,
                              },
                            },
                            subsection: [
                              {
                                id: v4(),
                                title: "Number of forms",
                                description:
                                  "A form is a page asking for information from the user. It can be a contact form, a login form, a registration form, etc. A form will need to be validated and sent to a server.",
                                type: SubsectionType.QUANTITY,
                                pricingPerUnit: {
                                  frontend: {
                                    extraDays: 2,
                                    errorMargin: 0.3,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title:
                                  "Number of advanced functionality with complex features and interactions",
                                description:
                                  "A advanced functionality is a feature that requires a lot of work to be implemented. It can be a complex design implementation, a specific workflow, a complex search, a dashboards, etc.",

                                type: SubsectionType.QUANTITY,
                                pricingPerUnit: {
                                  frontend: {
                                    extraDays: 2,
                                    errorMargin: 0.3,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Creative design",
                                description:
                                  "Do you need a creative design for your page? As complex animations, 3D interactions, etc.",
                                type: SubsectionType.BOOLEAN,
                                true: {
                                  pricing: {
                                    frontend: {
                                      extraDays: 1,
                                    },
                                  },

                                  subsection: [
                                    {
                                      id: v4(),
                                      title: "Number of designs",
                                      description:
                                        "How many designs do you need?",
                                      type: SubsectionType.QUANTITY,
                                      pricingPerUnit: {
                                        frontend: {
                                          extraDays: 2.5,
                                          errorMargin: 0.6,
                                        },
                                      },
                                    },
                                  ],
                                },
                                false: {},
                              },
                            ],
                          },
                          {
                            id: v4(),
                            title: "Number of features to edit",
                            description:
                              "How many features do you need to edit?",
                            type: SubsectionType.QUANTITY,
                            pricingPerUnit: {
                              frontend: {
                                extraDays: 2,
                                errorMargin: 0.3,
                              },
                            },
                          },
                        ],
                      },
                      false: {
                        subsection: [
                          {
                            id: v4(),
                            title: "Front application type",
                            description:
                              "What type of application do you need?",
                            type: SubsectionType.CHOICE_LIST,
                            choiceList: [
                              {
                                id: v4(),
                                title: "No preference",
                                pricing: {
                                  frontend: {
                                    multiplier: 1,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "React",
                                pricing: {
                                  frontend: {
                                    multiplier: 1,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Next.js",
                                pricing: {
                                  frontend: {
                                    multiplier: 1.1,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Gatsby",
                                pricing: {
                                  frontend: {
                                    multiplier: 2,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Vue",
                                pricing: {
                                  frontend: {
                                    multiplier: 1.7,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Nuxt.js",
                                pricing: {
                                  frontend: {
                                    multiplier: 2,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Static website",
                                pricing: {
                                  frontend: {
                                    multiplier: 3,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Angular",
                                pricing: {
                                  frontend: {
                                    multiplier: 4,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Svelte",
                                pricing: {
                                  frontend: {
                                    multiplier: 3,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Other",
                                pricing: {
                                  frontend: {
                                    multiplier: 4,
                                  },
                                },
                              },
                            ],
                          },
                          {
                            id: v4(),
                            title: "List of pages to create",
                            description:
                              "Detail the pages than you need to create?",
                            type: SubsectionType.ENUMERATION,
                            itemName: "Page",
                            pricingPerUnit: {
                              frontend: {
                                extraDays: 2,
                                errorMargin: 0.3,
                              },
                            },
                            subsection: [
                              {
                                id: v4(),
                                title: "Number of forms",
                                description:
                                  "A form is a page asking for information from the user. It can be a contact form, a login form, a registration form, etc. A form will need to be validated and sent to a server.",
                                type: SubsectionType.QUANTITY,
                                pricingPerUnit: {
                                  frontend: {
                                    extraDays: 2,
                                    errorMargin: 0.3,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Number of advanced functionality",
                                description:
                                  "A advanced functionality is a feature that requires some work to be implemented. It can be a specific workflow, a complex search, a dashboards, etc.",

                                type: SubsectionType.QUANTITY,
                                pricingPerUnit: {
                                  frontend: {
                                    extraDays: 2,
                                    errorMargin: 0.3,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Creative design",
                                description:
                                  "Do you need a creative design for your page? As complex animations, 3D interactions, etc.",
                                type: SubsectionType.BOOLEAN,
                                true: {
                                  pricing: {
                                    frontend: {
                                      extraDays: 1,
                                    },
                                  },

                                  subsection: [
                                    {
                                      id: v4(),
                                      title: "Number of designs",
                                      description:
                                        "How many designs do you need?",
                                      type: SubsectionType.QUANTITY,
                                      pricingPerUnit: {
                                        frontend: {
                                          extraDays: 2.5,
                                          errorMargin: 0.6,
                                        },
                                      },
                                    },
                                  ],
                                },
                                false: {},
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
            false: {},
          },
          {
            id: v4(),
            title: "Mobile application",
            description: "Mobile application for IOS and Android",
            type: SubsectionType.BOOLEAN,
            false: {},
            true: {
              subsection: [
                {
                  id: v4(),
                  title: "List of the mobile applications",
                  description: "How many mobile applications do you need?",
                  type: SubsectionType.ENUMERATION,
                  itemName: "Mobile application",
                  subsection: [
                    {
                      id: v4(),
                      title: "Application already exists",
                      description:
                        "Do you already have the application that needs to be improved?",
                      type: SubsectionType.BOOLEAN,
                      false: {
                        subsection: [
                          {
                            id: v4(),
                            title: "Mobile application type",
                            description:
                              "What type of application do you have?",
                            type: SubsectionType.CHOICE_LIST,
                            choiceList: [
                              {
                                id: v4(),
                                title: "No preference",
                                pricing: {
                                  mobile: {
                                    multiplier: 10,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "React Native",
                                pricing: {
                                  mobile: {
                                    extraDays: 10,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Flutter",
                                pricing: {
                                  mobile: {
                                    extraDays: 10,
                                  },
                                },
                              },
                            ],
                          },
                          {
                            id: v4(),
                            title: "Number of screens",
                            description: "How many screens do you need?",
                            type: SubsectionType.QUANTITY,
                            pricingPerUnit: {
                              mobile: {
                                multiplier: 1.1,
                                extraDays: 1.5,
                              },
                            },
                          },
                          {
                            id: v4(),
                            title: "List of screens to create",
                            description:
                              "Detail the screens than you need to create?",
                            type: SubsectionType.ENUMERATION,
                            itemName: "Screen",
                            pricingPerUnit: {
                              frontend: {
                                extraDays: 2.5,
                                errorMargin: 0.3,
                              },
                            },
                            subsection: [
                              {
                                id: v4(),
                                title: "Number of forms",
                                description:
                                  "A form is a page asking for information from the user. It can be a contact form, a login form, a registration form, etc. A form will need to be validated and sent to a server.",
                                type: SubsectionType.QUANTITY,
                                pricingPerUnit: {
                                  frontend: {
                                    extraDays: 2,
                                    errorMargin: 0.3,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title:
                                  "Number of advanced functionality with complex features and interactions",
                                description:
                                  "A advanced functionality is a feature that requires a lot of work to be implemented. It can be a complex design implementation, a specific workflow, a complex search, a dashboards, etc.",

                                type: SubsectionType.QUANTITY,
                                pricingPerUnit: {
                                  frontend: {
                                    extraDays: 2,
                                    errorMargin: 0.3,
                                  },
                                },
                              },
                            ],
                          },
                        ],
                      },
                      true: {
                        subsection: [
                          {
                            id: v4(),
                            title: "Mobile application type",
                            description:
                              "What type of application do you have?",
                            type: SubsectionType.CHOICE_LIST,
                            choiceList: [
                              {
                                id: v4(),
                                title: "No preference",
                                pricing: {
                                  mobile: {
                                    extraDays: 10,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "React Native",
                                pricing: {
                                  mobile: {
                                    extraDays: 10,
                                  },
                                },
                              },
                              {
                                id: v4(),
                                title: "Flutter",
                                pricing: {
                                  mobile: {
                                    extraDays: 10,
                                  },
                                },
                              },
                            ],
                          },
                          {
                            id: v4(),
                            title: "Number of screens to update",
                            description:
                              "How many screens do you need to update?",
                            type: SubsectionType.QUANTITY,
                            pricingPerUnit: {
                              mobile: {
                                multiplier: 1.1,
                                extraDays: 1,
                              },
                            },
                          },
                          {
                            id: v4(),
                            title: "Number of screens to create",
                            description:
                              "How many screens do you need to create?",
                            type: SubsectionType.QUANTITY,
                            pricingPerUnit: {
                              mobile: {
                                multiplier: 1.1,
                                extraDays: 2,
                              },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          },
          {
            id: v4(),
            title: "Backend",
            description:
              "A backend is the part of a website that users do not interact with. It is the server-side of a website.",
            type: SubsectionType.BOOLEAN,
            false: {},
            true: {
              subsection: [
                {
                  id: v4(),
                  title: "List of the backend applications",
                  description: "How many backend applications do you need?",
                  type: SubsectionType.ENUMERATION,
                  itemName: "Backend application",
                  subsection: [
                    {
                      id: v4(),
                      title: "Application already exists",
                      description:
                        "Do you already have the application that needs to be improved?",
                      type: SubsectionType.BOOLEAN,
                      true: {
                        subsection: [
                          {
                            id: v4(),
                            title: "Backend application type",
                            description:
                              "Do you have a backend as a service or a coded backend?",
                            type: SubsectionType.CHOICE_LIST,
                            choiceList: [
                              {
                                id: v4(),
                                title: "Backend as a service (BaaS)",

                                pricing: {
                                  backend: {
                                    extraDays: 5,
                                  },
                                },
                                subsection: [
                                  {
                                    id: v4(),
                                    title: "Technology",
                                    description:
                                      "What technology do you want to use?",
                                    type: SubsectionType.CHOICE_LIST,
                                    choiceList: [
                                      {
                                        id: v4(),
                                        title: "No preference",
                                      },
                                      {
                                        id: v4(),
                                        title: "Firebase",
                                      },
                                      {
                                        id: v4(),
                                        title: "AWS Amplify",
                                      },
                                      {
                                        id: v4(),
                                        title: "Supabase",
                                      },
                                      {
                                        id: v4(),
                                        title: "Parse",
                                      },
                                      {
                                        id: v4(),
                                        title: "Back4App",
                                      },
                                      {
                                        id: v4(),
                                        title: "Kinvey",
                                      },
                                      {
                                        id: v4(),
                                        title: "Other",
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                id: v4(),
                                title: "Coded backend",
                                pricing: {
                                  backend: {
                                    extraDays: 5,
                                  },
                                },
                                subsection: [
                                  {
                                    id: v4(),
                                    title: "Backend application technology",
                                    description:
                                      "What type of technology do you have?",
                                    type: SubsectionType.CHOICE_LIST,
                                    choiceList: [
                                      {
                                        id: v4(),
                                        title: "No preference",
                                        pricing: {
                                          backend: {
                                            multiplier: 1,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "NodeJS / Express",
                                        pricing: {
                                          backend: {
                                            multiplier: 1,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "NodeJS / Nest",
                                        pricing: {
                                          backend: {
                                            multiplier: 1,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "NodeJS / Koa",
                                        pricing: {
                                          backend: {
                                            multiplier: 1.2,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "NodeJS / Hapi",
                                        pricing: {
                                          backend: {
                                            multiplier: 1.5,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "NodeJS / Other",
                                        pricing: {
                                          backend: {
                                            multiplier: 1,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "PHP / Symfony",
                                        pricing: {
                                          backend: {
                                            multiplier: 2,
                                          },
                                        },
                                      },

                                      {
                                        id: v4(),
                                        title: "PHP / Laravel",
                                        pricing: {
                                          backend: {
                                            multiplier: 2,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "PHP / Other",
                                        pricing: {
                                          backend: {
                                            multiplier: 2,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "Python / Django",
                                        pricing: {
                                          backend: {
                                            multiplier: 2,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "Python / Flask",
                                        pricing: {
                                          backend: {
                                            multiplier: 2.5,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "Python / Other",
                                        pricing: {
                                          backend: {
                                            multiplier: 2,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "Rust / Other",
                                        pricing: {
                                          backend: {
                                            multiplier: 3,
                                          },
                                        },
                                      },

                                      {
                                        id: v4(),
                                        title: "Ruby / Rails",
                                        pricing: {
                                          backend: {
                                            multiplier: 3,
                                          },
                                        },
                                      },

                                      {
                                        id: v4(),
                                        title: "Ruby / Other",
                                        pricing: {
                                          backend: {
                                            multiplier: 3,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "Java / Spring",
                                        pricing: {
                                          backend: {
                                            multiplier: 3,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "Go / Other",
                                        pricing: {
                                          backend: {
                                            multiplier: 3,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "C# / .NET",
                                        pricing: {
                                          backend: {
                                            multiplier: 4,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "Scala / Other",
                                        pricing: {
                                          backend: {
                                            multiplier: 3,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "Other",
                                        pricing: {
                                          backend: {
                                            multiplier: 4,
                                          },
                                        },
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      false: {
                        pricing: {
                          backend: {
                            extraDays: 5,
                          },
                        },
                        subsection: [
                          {
                            id: v4(),
                            title: "Backend application type",
                            description:
                              "Do you need a backend as a service or a coded backend?",
                            type: SubsectionType.CHOICE_LIST,

                            choiceList: [
                              {
                                id: v4(),
                                title: "Backend as a service (BaaS)",

                                pricing: {
                                  backend: {
                                    extraDays: 5,
                                  },
                                },
                                subsection: [
                                  {
                                    id: v4(),
                                    title: "Technology",
                                    description:
                                      "What technology do you want to use?",
                                    type: SubsectionType.CHOICE_LIST,
                                    choiceList: [
                                      {
                                        id: v4(),
                                        title: "No preference",
                                      },
                                      {
                                        id: v4(),
                                        title: "Firebase",
                                      },
                                      {
                                        id: v4(),
                                        title: "AWS Amplify",
                                      },
                                      {
                                        id: v4(),
                                        title: "Supabase",
                                      },
                                      {
                                        id: v4(),
                                        title: "Parse",
                                      },
                                      {
                                        id: v4(),
                                        title: "Back4App",
                                      },
                                      {
                                        id: v4(),
                                        title: "Kinvey",
                                      },
                                      {
                                        id: v4(),
                                        title: "Other",
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                id: v4(),
                                title: "Coded backend",
                                pricing: {
                                  backend: {
                                    extraDays: 5,
                                  },
                                },
                                subsection: [
                                  {
                                    id: v4(),
                                    title: "Backend application technology",
                                    description:
                                      "What type of technology do you need?",
                                    type: SubsectionType.CHOICE_LIST,
                                    choiceList: [
                                      {
                                        id: v4(),
                                        title: "No preference",
                                        pricing: {
                                          backend: {
                                            multiplier: 1,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "NodeJS / Express",
                                        pricing: {
                                          backend: {
                                            multiplier: 1,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "NodeJS / Nest",
                                        pricing: {
                                          backend: {
                                            multiplier: 1,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "NodeJS / Koa",
                                        pricing: {
                                          backend: {
                                            multiplier: 1.2,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "NodeJS / Hapi",
                                        pricing: {
                                          backend: {
                                            multiplier: 1.5,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "NodeJS / No preference",
                                        pricing: {
                                          backend: {
                                            multiplier: 1,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "PHP / Symfony",
                                        pricing: {
                                          backend: {
                                            multiplier: 2,
                                          },
                                        },
                                      },

                                      {
                                        id: v4(),
                                        title: "PHP / Laravel",
                                        pricing: {
                                          backend: {
                                            multiplier: 2,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "PHP / No preference",
                                        pricing: {
                                          backend: {
                                            multiplier: 2,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "Python / Django",
                                        pricing: {
                                          backend: {
                                            multiplier: 2,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "Python / Flask",
                                        pricing: {
                                          backend: {
                                            multiplier: 2.5,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "Python / No preference",
                                        pricing: {
                                          backend: {
                                            multiplier: 2,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "Rust / No preference",
                                        pricing: {
                                          backend: {
                                            multiplier: 3,
                                          },
                                        },
                                      },

                                      {
                                        id: v4(),
                                        title: "Ruby / Rails",
                                        pricing: {
                                          backend: {
                                            multiplier: 3,
                                          },
                                        },
                                      },

                                      {
                                        id: v4(),
                                        title: "Ruby / No preference",
                                        pricing: {
                                          backend: {
                                            multiplier: 3,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "Java / Spring",
                                        pricing: {
                                          backend: {
                                            multiplier: 3,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "Go / No preference",
                                        pricing: {
                                          backend: {
                                            multiplier: 3,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "C# / .NET",
                                        pricing: {
                                          backend: {
                                            multiplier: 4,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "Scala / No preference",
                                        pricing: {
                                          backend: {
                                            multiplier: 3,
                                          },
                                        },
                                      },
                                      {
                                        id: v4(),
                                        title: "Other",
                                        pricing: {
                                          backend: {
                                            multiplier: 4,
                                          },
                                        },
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },

                          {
                            id: v4(),
                            title: "Size of the backend",
                            description: "What size of backend do you need?",
                            type: SubsectionType.SCALE,
                            scale: [
                              {
                                label: "Small (-10 API endpoints)",
                                pricing: {
                                  backend: {
                                    extraDays: 0,
                                    errorMargin: 0.1,
                                  },
                                },
                              },
                              {
                                label: "Medium (10-20 API endpoints)",
                                pricing: {
                                  backend: {
                                    extraDays: 5,
                                    errorMargin: 0.15,
                                    multiplier: 1.1,
                                  },
                                },
                              },
                              {
                                label: "Large (20-50 API endpoints)",
                                pricing: {
                                  backend: {
                                    extraDays: 15,
                                    errorMargin: 0.25,
                                    multiplier: 1.2,
                                  },
                                },
                              },
                              {
                                label: "Very large (50+ API endpoints)",
                                pricing: {
                                  backend: {
                                    extraDays: 30,
                                    errorMargin: 0.4,
                                    multiplier: 1.3,
                                  },
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          },
          {
            id: v4(),
            title: "Data storage and management",
            description:
              "Do you need to make your data persistent? Content, user information, images, etc.",
            type: SubsectionType.BOOLEAN,
            true: {
              subsection: [
                {
                  id: v4(),
                  title: "Database",
                  description:
                    "A database is a collection of information that is organized so that it can be easily accessed, managed and updated.",

                  type: SubsectionType.BOOLEAN,
                  true: {
                    subsection: [
                      {
                        id: v4(),
                        title: "Type of database",
                        description: "What type of database do you need?",
                        type: SubsectionType.CHOICE_LIST,
                        choiceList: [
                          {
                            id: v4(),
                            title: "No preference",
                            pricing: {
                              storage: {
                                extraDays: 1.5,
                              },
                            },
                          },
                          {
                            id: v4(),
                            title: "PostgreSQL",
                            pricing: {
                              storage: {
                                extraDays: 1.5,
                              },
                            },
                          },
                          {
                            id: v4(),
                            title: "MySQL",
                            pricing: {
                              storage: {
                                extraDays: 1.5,
                              },
                            },
                          },
                          {
                            id: v4(),
                            title: "MongoDB",
                            pricing: {
                              storage: {
                                extraDays: 1.5,
                              },
                            },
                          },
                          {
                            id: v4(),
                            title: "Redis",
                            pricing: {
                              storage: {
                                extraDays: 1.5,
                              },
                            },
                          },
                          {
                            id: v4(),
                            title: "Other",
                            pricing: {
                              storage: {
                                extraDays: 1.5,
                              },
                            },
                          },
                        ],
                      },
                      {
                        id: v4(),
                        title: "Number of tables",
                        description:
                          "A table is a collection of related data held in a table format within a database. Each table should be about a specific entity, such as employees or products.",
                        type: SubsectionType.QUANTITY,
                        pricingPerUnit: {
                          storage: {
                            extraDays: 1,
                          },
                        },
                      },
                      {
                        id: v4(),
                        title: "Data encryption",
                        description:
                          "Data encryption translates data into another form, or code, so that only people with access to a secret key (formally called a decryption key) or password can read it.",
                        type: SubsectionType.BOOLEAN,
                        true: {
                          pricing: {
                            storage: {
                              extraDays: 1,
                              multiplier: 1.2,
                            },
                          },
                        },
                        false: {},
                      },
                    ],
                  },
                },
                {
                  id: v4(),
                  title: "Cloud storage",
                  description:
                    "Cloud storage is a cloud computing model that stores data on the Internet through a cloud computing provider who manages and operates data storage as a service.",
                  type: SubsectionType.BOOLEAN,
                  true: {
                    subsection: [
                      {
                        id: v4(),
                        title: "Which cloud storage provider?",
                        description:
                          "Cloud storage is a cloud computing model that stores data on the Internet through a cloud computing provider who manages and operates data storage as a service.",
                        type: SubsectionType.CHOICE_LIST,
                        choiceList: [
                          {
                            id: v4(),
                            title: "No preference",
                            pricing: {
                              storage: {
                                extraDays: 1.5,
                              },
                            },
                          },
                          {
                            id: v4(),
                            title: "AWS S3",
                            pricing: {
                              storage: {
                                extraDays: 1.5,
                              },
                            },
                          },
                          {
                            id: v4(),
                            title: "Google Cloud Storage",
                            pricing: {
                              storage: {
                                extraDays: 1.5,
                              },
                            },
                          },
                          {
                            id: v4(),
                            title: "Azure Blob Storage",
                            pricing: {
                              storage: {
                                extraDays: 1.5,
                              },
                            },
                          },
                          {
                            id: v4(),
                            title: "Other",
                            pricing: {
                              storage: {
                                extraDays: 1.5,
                              },
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
                {
                  id: v4(),
                  title: "Headless CMS",
                  description:
                    "A headless CMS is a back-end only content management system (CMS) built from the ground up as a content repository that makes content accessible via a RESTful API for display on any device.",

                  type: SubsectionType.BOOLEAN,
                  true: {
                    subsection: [
                      {
                        id: v4(),
                        title: "Which CMS?",
                        description: "What CMS do you need?",
                        type: SubsectionType.CHOICE_LIST,
                        choiceList: [
                          {
                            id: v4(),
                            title: "No preference",
                            pricing: {
                              storage: {
                                extraDays: 1.5,
                              },
                            },
                          },
                          {
                            id: v4(),
                            title: "Wordpress headless",
                            pricing: {
                              storage: {
                                extraDays: 1.5,
                              },
                            },
                          },
                          {
                            id: v4(),
                            title: "Sanity",
                            pricing: {
                              storage: {
                                extraDays: 1.5,
                              },
                            },
                          },
                          {
                            id: v4(),
                            title: "Contentful",
                            pricing: {
                              storage: {
                                extraDays: 1.5,
                              },
                            },
                          },
                          {
                            id: v4(),
                            title: "Strapi",
                            pricing: {
                              storage: {
                                extraDays: 1.5,
                              },
                            },
                          },
                          {
                            id: v4(),
                            title: "Other",
                            pricing: {
                              storage: {
                                extraDays: 1.5,
                              },
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
                {
                  id: v4(),
                  title: "Authentication",
                  description:
                    "Authenticate your users to provide them with a personalized experience.",
                  type: SubsectionType.BOOLEAN,
                  true: {
                    subsection: [
                      {
                        id: v4(),
                        title: "Which authentication method?",
                        description: "What authentication method do you need?",
                        type: SubsectionType.CHOICE_LIST,
                        pricing: {
                          authentication: {
                            extraDays: 1.5,
                          },
                        },
                        choiceList: [
                          {
                            id: v4(),
                            title: "No preference",
                          },
                          {
                            id: v4(),
                            title: "Email and password",
                          },
                          {
                            id: v4(),
                            title: "Social login only",
                          },
                          {
                            id: v4(),
                            title: "Social login and email and password",
                          },

                          {
                            id: v4(),
                            title: "Other",
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            false: {},
          },
          {
            id: v4(),
            title: "Monorepo",
            description:
              "A monorepo is a repository that contains multiple projects. It is a way to manage multiple projects in a single repository.",
            type: SubsectionType.BOOLEAN,
            true: {
              pricing: {
                architecture: {
                  extraDays: 1,
                },
              },
            },
            false: {},
          },
        ],
      },
      {
        id: v4(),
        title: "Optimization and performance",
        description:
          "Optimize your application to improve its performance, SEO, or it environmental impact.",
        type: SubsectionType.DEFAULT,
        subsection: [
          {
            id: v4(),
            title: "SEO optimization",
            description:
              "SEO optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.",
            type: SubsectionType.BOOLEAN,
            true: {
              subsection: [
                {
                  id: v4(),
                  title: "Content optimization",
                  description:
                    "Optimize your content to stand out in the given market trends.",
                  type: SubsectionType.SCALE,
                  scale: {
                    0: {
                      label: "No optimization",
                      pricing: {},
                    },
                    1: {
                      label: "Simple optimization",
                      pricing: {
                        frontend: {
                          extraDays: 0.5,
                        },
                      },
                    },
                    2: {
                      label: "Advanced optimization",
                      pricing: {
                        frontend: {
                          extraDays: 1.5,
                        },
                      },
                    },
                    3: {
                      label: "Expert optimization",
                      pricing: {
                        frontend: {
                          extraDays: 5,
                        },
                      },
                    },
                  },
                },
                {
                  id: v4(),
                  title: "Code optimization",
                  description:
                    "Optimize your code to help search engines understand your website.",
                  type: SubsectionType.SCALE,
                  scale: {
                    0: {
                      label: "No optimization",
                      pricing: {},
                    },
                    1: {
                      label: "Simple optimization",
                      pricing: {
                        frontend: {
                          multiplier: 1.05,
                        },
                      },
                    },
                    2: {
                      label: "Advanced optimization",
                      pricing: {
                        frontend: {
                          multiplier: 1.2,
                        },
                      },
                    },
                    3: {
                      label: "Expert optimization",
                      pricing: {
                        frontend: {
                          multiplier: 1.3,
                        },
                      },
                    },
                  },
                },
              ],
            },
            false: {},
          },
          {
            id: v4(),
            title: "Green IT optimization",
            description:
              "Optimize your website to make better your environmental impact. We realize for you an audit of your website to find the best way to reduce its energy consumption.",
            type: SubsectionType.BOOLEAN,
            true: {
              subsection: [
                {
                  id: v4(),
                  title: "Perfomance optimization",
                  description:
                    "Optimize your website to reduce its energy consumption.",

                  type: SubsectionType.SCALE,
                  scale: {
                    0: {
                      label: "No optimization",
                      pricing: {},
                    },
                    1: {
                      label: "Simple optimization",
                      pricing: {
                        frontend: {
                          extraDays: 0.5,
                        },
                      },
                    },
                    2: {
                      label: "Advanced optimization",
                      pricing: {
                        frontend: {
                          extraDays: 1.5,
                        },
                      },
                    },
                    3: {
                      label: "Expert optimization",
                      pricing: {
                        frontend: {
                          extraDays: 5,
                        },
                      },
                    },
                  },
                },
              ],
            },
            false: {},
          },
        ],
      },
      {
        id: v4(),
        title: "Infrastructure and deployment",
        description:
          "Infrastructure and deployment are the processes and services required to manage the software that powers your application.",
        type: SubsectionType.DEFAULT,
        subsection: [
          {
            id: v4(),
            title: "DevOps",
            description:
              "DevOps is a set of practices that combines software development and IT operations.",
            type: SubsectionType.DEFAULT,
            subsection: [
              {
                id: v4(),
                title: "Continuous integration",
                description:
                  "Continuous integration is the practice of automating the integration of code changes from multiple contributors into a single software project.",
                type: SubsectionType.BOOLEAN,
                true: {
                  pricing: {
                    backend: {
                      extraDays: 2,
                    },
                    frontend: {
                      extraDays: 2,
                    },
                  },
                },
                false: {},
              },
            ],
          },
          {
            id: v4(),
            title: "Cloud",
            description:
              "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.",
            type: SubsectionType.DEFAULT,
            subsection: [
              {
                id: v4(),
                title: "Cloud hosting",
                description:
                  "Do you need script and instruction to deploy the application?",
                type: SubsectionType.BOOLEAN,
                true: {
                  subsection: [
                    {
                      id: v4(),
                      title: "Type of cloud hosting",
                      description: "What kind of cloud hosting do you need?",
                      type: SubsectionType.CHOICE_LIST,
                      choiceList: [
                        {
                          id: v4(),
                          title: "No preference",
                          pricing: {
                            infrastructureAndDeployment: {
                              extraDays: 2,
                            },
                          },
                        },
                        {
                          id: v4(),
                          title: "AWS",
                          pricing: {
                            infrastructureAndDeployment: {
                              extraDays: 2,
                            },
                          },
                        },
                        {
                          id: v4(),
                          title: "Microsoft Azure",
                          pricing: {
                            infrastructureAndDeployment: {
                              extraDays: 3,
                            },
                          },
                        },
                        {
                          id: v4(),
                          title: "Google Cloud",
                          pricing: {
                            infrastructureAndDeployment: {
                              extraDays: 2,
                            },
                          },
                        },
                        {
                          id: v4(),
                          title: "Versel",
                          pricing: {
                            infrastructureAndDeployment: {
                              extraDays: 2,
                            },
                          },
                        },
                        {
                          id: v4(),
                          title: "Heroku",
                          pricing: {
                            infrastructureAndDeployment: {
                              extraDays: 3,
                            },
                          },
                        },
                        {
                          id: v4(),
                          title: "Digital Ocean",
                          pricing: {
                            infrastructureAndDeployment: {
                              extraDays: 2,
                            },
                          },
                        },
                        {
                          id: v4(),
                          title: "Other",
                          pricing: {
                            infrastructureAndDeployment: {
                              extraDays: 4,
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
                false: {},
              },
            ],
          },
        ],
      },
      {
        id: v4(),
        title: "Design and UX",
        description:
          "Do you need an expert to help you design your application?",
        type: SubsectionType.BOOLEAN,
        true: {
          subsection: [
            {
              id: v4(),
              title: "Figma design",
              description: "What kind of Figma design service do you need?",
              type: SubsectionType.CHOICE_LIST,
              choiceList: [
                {
                  id: v4(),
                  title: "None",
                  pricing: {
                    design: {
                      extraDays: 0,
                    },
                  },
                },
                {
                  id: v4(),
                  title: "Review and feedback",
                  pricing: {
                    design: {
                      extraDays: 4,
                    },
                  },
                },
                {
                  id: v4(),
                  title: "All templates",
                  pricing: {
                    design: {
                      extraDays: 15,
                    },
                  },
                },
              ],
            },
          ],
        },
        false: {},
      },
      {
        id: v4(),
        title: "Testing and Quality Assurance",
        description:
          "Be sure that your code is working as expected by testing each pieces of code.",
        type: SubsectionType.DEFAULT,
        subsection: [
          {
            id: v4(),
            title: "Unit testing",
            description:
              "Unit testing is a software testing method by which individual units of source code are tested to determine whether they are fit for use.",
            type: SubsectionType.SCALE,
            scale: {
              0: {
                label: "No unit test",
                pricing: {},
              },
              1: {
                label: "Essencials tests (15% code coverage)",
                pricing: {
                  backend: {
                    multiplier: 1.15,
                  },
                  frontend: {
                    multiplier: 1.15,
                  },
                },
              },
              2: {
                label: "Advanced tests (30% code coverage)",
                pricing: {
                  backend: {
                    multiplier: 1.2,
                  },
                  frontend: {
                    multiplier: 1.2,
                  },
                },
              },
              3: {
                label: "Strong tests (60% code coverage)",
                pricing: {
                  backend: {
                    multiplier: 1.6,
                  },
                  frontend: {
                    multiplier: 1.6,
                  },
                },
              },
              4: {
                label: "Full test (more than 90% code coverage)",
                pricing: {
                  backend: {
                    multiplier: 1.7,
                  },
                  frontend: {
                    multiplier: 1.7,
                  },
                },
              },
            },
          },
          {
            id: v4(),
            title: "End to end testing",
            description:
              "End-to-end testing is a technique used to test whether the flow of an application is performing as designed from start to finish.",

            type: SubsectionType.SCALE,
            scale: {
              0: {
                label: "No E2E test",
                pricing: {},
              },
              1: {
                label: "Essencials E2E test (1 workflow tested)",
                pricing: {
                  backend: {
                    multiplier: 1.15,
                  },
                  frontend: {
                    multiplier: 1.15,
                  },
                },
              },
              2: {
                label: "Advanced E2E test (10 workflows tested)",
                pricing: {
                  backend: {
                    multiplier: 1.2,
                  },
                  frontend: {
                    multiplier: 1.2,
                  },
                },
              },
              3: {
                label: "Full E2E test (each workflow tested)",
                pricing: {
                  backend: {
                    multiplier: 1.7,
                  },
                  frontend: {
                    multiplier: 1.7,
                  },
                },
              },
            },
          },
        ],
      },
      {
        id: v4(),
        title: "Security analysis",
        description:
          "Security is the protection of your application against malicious attacks.",
        type: SubsectionType.BOOLEAN,
        true: {
          subsection: [
            {
              id: v4(),
              title: "Penetration testing",
              description:
                "Penetration testing, also known as pen testing, is a simulated cyber attack against your computer system to check for exploitable vulnerabilities.",
              type: SubsectionType.BOOLEAN,
              true: {
                pricing: {
                  security: {
                    extraDays: 5,
                  },
                },
              },
              false: {},
            },
          ],
        },
        false: {},
      },
      {
        id: v4(),
        title: "Analytics",
        description:
          "Analytics is the discovery and communication of meaningful patterns in data.",
        type: SubsectionType.BOOLEAN,
        true: {
          pricing: {
            analytics: {
              extraDays: 3,
            },
          },
          subsection: [
            {
              id: v4(),
              title: "Portion of the website to track",
              description: "What portion of the website do you want to track?",
              type: SubsectionType.CHOICE_LIST,
              choiceList: [
                {
                  id: v4(),
                  title: "Less than 3 pricipal actions",
                  pricing: {
                    analytics: {
                      extraDays: 0.5,
                    },
                  },
                },
                {
                  id: v4(),
                  title: "Between 3 and 10 actions",
                  pricing: {
                    analytics: {
                      extraDays: 1.5,
                    },
                  },
                },
                {
                  id: v4(),
                  title: "Between 11 and 40 actions",
                  pricing: {
                    analytics: {
                      extraDays: 3,
                    },
                  },
                },
                {
                  id: v4(),
                  title: "Between 41 and 100 actions",
                  pricing: {
                    analytics: {
                      extraDays: 5,
                    },
                  },
                },
              ],
            },
          ],
        },
        false: {},
      },
      {
        id: v4(),
        title: "Maintenance",
        description:
          "Do you need a maintenance service to keep your application up to date, or solve possible bugs, or risk?",
        type: SubsectionType.BOOLEAN,
        true: {
          subsection: [
            {
              id: v4(),
              title: "Maintenance duration",
              description: "How long do you need the maintenance service?",
              type: SubsectionType.CHOICE_LIST,
              choiceList: [
                {
                  id: v4(),
                  title: "3 months",
                  pricing: {
                    maintenance: {
                      extraDays: 0,
                    },
                  },
                },
                {
                  id: v4(),
                  title: "6 months",

                  pricing: {
                    maintenance: {
                      extraDays: 2,
                    },
                  },
                },
                {
                  id: v4(),
                  title: "12 months",
                  pricing: {
                    maintenance: {
                      extraDays: 4,
                    },
                  },
                },
                {
                  id: v4(),
                  title: "24 months",
                  pricing: {
                    maintenance: {
                      extraDays: 6,
                    },
                  },
                },
                {
                  id: v4(),
                  title: "36 months",
                  pricing: {
                    maintenance: {
                      extraDays: 8,
                    },
                  },
                },
              ],
            },
          ],
        },
        false: {},
      },
    ],
  },
  es: {
    dailyCost: 700,
    service: [],
  },
  fr: {
    dailyCost: 700,
    service: [],
  },
  de: {
    dailyCost: 700,
    service: [],
  },
};
