import techStack from "./techStack";
const projects = [
  {
    id: 1,
    featured: true,
    typeKey: "studio",
    title: "projects.sawyerCampDevlab.title",
    description: "projects.sawyerCampDevlab.description",
    longDescription: "projects.sawyerCampDevlab.longDescription",
    features: "projects.sawyerCampDevlab.features",
    contributions: "projects.sawyerCampDevlab.contributions",
    meta: "projects.sawyerCampDevlab.meta",
    imageSrc:
      "https://ik.imagekit.io/thormars/portfolio/sawyer-camp-devlab-admin-portal.png",
    carousel: [
      {
        imageSrc:
          "https://ik.imagekit.io/thormars/portfolio/sawyer-camp-devlab-admin-portal.png",
        alt: "Sawyer Camp DevLab Admin Portal",
      },
      {
        imageSrc:
          "https://ik.imagekit.io/thormars/portfolio/client-portal-dashboard.png",
        alt: "Sawyer Camp DevLab Client Portal Dashboard",
      },
      {
        imageSrc:
          "https://ik.imagekit.io/thormars/portfolio/client-portal-billing.png",
        alt: "Sawyer Camp DevLab Client Portal Billing",
      },
      {
        imageSrc:
          "https://ik.imagekit.io/thormars/portfolio/client-portal-settings.png",
        alt: "Sawyer Camp DevLab Client Portal Settings",
      },
    ],
    link: "https://www.sawyercamp.com",
    github: "",
    stack: [
      "Next.js",
      "NextAuth",
      "Prisma",
      "Docker",
      "TypeScript",
      "Chakra UI",
      "Vercel",
    ],
  },
  {
    id: 2,
    featured: true,
    typeKey: "clientWork",
    title: "projects.mosesUdohPortfolio.title",
    description: "projects.mosesUdohPortfolio.description",
    longDescription: "projects.mosesUdohPortfolio.longDescription",
    features: "projects.mosesUdohPortfolio.features",
    contributions: "projects.mosesUdohPortfolio.contributions",
    meta: "projects.mosesUdohPortfolio.meta",
    imageSrc:
      "https://ik.imagekit.io/thormars/portfolio/moses-udoh-portfolio.png",
    carousel: [
      {
        imageSrc:
          "https://ik.imagekit.io/thormars/portfolio/moses-udoh-portfolio.png",
        alt: "Moses Udoh Homepage",
      },
      {
        imageSrc: "https://ik.imagekit.io/thormars/portfolio/moses-about.png",
        alt: "Moses Udoh About",
      },
      {
        imageSrc:
          "https://ik.imagekit.io/thormars/portfolio/moses-selected-work.png",
        alt: "Moses Udoh Selected Work",
      },
      {
        imageSrc:
          "https://ik.imagekit.io/thormars/portfolio/moses-portfolio.png",
        alt: "Moses Udoh Porfolio",
      },
    ],
    link: "https://www.mosesudoh.com",
    github: "",
    stack: [
      "Next.js",
      "React",
      "Chakra UI",
      "Framer Motion",
      "Vercel",
      "TypeScript",
    ],
  },
  {
    id: 3,
    featured: true,
    typeKey: "openSource",
    title: "projects.guidefox.title",
    description: "projects.guidefox.description",
    longDescription: "projects.guidefox.longDescription",
    features: "projects.guidefox.features",
    showContributions: true,
    contributions: "projects.guidefox.contributions",
    meta: "projects.guidefox.meta",
    tech: "projects.guidefox.tech",
    imageSrc: "https://ik.imagekit.io/thormars/portfolio/guidefox-main.png",
    carousel: [
      {
        imageSrc: "https://ik.imagekit.io/thormars/portfolio/guidefox-main.png",
        alt: "Guidefox Dashboard",
      },
      {
        imageSrc: "https://ik.imagekit.io/thormars/portfolio/tour-content.png",
        alt: "Guidefox Add Tour",
      },
      {
        imageSrc:
          "https://ik.imagekit.io/thormars/portfolio/helper-link-create.png",
        alt: "Guidefox Create Helper Link",
      },
      {
        imageSrc: "https://ik.imagekit.io/thormars/portfolio/settings-main.png",
        alt: "Guidefox User Settings",
      },
    ],
    link: "https://guidefox.thomastepi.com/demo-login",
    github:
      "https://github.com/bluewave-labs/bluewave-onboarding/commits?author=thomastepi",
    stack: techStack["Guidefox"],
  },
  {
    id: 4,
    featured: true,
    typeKey: "personalProject",
    title: "projects.resumeBuilder.title",
    description: "projects.resumeBuilder.description",
    longDescription: "projects.resumeBuilder.longDescription",
    features: "projects.resumeBuilder.features",
    contributions: "projects.resumeBuilder.contributions",
    meta: "projects.resumeBuilder.meta",
    tech: "projects.resumeBuilder.tech",
    imageSrc:
      "https://ik.imagekit.io/thormars/ResumeCraft/resumeCraft-thumbnail.png",
    carousel: [
      {
        imageSrc:
          "https://ik.imagekit.io/thormars/ResumeCraft/resumeCraft-thumbnail.png",
        alt: "Resume Craft Landing Page",
      },
      {
        imageSrc:
          "https://ik.imagekit.io/thormars/portfolio/resume-craft-home.png",
        alt: "Resume Craft Home Page",
      },
      {
        imageSrc:
          "https://ik.imagekit.io/thormars/portfolio/resume-craft-ai-toolkit-dashboard.png",
        alt: "Resume Craft AI Toolkit Dashboard",
      },
      {
        imageSrc:
          "https://ik.imagekit.io/thormars/portfolio/resume-craft-ai-toolkit.png",
        alt: "https://ik.imagekit.io/thormars/portfolio/resume-craft-ai-toolkit-analyzer.png",
      },
    ],
    link: "https://resumecraft.thomastepi.com/",
    github: "https://github.com/thomastepi/resume-craft.git",
    stack: techStack["Resume Craft"],
  },
  {
    id: 5,
    // featured: true,
    typeKey: "clientWork",
    title: "projects.sawyerCamp.title",
    description: "projects.sawyerCamp.description",
    longDescription: "projects.sawyerCamp.longDescription",
    features: "projects.sawyerCamp.features",
    contributions: "projects.sawyerCamp.contributions",
    meta: "projects.sawyerCamp.meta",
    tech: "projects.sawyerCamp.tech",
    imageSrc:
      "https://ik.imagekit.io/thormars/Sawyer-Camp/sawyer-camp-thumbnail.png",
    carousel: [
      {
        imageSrc:
          "https://ik.imagekit.io/thormars/Sawyer-Camp/sawyer-camp-thumbnail.png",
        alt: "Sawyer Camp Farmers Homepage",
      },
      {
        imageSrc:
          "https://ik.imagekit.io/thormars/portfolio/sawyer-camp-farmers-ai-lab.png",
        alt: "Sawyer Camp Farmers AI Lab",
      },
      {
        imageSrc:
          "https://ik.imagekit.io/thormars/portfolio/ai-lab-farm-doctor.png",
        alt: "Sawyer Camp Farmers AI Lab Farm Doctor",
      },
      {
        imageSrc: "https://ik.imagekit.io/thormars/portfolio/donate.png",
        alt: "Sawyer Camp Farmers Donate",
      },
    ],
    link: "https://sawyercampfarmers.org/",
    // github: "https://github.com/thomastepi/sawyer-camp-next-app",
    github: "",
    stack: techStack["Sawyer Camp"],
  },
  {
    id: 6,
    typeKey: "personalProject",
    title: "projects.beautySpa.title",
    description: "projects.beautySpa.description",
    longDescription: "projects.beautySpa.longDescription",
    features: "projects.beautySpa.features",
    contributions: "projects.beautySpa.contributions",
    meta: "projects.beautySpa.meta",
    tech: "projects.beautySpa.tech",
    imageSrc: "https://ik.imagekit.io/thormars/portfolio/annette-hero.png",
    carousel: [
      {
        imageSrc: "https://ik.imagekit.io/thormars/portfolio/annette-hero.png",
        alt: "Annette Landing Page",
      },
      {
        imageSrc:
          "https://ik.imagekit.io/thormars/portfolio/personalize-gift-card.png",
        alt: "Annette Personalize Gift Card",
      },
      {
        imageSrc: "https://ik.imagekit.io/thormars/portfolio/cart.png",
        alt: "Annette Cart",
      },
      {
        imageSrc:
          "https://ik.imagekit.io/thormars/portfolio/annette-contact-us.png",
        alt: "Annette Contact Us",
      },
    ],
    link: "https://annette.thomastepi.com/",
    github: "https://github.com/thomastepi/beauty-salon-react-app.git",
    stack: techStack["Annette"],
  },
  // {
  //   id: 5,
  //   typeKey: "personalProject",
  //   title: "projects.bookMart.title",
  //   description: "projects.bookMart.description",
  //   longDescription: "projects.bookMart.longDescription",
  //   features: "projects.bookMart.features",
  //   contributions: "projects.bookMart.contributions",
  //   meta: "projects.bookMart.meta",
  //   imageSrc: "https://ik.imagekit.io/thormars/portfolio/bookmart.png",
  //   link: "https://bookmart.thomastepi.com",
  //   github: "https://github.com/thomastepi/book-mart-react-app.git",
  //   stack: techStack["BookMart"],
  // },
];

export default projects;
