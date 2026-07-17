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
  eyebrow: "Software Developer",
  headline: [
    { text: "I design and ship ", accent: false },
    { text: "scalable systems", accent: true },
    { text: " with MERN, PERN & Prisma.", accent: false },
  ],
  sub: "From database schema to deployed infrastructure — I build backend services and frontend interfaces that stay clean, testable, and maintainable as they grow.",
  primaryCta: "Let's Build",
  secondaryCta: "Download Resume",
};

export const about = {
  sectionNum: "01 / About",
  title: [
    { text: "Engineering with ", accent: false },
    { text: "purpose", accent: true },
    { text: ", built to scale.", accent: false },
  ],

  meta: [
    { label: "Role", value: "Full-Stack Developer" },
    { label: "Focus", value: "Backend Architecture & Scalable Systems" },
    { label: "Stack", value: "React · Node.js · PostgreSQL · MongoDB" },
    { label: "Status", value: "Open to Opportunities" },
  ],

  paragraphs: [
    "I'm a Full-Stack MERN Developer who enjoys building applications that are reliable, maintainable, and easy to extend. My primary focus is backend engineering—designing RESTful APIs, modeling databases with PostgreSQL, MongoDB, and Prisma, and creating clean application architectures using SOLID principles and separation of concerns. Rather than writing code that simply works, I aim to build systems that remain understandable and scalable as projects evolve.",

    "Beyond application development, I'm continuously expanding my understanding of software engineering fundamentals. I actively study system design, design patterns, computer architecture, and operating system concepts to strengthen the way I design software. I also work with Docker, Redis, testing using Jest and Supertest, Git-based workflows, and modern deployment platforms. I believe good software is created through thoughtful architecture, clean code, continuous learning, and attention to long-term maintainability—not by relying on shortcuts.",
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
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
    },

    {
      label: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "React Router",
      ],
    },

    {
      label: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "RESTful API Design",
        "JWT Authentication",
        "MVC Architecture",
      ],
    },

    {
      label: "Database",
      items: ["MongoDB", "PostgreSQL", "Prisma ORM", "Redis"],
    },

    {
      label: "Testing",
      items: ["Jest", "Supertest", "Postman"],
    },

    {
      label: "Tools",
      items: ["Git", "GitHub", "Docker", "Render", "Railway", "NPM"],
    },

    {
      label: "Engineering",
      items: [
        "SOLID Principles",
        "Design Patterns",
        "System Design",
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

  liveHref: "https://your-live-demo.com",

  repoHref: "https://github.com/your-username/fishingtripper",

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
