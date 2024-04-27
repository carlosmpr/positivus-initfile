import { ServiceItemProps } from "../src/components/ServiceSection";

export const navMenuConfig = {
  brand: "logo.svg",
  navItems: [
    { text: "About us", href: "#" },
    { text: "Services", href: "#" },
    { text: "Contact", href: "#" },
    { text: "Pricing", href: "#" },
    { text: "Use Cases", href: "#" },
  ],
  onButtonClick: () => {
    /* action */
  },
};

export const heroSectionConfig = {
  title: "Navigating the digital landscape for success",
  description: "Our digital marketing agency helps businesses grow...",
  image: "hero1.svg",
  onButtonClick: () => {
    /* action */
  },
};

export const companyImages = [
  "amazon.svg",
  "dribbble.svg",
  "hubspot.svg",
  "netflix.svg",
  "notion.svg",
  "zoom.svg",
];

export const serviceHeader = {
  title: "Services",
  description:
    "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include",
};
export const serviceExample: ServiceItemProps[] = [
  {
    title: "Search engine Optimization",
    image: "service1.png",
  },
  {
    title: "Pay-per-click Advertisement",
    image: "service2.png",
    background: "bg-lime-300",
    titleBackground: "bg-white",
  },
  {
    title: "Social media Marketing",
    image: "service3.png",
    background: "bg-zinc-900",
    titleBackground: "bg-white",
    arrowImage: "whitearrow.svg",
  },
  {
    title: "Boost Email Marketing",
    image: "service4.png",
  },
  {
    title: "Let us Create your content",
    image: "service5.png",
    background: "bg-lime-300",
    titleBackground: "bg-white",
  },
  {
    title: "Analytics & Tracking",
    image: "service6.png",
    background: "bg-zinc-900",
    arrowImage: "whitearrow.svg",
  },
];

export const bannerExample = {
  title: "Let's make things happen",
  description:
    "Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.",
  image: "banner.png",
  onButtonClick: () => {},
};

export const caseStudyHeader = {
  title: "Case Studies",
  description:
    "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies",
};

export const caseStudiesExample = [
  {
    title: "PP Restaurant",
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    link: "#",
  },

  {
    title: "DD Software",
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    link: "#",
  },

  {
    title: "Rt Retail",
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    link: "#",
  },
];

export const workingHeader = {
  title: "Our Working Process",
  description: "Step-by-Step Guide to Achieving Your Business Goals",
};

export const faqsExample = [
  {
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Research and Strategy Development",
    description:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Monitoring and Optimization",
    description:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Reporting and Communication",
    description:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },

  {
    title: "Continual Improvement",
    description:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "How do I change my account email?",
    description:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

export const teamHeader = {
  title: "Team",
  description:
    "Meet the skilled and experienced team behind our successful digital marketing strategies.",
};

export const teamExample = [
  {
    avatar: "avatar1.png",
    link: "#",
    name: "John Doe",
    position: "Developer Specialist",
    experience:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    avatar: "avatar2.png",
    link: "#",
    name: "Jane Smith",
    position: "UI/UX Designer",
    experience:
      "8+ years of experience in user interface design. Expertise in user experience, wireframing, and prototyping.",
  },
  {
    avatar: "avatar3.png",
    link: "#",
    name: "Alex Johnson",
    position: "Project Manager",
    experience:
      "12+ years of experience in project management. Expertise in Agile methodologies, team leadership, and project lifecycle management.",
  },
  {
    avatar: "avatar4.png",
    link: "#",
    name: "Emily Davis",
    position: "Software Engineer",
    experience:
      "5+ years of experience in software development. Expertise in full-stack development, database management, and cloud services.",
  },
  {
    avatar: "avatar5.png",
    link: "#",
    name: "Michael Brown",
    position: "Data Analyst",
    experience:
      "7+ years of experience in data analysis. Expertise in statistical analysis, data visualization, and big data technologies.",
  },
  {
    avatar: "avatar6.png",
    link: "#",
    name: "Linda Wilson",
    position: "Chief Technology Officer",
    experience:
      "15+ years of experience in the technology sector. Expertise in strategic planning, technology innovation, and team building.",
  },
];

export const testimonialsExample = [
  {
    quote: "This service has transformed our business. Highly recommend!",
    avatar: "avatar1.png",
    name: "John Doe",
    position: "CEO of Company A",
  },
  {
    quote: "A truly outstanding experience from start to finish.",
    avatar: "avatar2.png",
    name: "Jane Smith",
    position: "CTO of Company B",
  },
  {
    quote: "Their attention to detail and customer service is unmatched.",
    avatar: "avatar3.png",
    name: "Michael Brown",
    position: "Director of Marketing at Company C",
  },
  {
    quote: "We've seen tremendous growth since partnering with them.",
    avatar: "avatar4.png",
    name: "Emily White",
    position: "Founder of Startup D",
  },
  {
    quote:
      "Their innovative solutions have been a game changer for our operations.",
    avatar: "avatar5.png",
    name: "Alex Johnson",
    position: "Operations Manager at Company E",
  },
  {
    quote: "Exceptional service and results, beyond what we had hoped for.",
    avatar: "avatar6.png",
    name: "Linda Green",
    position: "Product Manager at Company F",
  },
];

export const footerExample = {
  footerLinks: [
    { title: "About us", link: "#" },
    { title: "Services", link: "#" },
    { title: "Contact", link: "#" },
    { title: "Pricing", link: "#" },
    { title: "Use Cases", link: "#" },
  ],

  socialMedia: [
    { icon: "linke.svg", link: "#" }, 
    { icon: "facebook.svg", link: "#" },
    { icon: "twitter.svg", link: "#" },
  ],

  contactInfo: [
    { label: "Email", info: "info@positivus.com" },
    { label: "Phone", info: "000-000-0000" },
    { label: "Address", info: "Montreal, Canada" },
  ],
};
