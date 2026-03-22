export interface ExperienceData {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  employmentType: "Full-time" | "Internship" | "Open Source";
  description: string[];
  achievements: string[];
  technologies: string[];
  isCurrentRole?: boolean;
}

export const experiences: ExperienceData[] = [
  {
    id: "clevertap",
    company: "CleverTap",
    role: "Front End Engineer",
    duration: "Jan 2025 – Present",
    location: "Mumbai, Maharashtra",
    employmentType: "Full-time",
    isCurrentRole: true,
    description: [
      "Drove Geofence VNext stabilization by resolving legacy migration bugs, improving system reliability across large-scale geofence clusters",
      "Architected a scalable Bulk Upload system supporting up to 10,000 geofences per cluster via CSV/JSON, replacing manual workflows and reducing time-to-setup for enterprise customers",
      "Added support for Zero Bezel and Vertical Image Mobile Push Notification Templates (Push templates are visually rich interactive push notifications sent direclty from CleverTap dashboard to end users)",
      "Designed and implemented Role-Based Access Control (RBAC) for CMS assets (Files, Templates, Content Blocks) — separating Consumer and Manager permission tiers across Campaigns and Journeys",
      "Delivered a custom RBAC model for Zuellig Pharma, decoupling Template body permissions from Sender Details access to ensure compliance without over-restriction",
      "Migrated legacy Vue SFCs to TypeScript TSX (class-based components) using clevertap-lib-ui and clevertap-lib-store patterns",
    ],
    achievements: [
      "Shipped Bulk Upload for Geofences — enabling enterprise customers managing hundreds of clusters to onboard 10,000 fences in a single upload",
      "Added various features to CT CMS Files and Folders",
      "Fixed MIME-type based file-handling gap that caused incorrect file storage behavior across the platform",
      "Proactively identified & resolved UX bugs",
    ],
    technologies: ["TypeScript", "Vue 2", "Vuex", "RBAC", "REST APIs", "clevertap-lib-ui"],
  },
  {
    id: "mediamelon-sde",
    company: "MediaMelon",
    role: "Software Development Engineer I",
    duration: "Jun 2024 – Jan 2025",
    location: "Bengaluru, Karnataka",
    employmentType: "Full-time",
    isCurrentRole: false,
    description: [
      "Architected a reusable JavaScript SDK for embedding real-time streaming analytics charts with built-in authentication and minimal integration complexity",
      "Revamped the SmartSight streaming analytics platform using PrimeReact, delivering real-time data analysis and AI-driven video quality insights",
      "Built DataPlayground dashboard from scratch: Journey Mapper (last-4-action visualizer with drill-down), Funnel Graph, and Event Trends Graph for device/brand/screen-level behavior analysis",
      "Developed interactive Highcharts-based data visualization charts for application and business intelligence dashboards",
    ],
    achievements: [
      "Implemented front-end performance optimizations improving page load times and real-time data processing by 30%",
      "Expanded platform insights by creating dedicated dashboards for Application and Business Insights",
      "Designed Journey Mapper with drill-down capabilities for comprehensive user behavior analysis across screens, device models, and brands",
    ],
    technologies: ["React", "PrimeReact", "TypeScript", "Highcharts", "JavaScript", "REST APIs"],
  },
  {
    id: "mediamelon-intern",
    company: "MediaMelon",
    role: "Software Development Intern",
    duration: "Dec 2023 – Jun 2024",
    location: "Bengaluru, Karnataka",
    employmentType: "Internship",
    isCurrentRole: false,
    description: [
      "Enhanced SmartSight dashboard with customizable widgets and drag-and-drop graph creation, improving self-service analytics capabilities",
      "Built a white-label theming system enabling clients to customize styles, icons, colors, and branding across the entire SmartSight platform",
      "Crafted AWS Athena SQL queries for real-time data retrieval, powering dashboard analytics pipelines",
      "Developed a lightweight JavaScript charting library for displaying live data charts with minimal client-side integration effort",
    ],
    achievements: [
      "Revamped entire SmartSight platform to be fully white-label with Global Theme support for enterprise clients",
      "Built reusable charting library adopted as the standard embed mechanism for real-time data across client integrations",
    ],
    technologies: ["JavaScript", "React", "Highcharts", "AWS Athena", "SQL", "Drag-and-Drop UI"],
  },
  {
    id: "secureu",
    company: "SecureU",
    role: "Python Developer",
    duration: "Sep 2022 – Oct 2022",
    location: "Remote",
    employmentType: "Internship",
    isCurrentRole: false,
    description: [
      "Contributed to an open-source cybersecurity assessment tool used by security professionals for penetration testing",
      "Developed sensitive directory enumeration and web crawling features to detect exposed endpoints",
      "Implemented domain directory retrieval filtered by HTTP response status, significantly expanding tool coverage",
    ],
    achievements: [
      "Significantly improved tool functionality with directory enumeration features, increasing scan coverage",
    ],
    technologies: ["Python", "Web Scraping", "Security Engineering", "Git", "Open Source"],
  },
  {
    id: "boring-news",
    company: "The Boring News Co.",
    role: "Software Development Intern",
    duration: "Feb 2022 – Jul 2022",
    location: "Remote",
    employmentType: "Internship",
    isCurrentRole: false,
    description: [
      "Contributed to a custom Content Management System (CMS) that streamlined how marketing and content teams managed site content",
      "Maintained the company's primary website serving 20,000+ monthly visitors, ensuring reliability and uptime",
      "Conducted cross-browser and cross-device testing to ensure seamless CMS performance on all platforms",
    ],
    achievements: [
      "CMS contribution reduced site maintenance time by 50% for marketing and content writing teams",
      "Assisted senior engineers in bug triaging, hotfixes, and feature ideation for the editorial platform",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "CMS", "Cross-browser Testing"],
  },
];
