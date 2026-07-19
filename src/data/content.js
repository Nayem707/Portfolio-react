export const nav = {
  logo: "NAYEM ISLAM",
  links: [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  resumeHref: "/NAYEM ISLAM RESUME.pdf",
};

export const hero = {
  eyebrow: "👋 Hello There!",
  headline: [
    { text: "I design and ship ", accent: false },
    { text: "scalable systems", accent: true },
    { text: " with MERN.", accent: false },
  ],
  sub: "From database schema to deployed infrastructure — I build backend services and frontend interfaces that stay clean, testable, and maintainable as they grow.",
  primaryCta: "Case Study",
  secondaryCta: "Get Resume",
};

export const about = {
  sectionNum: "01 / About",
  title: [
    { text: "Engineering with ", accent: false },
    { text: "purpose", accent: true },
    { text: ", built to scale.", accent: false },
  ],

  meta: [
    { label: "Role", value: "Softwere Developer" },
    { label: "Focus", value: "Architecture & Scalable Systems" },
    { label: "Stack", value: "MERN" },
    { label: "Status", value: "Open to Opportunities" },
  ],

  paragraphs: [
    "I'm a Software Developer specializing in the MERN stack who enjoys building applications that are reliable, maintainable, and easy to extend. My primary focus is backend engineering—designing RESTful APIs, modeling relational and non-relational databases using PostgreSQL, MongoDB, and Prisma, and creating clean application architectures driven by SOLID principles and strict separation of concerns. Rather than writing code that simply works, I aim to build systems that remain understandable and performant as business logic evolves.",

    "Beyond daily features, I'm deeply committed to computer science fundamentals. I actively study system design, software engineering patterns, computer architecture, and operating system concepts to write optimized and reliable software. My practical toolkit includes containerization with Docker, API caching via Redis, integration testing with Jest/Supertest, and Git-driven team workflows. I believe that sustainable software is the outcome of thoughtful architecture, comprehensive test coverage, and a refusal to rely on shortcuts.",
  ],
};

export const skills = {
  sectionNum: "02 / Stack",
  title: [
    { text: "Technical ", accent: false },
    { text: "Toolkit", accent: true },
  ],

  categories: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript (ES6+)", "SQL", "Python"],
    },
    {
      label: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "Shadcn UI",
      ],
    },
    {
      label: "Backend",
      items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
    },
    {
      label: "Databases",
      items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis"],
    },
    {
      label: "Cloud",
      items: ["AWS", "Azure", "Railway", "Render"],
    },
    {
      label: "DevOps",
      items: ["Docker", "Kubernetes", "Coolify", "Nginx"],
    },
    {
      label: "Testing",
      items: ["Jest", "Supertest", "Postman", "QA"],
    },
    {
      label: "Developer Tools",
      items: ["Git", "GitHub", "Github Action", "NPM"],
    },
    {
      label: "Architecture & Design",
      items: [
        "System Design",
        "Design Patterns",
        "SOLID Principles",
        "Clean Code",
      ],
    },
  ],
};

export const project = {
  sectionNum: "03 / Featured Project",

  title: [
    { text: "Featured ", accent: false },
    { text: "Case Study", accent: true },
  ],

  name: "FishingTripper",

  description:
    "A full-stack boat charter booking platform designed to simplify online reservations, secure payments, and trip management for customers, captains, and administrators.",

  liveHref: "https://fishingtripper.com/",

  repoHref: "https://github.com/Nayem707",

  tags: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Prisma ORM",
    "Redis",
    "Stripe",
    "Docker",
    "JWT",
    "Tailwind CSS",
  ],

  overview:
    "FishingTripper is a modern full-stack booking platform that connects customers with fishing charter services. The application streamlines the complete booking lifecycle—from discovering trips and scheduling reservations to secure online payments and administrative management—all through a responsive and scalable web application.",

  problem:
    "Many charter operators still rely on manual booking processes, phone calls, spreadsheets, and disconnected payment workflows. These approaches make reservation management, payment tracking, and customer communication inefficient while increasing the risk of scheduling conflicts and operational errors.",

  solution: [
    "Developed a complete booking platform using ",
    { code: "React.js" },
    " for the frontend and ",
    { code: "Node.js" },
    " with ",
    { code: "Express.js" },
    " for the backend. Data is managed using ",
    { code: "MongoDB" },
    " through ",
    { code: "Prisma ORM" },
    ". Implemented ",
    { code: "JWT Authentication" },
    " for secure user access, integrated ",
    { code: "Stripe" },
    " for online payments, and introduced ",
    { code: "Redis" },
    " caching to improve API performance. The application is containerized using ",
    { code: "Docker" },
    " to provide a consistent development and deployment environment.",
  ],

  architecture: [
    "RESTful API Architecture",
    "MVC Project Structure",
    "JWT Authentication & Authorization",
    "Redis Caching Layer",
    "Prisma ORM",
    "Role-Based Access Control",
  ],

  features: [
    "Customer, Captain & Admin Dashboards",
    "Secure JWT Authentication",
    "Stripe Payment Integration",
    "Booking & Reservation Management",
    "Captain Approval Workflow",
    "Role-Based Authorization",
    "Redis API Caching",
    "Responsive Mobile-First UI",
    "RESTful API Design",
    "Dockerized Development Environment",
  ],

  engineering: [
    "Designed scalable REST APIs following separation of concerns.",
    "Applied SOLID principles throughout backend development.",
    "Structured backend using modular controllers, services, and middleware.",
    "Implemented centralized error handling and validation.",
    "Optimized frequently accessed endpoints using Redis caching.",
    "Maintained clean project structure for long-term maintainability.",
  ],

  techHighlights: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Prisma ORM",
    "Redis",
    "Stripe",
    "Docker",
    "Tailwind CSS",
    "JWT",
  ],

  outcome:
    "Delivered a production-ready full-stack booking platform with secure authentication, online payment processing, modular backend architecture, and a maintainable codebase designed for future feature expansion.",

  lessons: [
    "Designing scalable REST APIs",
    "Database modeling with Prisma",
    "Payment gateway integration",
    "Redis caching strategies",
    "Backend architecture planning",
    "Docker-based development workflow",
  ],

  moreNote:
    "Additional case studies featuring AI-powered applications, REST API architecture, Dockerized backend services, and automation tools are currently being prepared.",
};

export const contact = {
  stamp: "OPEN TO WORK",
  heading: "Let's Build Something Together",
  body: "I'm always open to conversations about new opportunities, technical challenges, or collaborations where solid architecture and clean code make the difference. If you're looking for a developer who treats your codebase with the same care as their own, let's talk.",
  links: [
    { label: "Email ↗", href: "mailto:inaeem707@gmail.com" },
    {
      label: "WhatsApp ↗",
      href: "https://wa.me/8801777941513?text=Hi%20Nayem,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
    },
    {
      label: "LinkedIn ↗",
      href: "https://www.linkedin.com/in/naeem-islam-260522381/",
    },
    { label: "GitHub ↗", href: "https://github.com/Nayem707" },
  ],
};

export const footer = {
  left: "© 2026 Nayem Islam — Software Developer",
  right: "Built with React · Node.js · Prisma",
};

export const schema = {
  tag: "FIG. 01 — SCHEMA",
  rev: "REV A",
  tables: [
    {
      name: "User",
      x: 30,
      y: 30,
      w: 140,
      h: 80,
      fields: [
        { text: "id · PK", pk: true },
        { text: "email · unique" },
        { text: "role" },
      ],
    },
    {
      name: "Project",
      x: 30,
      y: 150,
      w: 140,
      h: 90,
      fields: [
        { text: "id · PK", pk: true },
        { text: "ownerId · FK" },
        { text: "status" },
      ],
    },
    {
      name: "Session",
      x: 290,
      y: 190,
      w: 140,
      h: 80,
      fields: [{ text: "id · PK", pk: true }, { text: "userId · FK" }],
    },
    {
      name: "Post",
      x: 250,
      y: 70,
      w: 140,
      h: 80,
      fields: [{ text: "id · PK", pk: true }, { text: "Create · FK" }],
    },
  ],
};
