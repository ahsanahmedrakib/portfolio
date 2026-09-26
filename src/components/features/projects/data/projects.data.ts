export type Project = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  year: string;
  language: string;
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  stack: string[];
  gradient: string;
  monogram: string;
  overview: string[];
  role: string[];
  responsibilities: string[];
  features: string[];
  architecture?: string[];
  highlights: { title: string; description: string }[];
  impact?: string;
};

export const projects: Project[] = [
  {
    slug: "ahead-solar-cms",
    name: "Ahead Solar BD — Corporate CMS Website",
    shortName: "Ahead Solar BD",
    tagline:
      "Full-stack, CMS-driven corporate website for a leading solar energy company — with a dark-themed admin dashboard, bilingual support and a custom file-based backend.",
    category: "Corporate Website & CMS",
    year: "2026",
    language: "Next Js",
    image: "/projects/ast.png",
    liveUrl: "https://solar-sigma-weld.vercel.app/",
    repoUrl: "https://github.com/ahsanahmedrakib/solar",
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "TypeScript",
      "Swiper",
      "Tiptap",
      "JWT",
      "bcrypt",
    ],
    gradient: "from-cyan-500 via-sky-500 to-violet-500",
    monogram: "AS",
    overview: [
      "Ahead Solar BD is a complete corporate website with a built-in content management system (CMS) that lets administrators manage all site content — services, projects, team members, hero slides, reviews, settings, and more — through a dark-themed admin dashboard. The site supports bilingual content (English and Bangla) for certain forms and features a custom file-based storage engine with JSON persistence — so no external database is required.",
      "Built on the modern Next.js 16 App Router with React 19 and Tailwind CSS v4, the codebase is organized for performance and maintainability, with dynamic metadata, structured data, and an auto-generated sitemap out of the box.",
    ],
    role: [
      "End-to-end design, architecture, and implementation of the full-stack application — public website plus admin CMS.",
      "Designed the custom file-based JSON storage engine that replaces a traditional database while keeping CRUD operations fast and portable.",
      "Implemented secure authentication with JWT access & refresh tokens, bcrypt hashing, and httpOnly cookies.",
    ],
    responsibilities: [
      "Public website: all marketing pages, filterable projects portfolio, service detail pages, about and team pages, contact with validated forms.",
      "Admin CMS: full CRUD management for hero slides, services, projects, team, reviews, contact submissions, site settings, and admin users.",
      "Media handling: image/video upload with automatic cleanup of replaced files.",
      "SEO & analytics: per-page generateMetadata, JSON-LD structured data, sitemap.xml, and an analytics dashboard.",
    ],
    features: [
      "Hero slider with Swiper, Ken Burns zoom animation, word-by-word title reveal, and staggered text transitions.",
      "Services pages with rich-text (Tiptap editor) descriptions, image galleries, and individual detail pages.",
      "Filterable project portfolio with category tags, featured badges, multi-image sliders, and detail pages.",
      "Palash Charging Station — a dedicated sub-brand page with a custom color theme overriding the main cyan brand.",
      "Floating chat widget with animated entrance and idle bob animation.",
      "Scroll-reveal animations (fade, zoom, slide-left, slide-right, scale) driven by Intersection Observer.",
      "JWT-based auth with access + refresh tokens, bcrypt password hashing, httpOnly cookies.",
      "File-based media management with auto-cleanup of replaced files.",
      "Dynamic generateMetadata per page, JSON-LD structured data, and auto-generated sitemap.xml.",
      "Contact form with server-side validation and rate limiting.",
    ],
    highlights: [
      {
        title: "Zero-database architecture",
        description:
          "A custom JSON persistence layer powers the entire CMS — fast, portable, and deployable anywhere without provisioning a database.",
      },
      {
        title: "Enterprise-grade auth",
        description:
          "Access + refresh token flow with bcrypt hashing and httpOnly cookies to secure the admin dashboard.",
      },
      {
        title: "Bilingual by design",
        description:
          "English and Bangla content support baked into forms and content structures from day one.",
      },
    ],
    impact:
      "Shipped a production corporate site + CMS that the client manages entirely on their own — content, media, and SEO, with zero database infrastructure to maintain.",
  },
  {
    slug: "bismillah-computer-technology",
    name: "Bismillah Computer & Technology",
    shortName: "Bismillah IT",
    tagline:
      "A modern corporate website for a comprehensive IT solutions provider — web design, cloud services, voice systems, internet connectivity, and managed IT support.",
    category: "Corporate Website",
    year: "2026",
    language: "Next Js",
    image: "/projects/bctt.png",
    liveUrl: "https://bismillah-it.vercel.app/",
    repoUrl: "https://github.com/ahsanahmedrakib/bismillah-it",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "lucide-react",
      "Swiper",
      "tsparticles",
    ],
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    monogram: "BC",
    overview: [
      "Bismillah Computer & Technology (BCT) is a comprehensive IT solutions provider offering web design, cloud services, voice systems, internet connectivity, and managed IT support. This project delivers a polished, animated corporate website that communicates that full range of services to prospective clients.",
      "The site is built on the Next.js App Router with React 19, TypeScript, and Tailwind CSS v4. It ships with a custom Node.js server for production and uses pnpm for fast, reliable dependency management.",
    ],
    role: [
      "Architected and built the entire Next.js App Router application from scratch.",
      "Designed the Tailwind CSS v4 design system, motion language, and component structure.",
    ],
    responsibilities: [
      "Page routes and layouts for all public sections of the company site.",
      "Integration of particle-based background effects and Swiper sliders.",
      "Production server setup with HOSTNAME and PORT environment variable support.",
    ],
    features: [
      "Modern corporate UI with React 19 server components and Tailwind CSS v4.",
      "Interactive particle backgrounds via react-tsparticles.",
      "Swiper-driven sliders and carousels.",
      "Custom HTTP production server with environment-based hostname/port configuration.",
      "ESLint-backed code quality with pnpm scripts for dev, build, start, and lint.",
    ],
    highlights: [
      {
        title: "Animated, engaging UI",
        description:
          "Particle effects and sliders bring the corporate brand to life without hurting performance.",
      },
      {
        title: "Production ready",
        description:
          "Custom server.js serves the production build, supporting HOSTNAME and PORT for flexible deployment.",
      },
      {
        title: "Modular workflow",
        description:
          "pnpm-first project with clean, documented scripts and a scaffolded structure that's easy to extend.",
      },
    ],
  },
  {
    slug: "ahead-solar-laravel",
    name: "Ahead Solar Bangladesh — Laravel Edition",
    shortName: "Ahead Solar (Laravel)",
    tagline:
      "The full-featured Ahead Solar corporate site re-architected in Laravel — with Blade + Tailwind CSS 4 frontend, a complete admin panel, and MySQL.",
    category: "Corporate Website & CMS",
    year: "2026",
    language: "PHP (Laravel)",
    image: "/projects/asl.png",
    liveUrl: "https://aheadsolrbd.com",
    repoUrl: "https://github.com/ahsanahmedrakib/aheadsolarbd",
    stack: ["Laravel", "PHP 8.3", "Blade", "Tailwind CSS 4", "Vite", "MySQL", "PHPUnit / Pest"],
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    monogram: "AL",
    overview: [
      "Ahead Solar Bangladesh is a full-featured corporate website built with Laravel that presents the company's services, projects, and solar financing solutions — alongside a complete admin panel for managing site content.",
      "The public site includes a landing page with an animated hero slider, services, featured projects, customer reviews, about pages (company profile, sister concerns, MD's message, management team), a solar financing hub (CAPEX, OPEX, BOT models with cost comparison), a dedicated EV charging landing page for Palash Charging Station, and a contact page with Google Map integration.",
    ],
    role: [
      "Full-stack Laravel implementation — backend models, controllers, and Blade frontend.",
      "Designed the admin panel, role-based access, and content management flows.",
    ],
    responsibilities: [
      "Public marketing site with dynamic content served from MySQL.",
      "Admin panel: full CRUD for services, projects, team members, and hero sliders.",
      "Inbox management for contact messages, Palash EV charging applications, and customer reviews with an approval workflow.",
      "Site settings editor for contact details, Google Map, and general metadata.",
      "Test coverage with PHPUnit / Pest.",
    ],
    features: [
      "Landing page with animated hero slider, services, featured projects, and customer reviews.",
      "About pages: company profile, sister concerns, MD's message, and management team.",
      "Services and projects portfolio with category filtering and detail pages.",
      "Solar financing solutions: CAPEX, OPEX, Build–Operate–Transfer (BOT), and cost comparison.",
      "Dedicated Palash Charging Station (EV charging) landing page.",
      "Contact page with Google Map integration and form backed by the admin panel.",
      "Role-based user management and an approval workflow for reviews.",
    ],
    highlights: [
      {
        title: "Two stacks, one brand",
        description:
          "The same Ahead Solar product shipped in both Next.js and Laravel — demonstrating flexibility across the modern (TypeScript) and classic (PHP) ecosystem.",
      },
      {
        title: "Complete content operations",
        description:
          "Everything from hero slides to customer reviews runs through an authenticated admin dashboard with role-based access.",
      },
      {
        title: "Tested and robust",
        description:
          "PHPUnit/Pest coverage and Vite-managed frontend assets keep the codebase dependable.",
      },
    ],
  },
  {
    slug: "rilito-ecommerce",
    name: "Rilito — E-commerce Platform",
    shortName: "Rilito",
    tagline:
      "A complete Next.js e-commerce platform with a customer storefront (cart, checkout, wishlist, blog) and a full product-management admin panel.",
    category: "E-commerce",
    year: "2026",
    language: "Next.js",
    image: "/projects/rilito.png",
    liveUrl: "https://rilito.vercel.app",
    repoUrl: "https://github.com/ahsanahmedrakib/rilito",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Next.js API routes", "REST"],
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    monogram: "RL",
    overview: [
      "Rilito is a full e-commerce platform built entirely on the Next.js App Router. On the customer side it provides product browsing and search, category pages, a shopping cart, checkout, wishlist, order tracking, a blog, and customer accounts. On the operations side it ships a complete admin panel for managing products, categories, orders, coupons, reviews, users, hero slides, marquee banners, CMS content, and payments.",
      "The backend is a set of Next.js API route handlers — REST endpoints covering auth (JWT login/refresh/logout), products, categories, orders, coupons, reviews, and admin CRUD — so there's no separate server required.",
    ],
    role: [
      "Designed and built the full-stack application — storefront, admin, and every API route.",
      "Defined the feature-driven folder structure: feature components under src/components/features/account & admin.",
    ],
    responsibilities: [
      "Storefront: product listing/search, product detail by slug, category pages, cart, checkout, wishlist, order status, blog, and account dashboard.",
      "Admin: products, categories, orders, coupons, users, reviews, hero slides, marquee, content manager, track-order, payment, and deleted-data (soft-delete) screens.",
      "Backend: RESTful API routes for auth, products, categories, orders, coupons, reviews, settings, and contact — with JWT-secured admin endpoints.",
    ],
    features: [
      "Customer registration/login with JWT and refresh-token flow (auth/login, auth/refresh, auth/me, customer/register).",
      "Search, product detail by slug, and category filtering.",
      "Cart, checkout, wishlist, and order tracking with per-order detail pages.",
      "Blog with slug-based article pages and loading states.",
      "Full admin panel with image uploader, color list editor, product forms, and order management.",
      "Coupon codes, reviews, hero slides, marquee banners, and site content managed through the admin.",
      "Soft-deleted data manager, robots.txt, and sitemap generation.",
    ],
    highlights: [
      {
        title: "One codebase, whole product",
        description:
          "Storefront, checkout, accounts, admin dashboard, and API backend all live in a single Next.js App Router project.",
      },
      {
        title: "JWT auth everywhere",
        description:
          "Separate customer and admin authentication flows with refresh-token handling baked into the API layer.",
      },
      {
        title: "Feature-first structure",
        description:
          "Components grouped by feature (account, admin) keeps large codebase navigation effortless.",
      },
    ],
  },
  {
    slug: "techpunno",
    name: "TechPunno — Building a Safe Digital Society",
    shortName: "TechPunno",
    tagline:
      "A single-page website for a volunteer-driven non-profit technology organization in Bangladesh focused on cyber awareness and digital literacy.",
    category: "Non-profit",
    year: "2026",
    language: "Next Js",
    image: "/projects/tp.png",
    liveUrl: "https://techpunno.vercel.app",
    repoUrl: "https://github.com/ahsanahmedrakib/techpunno",
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "Framer Motion",
      "Swiper",
      "react-hook-form",
      "yup",
    ],
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    monogram: "TP",
    overview: [
      "TechPunno is a volunteer-driven non-profit technology organization in Bangladesh working on cyber awareness and digital literacy. This single-page website gives the organization a strong online presence with a clean, content-rich layout.",
      "The design system uses primary/secondary colors extracted directly from the TechPunno logo — green #0C9B5D and red #F3353B. Framer Motion powers scroll-reveal and micro-interactions, Swiper drives the hero carousel, and react-hook-form + yup handle validated contact form submissions.",
    ],
    role: [
      "Built the full single-page application with all content sections and interactions.",
      "Derived and applied the brand design system from the organization's logo.",
    ],
    responsibilities: [
      "Sticky navbar that hides on scroll down and reveals on scroll up, with a mobile menu.",
      "Hero section with an autoplaying Swiper carousel.",
      "Sections: Videos (YouTube embeds), Events (All / Upcoming / Completed filters), Blogs, News, Advisor Team, Core Team, Contact, and Footer.",
      "Floating Messenger + WhatsApp chat buttons and a smooth scroll-to-top button.",
      "Centrally editable content via a data directory (nav, hero, videos, events, blogs, news, team, site links).",
    ],
    features: [
      "Logo-derived Tailwind v4 theme (green #0C9B5D, red #F3353B).",
      "Framer Motion scroll-reveal and micro-interactions.",
      "Autoplaying Swiper hero carousel.",
      "Event list with All / Upcoming / Completed filtering.",
      "Validated contact form with react-hook-form and yup.",
      "Floating Messenger/WhatsApp chat buttons and scroll-to-top.",
      "Editable content layer — no code changes needed to update team or events.",
    ],
    highlights: [
      {
        title: "Brand-accurate design",
        description:
          "Tailwind v4 theme tokens are extracted from the organization's official logo colors — green and red.",
      },
      {
        title: "Volunteer-friendly editing",
        description:
          "All content lives in structured data files so non-developer organizers can update the site easily.",
      },
      {
        title: "Thorough UX",
        description:
          "Scroll-aware navbar, floating chat buttons, filtering, and smooth micro-interactions.",
      },
    ],
  },
  {
    slug: "bct-it-services-laravel",
    name: "BCT — IT Solutions Website (Laravel)",
    shortName: "BCT (Laravel)",
    tagline:
      "A large Laravel corporate website for an IT services company — dozens of pages across IT Support, Voice, Internet, Cloud, and Web services.",
    category: "Corporate Website",
    year: "2026",
    language: "PHP (Laravel)",
    image: "/projects/bctl.png",
    liveUrl: "https://bct.com.bd/",
    repoUrl: "https://github.com/ahsanahmedrakib/bct",
    stack: ["Laravel", "Blade", "Tailwind CSS", "Vite", "MySQL", "PHPUnit"],
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
    monogram: "BCT",
    overview: [
      "This project is the Laravel implementation of a comprehensive IT solutions company website (Bismillah Computer & Technology). It presents a very large information architecture — literally dozens of routes covering IT support, phone systems, internet connectivity, cloud and Microsoft solutions, and web services.",
      "The route structure shows dedicated pages for managed IT, cyber security (including Essential Eight, Zero Trust, incident response), device repair, voice/phone systems by business size and brand (Avaya, Grandstream, LG ipecs, Vodia), unified communications, internet (4G/5G, Cel-Fi, Starlink, NBN plans), Microsoft 365/Azure/Copilot/Defender/Entra/Teams/SharePoint, and web services (development, e-commerce, hosting, SEO).",
    ],
    role: [
      "Built the Laravel application with a modular controller-per-domain architecture.",
      "Structured dozens of marketing pages around domain controllers (Voice, Internet, Cloud, Web, ItSupport, Industries).",
    ],
    responsibilities: [
      "Multi-page corporate site with a dedicated controller per service domain.",
      "Industry landing pages (agriculture, transportation, medical, real estate, construction, non-profit, and more).",
      "Contact and inquiry forms for IT support, phone systems, internet, and cloud.",
      "Admin login and dashboard scaffolding with the base Laravel auth flow.",
    ],
    features: [
      "Domain-scoped controllers (Voice, Internet, Cloud, Web, ItSupport, Industries) for clean organization.",
      "Deep content hierarchy — e.g. NBN plans, Microsoft 365 suite products, and phone-system brands each get their own page.",
      "Contact routes with POST handling for lead capture.",
      "Laravel fallback 404 page and standard Laravel session-based auth for admin.",
    ],
    highlights: [
      {
        title: "Large information architecture",
        description:
          "150+ routed pages organized into clean domain controllers — a real challenge handled with discipline.",
      },
      {
        title: "Sales-focused content",
        description:
          "Every service category (voice, internet, cloud, IT support) has its own conversion path and inquiry form.",
      },
      {
        title: "Reusable Laravel patterns",
        description:
          "Consistent controller/view conventions across every domain make the many pages maintainable.",
      },
    ],
  },
  {
    slug: "ris-school-management",
    name: "RIS — School Management System",
    shortName: "RIS (SMS)",
    tagline:
      "A complete Laravel school management system with a public website plus student, teacher, parent, and admin portals — attendance, exams, results, fees, payroll, transport, and library.",
    category: "School Management System",
    year: "2026",
    language: "PHP (Laravel)",
    image: "/projects/ris.png",
    liveUrl: "https://ris.cleverapps.io/",
    repoUrl: "https://github.com/ahsanahmedrakib/ris",
    stack: [
      "Laravel",
      "Blade",
      "Tailwind CSS",
      "MySQL",
      "QR Codes",
      "PDF generation",
      "Role-based auth",
    ],
    gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
    monogram: "RIS",
    overview: [
      "RIS (an institutional management system) is a comprehensive Laravel application that manages an entire school or institution. It combines a public informational website with deeply functional portals for students, teachers, parents, and administrators.",
      "The public site covers home, about, admission (with online applications), scholarships, testimonials, gallery, class routines, notices, teachers, academic calendar, fees, results, and facilities. Behind the scenes, admin and teacher portals cover user management, students, classes, subjects, teachers, staff, attendance, exams and results, fee structures and invoices, payroll, transport with routes, library with borrowings, notices, campus news, QR code generation, scholarships, admissions, activity logs, notifications, and granular reports — plus a parent portal to track children's attendance and fees.",
    ],
    role: [
      "Designed and built the modular Laravel architecture — feature folders for Auth and Website, plus domain controllers for each module.",
      "Implemented role-based access (admin, teacher, parent) with middleware and identity checks.",
    ],
    responsibilities: [
      "Public website: all marketing and informational pages, online admission and scholarship applications, class routines, notices, results, and FAQ.",
      "Admin & teacher portal: full CRUD for every entity (students, teachers, staff, classes, subjects), attendance, exams, results, fees/invoices/payments, payroll, transport routes, library borrowings, notices, campus news, gallery, testimonials, hero slides, academic calendars, and FAQ.",
      "Parent portal: view children, attendance history, fee statements and invoices, notices, and exams.",
      "QR-code generation for students, PDF export for scholarship/admission and academic calendars, and cross-module reports.",
      "Activity logging, soft-delete trash/restore, and notification support.",
    ],
    features: [
      "Feature-first Laravel structure with domain controllers (Admin, Parent, Website).",
      "Role-based portals — admin, teacher, and parent with distinct dashboards and permissions.",
      "Online admission and scholarship applications with status workflow and PDF generation.",
      "Attendance, exams, and result management with exportable reports.",
      "Fee structures, invoice generation, payment recording, and per-student fee history.",
      "Payroll processing with status toggles.",
      "Transport module with buses, routes, and student assignment.",
      "Library module with catalog and borrow/return tracking.",
      "QR-code generation and student ID cards.",
      "Activity logs, notifications, and a trash system with restore and force-delete.",
    ],
    highlights: [
      {
        title: "Three portals, on role",
        description:
          "Admin, teacher, and parent experiences are cleanly separated with route-level role middleware.",
      },
      {
        title: "End-to-end academic ops",
        description:
          "From admissions and scholarships to attendance, results, fees, and payroll — the full school lifecycle in one system.",
      },
      {
        title: "Production utilities",
        description:
          "QR codes, ID cards, PDF exports, activity logging, and reports make it immediately usable in a real institution.",
      },
    ],
  },
  {
    slug: "scalable-rest-api",
    name: "Backend API — NestJS RESTful API",
    shortName: "Backend API",
    tagline: "100% AI-driven scalable RESTful API",
    category: "Backend Development",
    year: "2026",
    language: "Nest Js",
    image: "/projects/nest.png",
    stack: ["NestJS", "TypeScript", "MongoDB", "Mongoose", "JWT", "bcrypt", "Swagger", "Cloudinary"],
    gradient: "from-indigo-400 via-blue-500 to-sky-500",
    monogram: "API",
    overview: [
      "A scalable RESTful API built with NestJS, TypeScript, MongoDB, and Mongoose — architected with modularity and backend best practices from day one.",
      "Every layer — from schema design to authentication to media handling to documentation — was designed and implemented through a 100% AI-driven workflow, demonstrating what disciplined agentic development can produce.",
    ],
    role: [
      "Designed and implemented the full API end to end using an AI-driven development workflow.",
      "Established a modular NestJS architecture with clean separation across features, services, and controllers.",
    ],
    responsibilities: [
      "JWT-based authentication and authorization with secure password hashing using bcrypt.",
      "Request validation and DTOs for safe, type-safe data handling.",
      "Media upload and management with Cloudinary, Multer, and Sharp for optimized image processing, storage, and delivery.",
      "Comprehensive API documentation generated with Swagger.",
    ],
    features: [
      "Modular NestJS architecture — feature-focused modules instead of one monolithic controller.",
      "JWT authentication with guards, roles, and authorization decorators.",
      "bcrypt password hashing and secure user session handling.",
      "Request validation via DTOs and class-validator.",
      "Cloudinary + Multer + Sharp pipeline for image upload, resize, and optimized delivery.",
      "Swagger/OpenAPI documentation with interactive endpoints.",
    ],
    highlights: [
      {
        title: "100% AI-driven build",
        description:
          "Architecture, implementation, and documentation were all driven by AI agents — proving agentic workflows can ship production-grade backend code.",
      },
      {
        title: "Clean, modular architecture",
        description:
          "Feature-first NestJS structure keeps auth, users, and media separated and easily extendable.",
      },
      {
        title: "Production-ready security",
        description:
          "JWT auth, role guards, bcrypt hashing, and validated requests baked into every endpoint.",
      },
    ],
    impact:
      "Shipped a scalable, documented REST API that other projects can plug into — built end to end with an AI-driven workflow to demonstrate the speed of agentic development.",
  },
  {
    slug: "flight-search-booking",
    name: "Premium Flight Search & Booking",
    shortName: "Flight Search",
    tagline:
      "A production-grade flight search, filtering, and booking platform — a three-step search-to-confirmation pipeline with live filtering, session-persistent state, and e-ticket delivery.",
    category: "Travel & Booking",
    year: "2026",
    language: "Next Js",
    image: "/projects/fts.png",
    liveUrl: "https://flight-search-three.vercel.app",
    repoUrl: "https://github.com/ahsanahmedrakib/flight-search",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Zustand",
      "React Hook Form",
      "yup",
      "Resend",
      "Nodemailer",
    ],
    gradient: "from-cyan-300 via-sky-400 to-blue-600",
    monogram: "FS",
    overview: [
      "A high-performance flight search, filtering, and booking application built with the Next.js App Router, TypeScript, and Tailwind CSS v4. The experience is structured as a three-step pipeline: search and filter flights, capture passenger details, then land on a verifiable PNR e-ticket — with state carried seamlessly between steps.",
      "Centralized state is powered by Zustand, with the persist middleware backed by sessionStorage so a user can refresh mid-flow without losing their search criteria, selected flight, or pre-filled passenger details. Passenger forms are orchestrated with React Hook Form and Yup resolvers, scaling dynamically to the exact number of travellers searched (up to 12).",
    ],
    role: [
      "Architected and built the full multi-step booking pipeline — search, results, checkout, and confirmation.",
      "Designed the strictly-typed domain model for airlines, aircraft, routes, stops, pricing, and baggage allowances.",
      "Implemented the Zustand store with session persistence and the custom useFlight hook that pre-computes filter and sort combinations.",
    ],
    responsibilities: [
      "Step 1 — Search and results: full flight search panel with native date pickers, filter sidebar, sort bar, and rich flight cards with inline accordion details.",
      "Step 2 — Booking: dynamic passenger form whose field count matches the searched traveller count, with inline Yup validation for names, genders, and optional identifiers.",
      "Step 3 — Confirmation: unique PNR generation, a print-optimized e-ticket pass, Web Share API support, and server-side email delivery.",
      "Backend: a serverless route handler for e-ticket confirmations using Resend and Nodemailer.",
    ],
    features: [
      "Multi-faceted filtering — max price slider, stop count, airline and aircraft selection, departure-hour brackets, refundability, punctuality rating thresholds, and meal/seat inclusion.",
      "Dynamic sort bar — cheapest, fastest, earliest departure, and more, applied on the fly.",
      "Zustand store with sessionStorage persistence that survives refreshes across the whole booking flow.",
      "Dynamic field arrays scaling the passenger form to the searched traveller count (up to 12).",
      "Type-inferred Yup schemas via yup.InferType, so runtime validation and compile-time types can never drift apart.",
      "Generated PNR record locators with print-optimized ticket pass layouts and Web Share API integration.",
      "Serverless e-ticket email delivery via Resend and Nodemailer.",
      "Mobile-first responsive layouts from small phones to ultra-wide displays, with semantic HTML and screen-reader-friendly labels throughout.",
    ],
    highlights: [
      {
        title: "Multi-step, refresh-proof flow",
        description:
          "Session-persisted Zustand state means a traveller can refresh at any point in search or checkout without losing progress.",
      },
      {
        title: "Types that can't drift",
        description:
          "Every form schema is a Yup object with types inferred natively from the schema, eliminating runtime-versus-compile-time mismatches.",
      },
      {
        title: "Real booking semantics",
        description:
          "PNR generation, e-ticket email delivery, print passes, and Web Share make it behave like an actual travel product, not a demo.",
      },
    ],
    impact:
      "Delivered a complete airline-grade booking experience — search, deep filtering, dynamic multi-passenger checkout, and ticket confirmation — as a single stateless-friendly Next.js application.",
  },
  {
    slug: "webbly-workspace-explorer",
    name: "Webbly — Mini Workspace Explorer",
    shortName: "Webbly",
    tagline:
      "A browser-based hierarchical file manager for folders and text files — create, navigate, search, edit, rename, and delete with zero backend, persisted entirely in localStorage.",
    category: "Web Application",
    year: "2026",
    language: "React (Vite)",
    image: "/projects/webbly.png",
    liveUrl: "https://webbly-three.vercel.app",
    repoUrl: "https://github.com/ahsanahmedrakib/webbly",
    stack: ["React 18", "TypeScript", "Vite", "Custom Hooks", "localStorage", "Plain CSS"],
    gradient: "from-rose-400 via-pink-500 to-orange-500",
    monogram: "WB",
    overview: [
      "Webbly is a browser-based file manager: a full workspace tree where you create folders and text files, browse them, open a file in an editor, search across the entire workspace, rename, and recursively delete — with nothing installed and no server involved.",
      "The workspace is modeled as a flat array of items linked by parentId rather than nested objects. A folder is simply an item whose id is referenced as another item's parentId. That single decision buys arbitrary nesting, cheap recursive deletion, trivially simple persistence to one JSON array in localStorage, and duplicate-name checks that only ever inspect direct siblings.",
    ],
    role: [
      "Designed the flat-array-plus-parentId data model that underpins the entire application.",
      "Implemented all state management in a single useWorkspace hook with immutable updates and persistence as a side effect.",
      "Built the full component set — recursive tree, breadcrumb, file list, editor, search, toolbar, and modal dialogs.",
    ],
    responsibilities: [
      "Data model and pure tree helpers — children, roots, siblings, paths, descendants, search, and duplicate-name checks.",
      "The useWorkspace hook: single source of truth for items, navigation state, and editor dirty state.",
      "Recursive tree view with per-folder expand/collapse and ancestor auto-expansion for the active folder.",
      "Text editor with explicit Save, so content is only committed to the store on demand.",
      "Workspace-wide search with match highlighting and breadcrumb trails, jumping straight to the result.",
    ],
    features: [
      "Create and rename with validation — names are trimmed, must be non-empty, and cannot collide with a sibling in the same namespace.",
      "Recursive delete that removes a folder and every nested descendant, with navigation and editor state repaired automatically.",
      "Unsaved-changes guard — a confirm() on in-app navigation plus a beforeunload blocker on refresh or close, so typing is never lost silently.",
      "Workspace-wide case-insensitive search across names at any depth, with highlighted matches and breadcrumb trails.",
      "Recursive tree view with expand/collapse, selected-folder highlighting, and auto-expanded ancestors.",
      "Clickable breadcrumb trail that navigates back to any ancestor folder.",
      "Graceful empty state — the workspace starts empty and degrades cleanly, with creation actions always available.",
    ],
    highlights: [
      {
        title: "One hook, one truth",
        description:
          "All state lives in useWorkspace, so persistence is a side effect of the same updates that drive the UI — no prop drilling across a dozen components.",
      },
      {
        title: "Flat array, full depth",
        description:
          "The parentId model serialises an arbitrarily nested tree to a single JSON array, making both recursion and persistence trivial.",
      },
      {
        title: "Nothing can be lost",
        description:
          "Dirty-state tracking protects in-app navigation and browser refresh, and deletes never leave the UI pointing at a removed item.",
      },
    ],
    impact:
      "A dependency-light, backend-free file manager built on strict TypeScript and React alone — demonstrating that a clean data model plus pure helpers can carry a surprisingly complete product.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories = [...new Set(projects.map((p) => p.category))];