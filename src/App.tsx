import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Zap,
  Mail,

  ArrowRight,
  Menu,
  X,
  Briefcase,
  Code2,
  Palette,
  Globe,
  Star,
  ChevronDown,
  ExternalLink,
  Cpu,
  Rocket,
} from "lucide-react";

/* ─── GitHub SVG ─── */
function GithubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.21.68.8.56 4.56-1.53 7.85-5.83 7.85-10.91C23.5 5.66 18.35.5 12 .5z" />
    </svg>
  );
}

/* ─── LinkedIn SVG ─── */
function LinkedinIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ─── Data ─── */
const NAV_LINKS = [
  { label: "Personal", href: "#personal" },
  { label: "Projects", href: "#projects" },
  { label: "Work", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

type PersonalProject = {
  color: string;
  accent: string;
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  techStack: { category: string; items: string[] }[];
  highlights: string[];
  githubUrl: string;
  liveUrl: string;
  liveLabel: string;
};

const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    color: "bg-blue",
    accent: "text-blue",
    emoji: "🛡️",
    title: "Steel Defect Detection AI",
    tagline: "Real-time computer vision for manufacturing QA",
    description:
      "Production-ready YOLOv8 system that classifies six steel surface defects at 160 FPS. Flask backend, Dockerized inference, deployed on Hugging Face Spaces.",
    longDescription:
      "An end-to-end deep learning pipeline that detects and localises six classes of steel surface defects — crazing, inclusion, patches, pitted surface, rolled-in scale, and scratches — in real time. Trained on the NEU-DET dataset, the YOLOv8 model achieves 78.6% mAP@0.5 and runs at sub-10ms latency on CPU using ONNX Runtime. The Flask web app provides a drag-and-drop interface where any image is annotated with bounding boxes, confidence scores, and a colour-coded defect taxonomy. Packaged in Docker and shipped to Hugging Face Spaces so anyone can try it from the browser.",
    techStack: [
      { category: "Computer Vision", items: ["YOLOv8", "OpenCV", "ONNX Runtime", "PyTorch"] },
      { category: "Backend", items: ["Python", "Flask", "Gunicorn", "Ultralytics"] },
      { category: "Frontend", items: ["HTML5", "Custom CSS (Glassmorphism)", "Vanilla JS"] },
      { category: "Deploy / DevOps", items: ["Docker", "Hugging Face Spaces", "Git LFS"] },
    ],
    highlights: [
      "78.6% mAP@0.5 across six steel defect classes",
      "160 FPS inference on CPU via ONNX optimisation",
      "Glassmorphic single-page UI with live colour-coded bounding boxes",
      "One-click reproducible deploy via Docker SDK on HF Spaces",
    ],
    githubUrl: "https://github.com/avneetsingh7102/defect-detection-system",
    liveUrl: "https://huggingface.co/spaces/avneetssing/steel-defect-detection",
    liveLabel: "Hugging Face Spaces",
  },
  {
    color: "bg-pink",
    accent: "text-pink",
    emoji: "♟️",
    title: "Mental Chess Trainer",
    tagline: "Voice-controlled mental chess visualisation",
    description:
      "Voice-driven trainer that builds blindfold-chess visualisation skill. Web Speech API + Flask + python-chess engine with a local Minimax fallback so it never breaks.",
    longDescription:
      "A chess trainer designed to grow your visualisation muscle: announce moves out loud — \"knight f3\", \"e4\", \"castle\" — and play full games against a configurable AI without ever looking at the board. The frontend captures natural-language commands via the Web Speech API and routes them through a custom move parser. The Flask backend uses python-chess for legal move generation across four difficulty levels (Beginner → Master). When the Render free instance is sleeping, a local Minimax engine kicks in client-side so the experience never stalls. Supabase powers Google auth and per-user session history.",
    techStack: [
      { category: "Frontend", items: ["Vanilla JS (SPA)", "Web Speech API", "Speech Synthesis"] },
      { category: "Chess Engine", items: ["python-chess", "Custom Minimax (JS fallback)", "Move parser"] },
      { category: "Backend", items: ["Python", "Flask", "Flask-CORS", "Gunicorn"] },
      { category: "Auth & Data", items: ["Supabase", "Google OAuth"] },
      { category: "Deploy", items: ["Render", "Render Blueprint (render.yaml)"] },
    ],
    highlights: [
      "Hands-free play via voice — designed for screen-off training",
      "Resilient: local AI fallback when backend cold-starts",
      "Four AI difficulty tiers from Beginner to Master",
      "Auth + persistent session history with Supabase",
    ],
    githubUrl: "https://github.com/avneetsingh7102/Mentelchess",
    liveUrl: "https://mentelchess-1.onrender.com",
    liveLabel: "Render",
  },
];

const PROJECTS = [
  {
    color: "bg-pink",
    title: "Reflect — VR Journaling & Reflection",
    tags: ["Unity XR", "Python", "AI Topic Mapping", "UX Research", "Prompt Engineering"],
    description: "A VR experience where users journal their thoughts inside an immersive simulation and explore emotional themes as AI-grouped topic nodes on a neural map canvas. Led full UX research from user interviews to iterative prototype testing. Built AI-powered topic segmentation to cluster unstructured journal data into meaningful emotional patterns.",
    link: "https://canva.link/ifsayl9vjjs0zwa",
  },
  {
    color: "bg-blue",
    title: "Data Design for Humanity",
    tags: ["Python", "Machine Learning", "Rhino 3D", "Parametric Design", "Spatial Analysis"],
    description: "Applied ML and computational design to optimise emergency shelter layouts for displaced populations in the DR Congo. Built spatial models to analyse habitability constraints and generated layout configurations maximising liveable space and resource efficiency. Used Rhino 3D for parametric visualisation of proposed shelter arrangements.",
    link: "https://canva.link/lmp0ffhdrmax2ya",
  },
  {
    color: "bg-yellow",
    title: "Autonomous Pharmacy Robot",
    tags: ["ROS 2", "Fusion 360", "Arduino", "OOP Python", "Hardware Prototyping"],
    description: "Designed and prototyped an autonomous medication-dispensing robot for unmanned night pharmacies. Integrated ROS 2 for navigation and obstacle avoidance, Fusion 360 for mechanical design, and Arduino for hardware control. Delivered a functional prototype with modular, fully tested Python code.",
    link: "https://canva.link/nt8wfp3v6vvsngw",
  },
];

const EXPERIENCE = [
  {
    color: "bg-pink",
    role: "Associate Product Manager",
    company: "Zelta Tech",
    date: "Mar 2024 – Mar 2025",
    bullets: [
      "Shipped products across fintech & Web3, including an algo-trading platform used by 50,000+ traders.",
      "Integrated a KYC compliance pipeline serving 150+ countries, ensuring regulatory alignment across markets.",
      "Reduced time-to-market by 20% on a Web3 gaming arcade through cross-functional sprint coordination.",
    ],
  },
  {
    color: "bg-blue",
    role: "Product Management Intern",
    company: "Antino",
    date: "Jun 2023 – Jan 2024",
    bullets: [
      "Led 50+ user interviews that shaped GTM strategy for an AI-powered design tool.",
      "Drove feature overhaul via A/B testing on a job portal, improving conversion by 18%.",
      "Coordinated a team of 8 to deliver 14 ERP modules from scratch — on time.",
    ],
  },
];

const SKILLS = [
  {
    color: "bg-pink",
    icon: <Briefcase size={20} />,
    title: "Product & Project",
    items: ["Agile", "Roadmapping", "User Research", "A/B Testing", "PRD Writing", "Jira", "Miro", "Notion"],
  },
  {
    color: "bg-blue",
    icon: <Palette size={20} />,
    title: "UX & Design",
    items: ["Figma", "Wireframing", "Usability Testing", "Empathy Mapping", "Interaction Design"],
  },
  {
    color: "bg-yellow",
    icon: <Code2 size={20} />,
    title: "Technical",
    items: ["Python", "SQL", "Unity XR/VR", "ROS 2", "Arduino", "Rhino 3D", "Prompt Engineering"],
  },
  {
    color: "bg-pink",
    icon: <Globe size={20} />,
    title: "Languages",
    items: ["English C1", "Hindi C1", "German A2 (learning)"],
  },
];

/* ─── Floating Shapes Component ─── */
function FloatingShapes() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 20, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[10%] w-32 h-32 border-4 border-black/10 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 50, 0], x: [0, -30, 0], rotate: [0, -45, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-[60%] right-[15%] w-24 h-24 border-4 border-black/10"
      />
      <motion.div
        animate={{ y: [0, -60, 0], x: [0, 40, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] right-[50%] w-40 h-40 border-4 border-black/10 rounded-tr-3xl"
      />
    </div>
  );
}

/* ─── Components ─── */

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b-3 border-black bg-bg/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-sm font-bold tracking-widest uppercase relative group">
          Avneet Singh
        </a>

        {/* Desktop */}
        <div className="hidden gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative font-mono text-xs tracking-wider uppercase group hover:text-black overflow-hidden"
            >
              {l.label}
              <motion.span
                className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-pink origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col gap-4 border-t-3 border-black bg-bg px-6 py-6 md:hidden overflow-hidden"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm tracking-wider uppercase"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const yBadge = useTransform(scrollY, [0, 1000], [0, 300]);
  const yBars = useTransform(scrollY, [0, 1000], [0, 500]);


  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-32 pb-16 md:pt-40 flex flex-col justify-center">
      <div className="mx-auto max-w-6xl w-full relative">
        
        {/* Floating sticker */}
        <motion.div
          style={{ y: yBadge }}
          animate={{ y: [0, -10, 0], rotate: 360 }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 8, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-0 right-4 md:top-10 md:right-16 flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full border-3 border-black bg-yellow shadow-[4px_4px_0px_#0A0A0A] z-10"
        >
          <Zap className="h-10 w-10 md:h-14 md:w-14" strokeWidth={2.5} />
        </motion.div>

        {/* Headline */}
        <h1 className="font-sans text-[clamp(4rem,12vw,9rem)] leading-[0.85] font-black tracking-[-0.04em] flex flex-wrap gap-x-4 md:gap-x-8">
          <span className="flex">
            {"AVNEET".split("").map((char, index) => (
              <motion.span
                key={`first-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05, type: "spring", stiffness: 100 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="flex">
            {"SINGH".split("").map((char, index) => (
              <motion.span
                key={`last-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 6) * 0.05, type: "spring", stiffness: 100 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6 font-mono text-sm tracking-widest md:text-base font-bold uppercase"
        >
          Product & Innovation · MSc Science Computing · ITU Linz
        </motion.p>

        {/* Two-column layout */}
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-start relative z-10">
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="max-w-lg font-serif text-xl leading-relaxed md:text-2xl"
          >
            I bridge product strategy and emerging technology — from shipping
            fintech platforms to 50,000+ users, to building VR journaling apps
            and humanitarian ML tools. Currently studying Future Industries at
            ITU Linz, Austria.
          </motion.p>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="flex md:justify-end"
          >
            <motion.a 
              href="#projects"
              whileHover={{ 
                y: -8, 
                scale: 1.05, 
                boxShadow: "12px 12px 0px #0A0A0A",
                backgroundColor: "#FF4D6D"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 text-xl font-mono font-bold tracking-widest uppercase border-3 border-black bg-black text-white shadow-[8px_8px_0px_#0A0A0A] transition-colors"
            >
              View My Work
              <ArrowRight className="ml-3 inline" size={24} />
            </motion.a>
          </motion.div>
        </div>

        {/* Decorative geometric bars */}
        <motion.div 
          style={{ y: yBars }}
          className="mt-20 flex gap-4"
        >
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.5 }} className="h-5 w-20 rounded-full bg-pink border-2 border-black"></motion.div>
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.6 }} className="h-5 w-32 rounded-full bg-blue border-2 border-black"></motion.div>
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.7 }} className="h-5 w-16 rounded-full bg-yellow border-2 border-black"></motion.div>
        </motion.div>
      </div>
      
      {/* Absolute Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="h-10 w-[3px] animate-bounce bg-black"></div>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
}

function PersonalProjectCard({
  project,
  index,
  onOpen,
}: {
  project: PersonalProject;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      className="group relative flex w-full text-left bg-white border-3 border-black shadow-[8px_8px_0px_#0A0A0A] overflow-hidden cursor-pointer"
      style={{ borderRadius: "0 16px 16px 0" }}
      variants={{
        hover: {
          y: -10,
          x: 4,
          boxShadow: "14px 14px 0px #0A0A0A",
          transition: { type: "spring", stiffness: 280, damping: 18 },
        },
      }}
    >
      {/* Vertical color rail (left) */}
      <motion.div
        className={`${project.color} w-4 md:w-5 border-r-3 border-black shrink-0`}
        variants={{ hover: { width: 24, transition: { duration: 0.2 } } }}
      />

      <div className="flex-1 p-6 md:p-8">
        {/* Live badge + emoji row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl md:text-4xl" aria-hidden>
              {project.emoji}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] font-bold tracking-widest uppercase border-2 border-black bg-yellow px-2.5 py-1 shadow-[2px_2px_0px_#0A0A0A]">
              <motion.span
                className="inline-block h-1.5 w-1.5 rounded-full bg-black"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              Live
            </span>
          </div>
          <Rocket size={20} className="text-black/30 group-hover:text-black transition-colors shrink-0" />
        </div>

        <h3 className="mt-5 text-2xl font-black leading-tight md:text-3xl tracking-tight">
          {project.title}
        </h3>
        <p className={`mt-1 font-mono text-xs font-bold tracking-wider uppercase ${project.accent}`}>
          {project.tagline}
        </p>

        <p className="mt-5 font-serif text-base leading-relaxed text-black/80 line-clamp-4">
          {project.description}
        </p>

        {/* Top tech pills (first 4) */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.flatMap((g) => g.items).slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.65rem] font-bold px-2 py-1 border-2 border-black rounded-sm bg-white shadow-[1px_1px_0px_#0A0A0A]"
            >
              {tag}
            </span>
          ))}
          <span className="font-mono text-[0.65rem] font-bold px-2 py-1 text-black/60">
            +{project.techStack.flatMap((g) => g.items).length - 4} more
          </span>
        </div>

        {/* Footer: action hint + quick links */}
        <div className="mt-7 flex items-center justify-between gap-4 border-t-2 border-black/10 pt-4">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-wider uppercase">
            See details
            <motion.span variants={{ hover: { x: 6, transition: { type: "spring", bounce: 0.6 } } }}>
              <ArrowRight size={16} />
            </motion.span>
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${project.title} GitHub`}
              className="flex h-9 w-9 items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_#0A0A0A] hover:bg-black hover:text-white transition-colors"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${project.title} live demo`}
              className={`flex h-9 w-9 items-center justify-center border-2 border-black ${project.color} shadow-[2px_2px_0px_#0A0A0A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all`}
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function PersonalProjectModal({
  project,
  onClose,
}: {
  project: PersonalProject | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm px-4 py-10 md:py-16"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 40, scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-white border-3 border-black shadow-[12px_12px_0px_#0A0A0A] overflow-hidden"
            style={{ borderRadius: "0 16px 16px 0" }}
          >
            {/* Color rail on left */}
            <div className={`${project.color} absolute left-0 top-0 bottom-0 w-3 md:w-4 border-r-3 border-black`} />

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center border-3 border-black bg-white shadow-[3px_3px_0px_#0A0A0A] hover:bg-pink hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="pl-8 md:pl-12 pr-6 md:pr-10 py-8 md:py-12">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl md:text-5xl" aria-hidden>
                  {project.emoji}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] font-bold tracking-widest uppercase border-2 border-black bg-yellow px-2.5 py-1 shadow-[2px_2px_0px_#0A0A0A]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
                  Deployed · {project.liveLabel}
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">
                {project.title}
              </h2>
              <p className={`mt-2 font-mono text-xs md:text-sm font-bold tracking-wider uppercase ${project.accent}`}>
                {project.tagline}
              </p>

              {/* Action buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 font-mono text-xs md:text-sm font-bold uppercase tracking-wider border-3 border-black bg-black text-white shadow-[4px_4px_0px_#0A0A0A] hover:bg-pink transition-colors"
                >
                  <Rocket size={16} />
                  View Live Demo
                  <ExternalLink size={14} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 font-mono text-xs md:text-sm font-bold uppercase tracking-wider border-3 border-black bg-white shadow-[4px_4px_0px_#0A0A0A] hover:bg-yellow transition-colors"
                >
                  <GithubIcon size={16} />
                  Source Code
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Description */}
              <div className="mt-10">
                <div className="font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-black/50">
                  Overview
                </div>
                <p className="mt-3 font-serif text-base md:text-lg leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-10">
                <div className="font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-black/50">
                  Highlights
                </div>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 font-serif text-base md:text-lg leading-relaxed">
                      <Star size={18} strokeWidth={3} className="mt-1 shrink-0 fill-yellow text-black" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="mt-10">
                <div className="font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-black/50 mb-4 flex items-center gap-2">
                  <Cpu size={14} />
                  Tech Stack
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.techStack.map((group) => (
                    <div
                      key={group.category}
                      className="border-2 border-black p-4 bg-bg shadow-[3px_3px_0px_#0A0A0A]"
                    >
                      <div className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-black/70 mb-2">
                        {group.category}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="font-mono text-[0.7rem] font-bold px-2 py-1 border-2 border-black rounded-sm bg-white shadow-[1px_1px_0px_#0A0A0A]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer with re-emphasised live link */}
              <div className="mt-12 border-t-3 border-black pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <p className="font-mono text-xs tracking-wider font-bold text-black/60">
                  Recruiter? Try it live and read the code.
                </p>
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black font-mono text-xs font-bold uppercase tracking-wider bg-white shadow-[2px_2px_0px_#0A0A0A] hover:bg-yellow transition-colors"
                  >
                    <GithubIcon size={14} /> Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 border-2 border-black font-mono text-xs font-bold uppercase tracking-wider ${project.color} shadow-[2px_2px_0px_#0A0A0A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all`}
                  >
                    <Rocket size={14} /> Live
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PersonalProjects({
  onOpen,
}: {
  onOpen: (p: PersonalProject) => void;
}) {
  const { scrollYProgress } = useScroll();
  const xDivider = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section id="personal" className="px-6 py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 overflow-hidden"
        >
          <div className="flex items-baseline gap-4 flex-wrap">
            <span className="font-mono text-sm font-bold tracking-[0.2em] uppercase inline-block pb-2">
              Personal Projects
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.6rem] font-bold tracking-widest uppercase border-2 border-black bg-blue text-white px-2 py-0.5 shadow-[2px_2px_0px_#0A0A0A]">
              Built &amp; Shipped
            </span>
          </div>
          <motion.div style={{ x: xDivider }} className="h-1 bg-black w-1/4 min-w-[200px] mt-1" />
          <p className="mt-6 max-w-2xl font-serif text-base md:text-lg leading-relaxed text-black/70">
            Projects I built end-to-end on my own time — designed, coded, deployed, and live on the
            internet. Click any card to see the full tech stack and links.
          </p>
        </motion.div>

        {/* 2-col grid — horizontal orientation contrasts with the vertically stacked university projects below */}
        <div className="grid gap-8 md:grid-cols-2">
          {PERSONAL_PROJECTS.map((proj, i) => (
            <PersonalProjectCard
              key={proj.title}
              project={proj}
              index={i}
              onOpen={() => onOpen(proj)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const { scrollYProgress } = useScroll();
  const xDivider = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section id="projects" className="px-6 py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 overflow-hidden"
        >
          <span className="font-mono text-sm font-bold tracking-[0.2em] uppercase inline-block pb-2">University Projects</span>
          <motion.div style={{ x: xDivider }} className="h-1 bg-black w-1/4 min-w-[200px]" />
        </motion.div>

        <div className="space-y-12">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover="hover"
              className="bg-white border-3 border-black shadow-[8px_8px_0px_#0A0A0A] overflow-hidden group cursor-pointer relative"
              style={{ borderRadius: "16px 16px 0 0" }}
              variants={{
                hover: {
                  y: -12,
                  scale: 1.02,
                  boxShadow: "16px 16px 0px #0A0A0A",
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }
              }}
            >
              {/* Color accent top bar */}
              <motion.div 
                className={`${proj.color} h-3 border-b-3 border-black`}
                variants={{
                  hover: { height: "12px", transition: { duration: 0.2 } }
                }}
              />
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-black leading-tight md:text-5xl tracking-tight">
                  {proj.title}
                </h3>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs font-bold px-3 py-1.5 border-2 border-black rounded-full bg-white shadow-[2px_2px_0px_#0A0A0A]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="mt-8 max-w-4xl font-serif text-lg leading-relaxed md:text-xl">
                  {proj.description}
                </p>

                {/* Link */}
                <div className="mt-10 flex justify-end">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 font-mono font-bold uppercase tracking-wider text-sm border-3 border-black bg-black text-white hover:bg-pink transition-colors group-hover:bg-pink relative overflow-hidden"
                  >
                    View Project
                    <motion.div
                      variants={{
                        hover: { x: 5, transition: { type: "spring", bounce: 0.5 } }
                      }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const { scrollYProgress } = useScroll();
  const xDivider = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section id="experience" className="px-6 py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 overflow-hidden"
        >
          <span className="font-mono text-sm font-bold tracking-[0.2em] uppercase inline-block pb-2">Professional Experience</span>
          <motion.div style={{ x: xDivider }} className="h-1 bg-black w-1/4 min-w-[200px]" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ 
                y: -12, 
                scale: 1.02, 
                boxShadow: "16px 16px 0px #0A0A0A"
              }}
              className="bg-white border-3 border-black shadow-[8px_8px_0px_#0A0A0A] overflow-hidden"
              style={{ borderRadius: "16px 16px 0 0" }}
            >
              {/* Color accent top bar */}
              <motion.div className={`${exp.color} h-3 border-b-3 border-black`} />
              <div className="p-8 md:p-10">
                <div className="mb-2 font-mono text-sm font-bold tracking-widest uppercase text-black/60">
                  {exp.date}
                </div>
                <h3 className="text-2xl font-black leading-tight md:text-3xl">
                  {exp.role}
                </h3>
                <p className="mt-2 font-mono text-base font-bold bg-yellow inline-block px-2 border-2 border-black -ml-2 skew-x-[-10deg]">
                  <span className="skew-x-[10deg] block">@ {exp.company}</span>
                </p>
                <ul className="mt-8 space-y-4">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-4 font-serif text-base leading-relaxed md:text-lg">
                      <Star size={18} strokeWidth={3} className="mt-1 shrink-0 fill-yellow text-black" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const { scrollYProgress } = useScroll();
  const xDivider = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section id="skills" className="px-6 py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 overflow-hidden"
        >
          <span className="font-mono text-sm font-bold tracking-[0.2em] uppercase inline-block pb-2">Skills</span>
          <motion.div style={{ x: xDivider }} className="h-1 bg-black w-1/4 min-w-[200px]" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ 
                y: -6, 
                rotate: i % 2 === 0 ? 1 : -1,
                boxShadow: "10px 10px 0px #0A0A0A"
              }}
              className="bg-white border-3 border-black shadow-[6px_6px_0px_#0A0A0A] overflow-hidden"
              style={{ borderRadius: "12px 12px 0 0" }}
            >
              <div className={`${skill.color} h-3 border-b-3 border-black`}></div>
              <div className="p-6">
                <div className="mb-5 flex items-center gap-3 border-b-2 border-black/10 pb-3">
                  {skill.icon}
                  <h4 className="font-mono text-sm font-bold uppercase tracking-widest">
                    {skill.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="font-mono text-[0.7rem] font-bold px-2 py-1 border-2 border-black rounded-sm bg-white shadow-[1px_1px_0px_#0A0A0A]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 py-32 md:py-48 relative overflow-hidden">
      <div className="mx-auto max-w-6xl text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-sans text-5xl font-black tracking-[-0.04em] md:text-7xl lg:text-8xl"
        >
          LET'S BUILD
          <br />
          SOMETHING.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-10 max-w-2xl font-mono text-sm leading-relaxed tracking-wider md:text-base bg-white border-3 border-black shadow-[6px_6px_0px_#0A0A0A] p-6 text-left relative"
        >
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-pink border-3 border-black rounded-full" />
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue border-3 border-black rounded-full" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-yellow border-3 border-black rounded-full" />
          
          <p className="mb-4 text-center font-bold">
            Open to opportunities in <span className="text-pink">product management</span>, <span className="text-blue">UX research</span>, <span className="text-pink">data analytics</span>, and <span className="text-yellow">digital innovation</span> — based in Linz, Austria.
          </p>
          <div className="mt-8 border-t-2 border-black/10 pt-6 text-center text-sm md:text-base">
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:avisinghsing471@gmail.com" className="hover:text-pink transition-colors">avisinghsing471@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+4367763473267" className="hover:text-pink transition-colors">+43 677 63473267</a></p>
          </div>
        </motion.div>

        {/* Icon buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <motion.a
            href="mailto:avisinghsing471@gmail.com"
            aria-label="Email"
            whileHover={{ y: -6, boxShadow: "8px 8px 0px #0A0A0A", backgroundColor: "#FF4D6D", color: "white" }}
            className="flex h-16 w-16 items-center justify-center border-3 border-black bg-white shadow-[4px_4px_0px_#0A0A0A] transition-colors"
          >
            <Mail size={28} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/avneetsinghs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ y: -6, boxShadow: "8px 8px 0px #0A0A0A", backgroundColor: "#4361EE", color: "white" }}
            className="flex h-16 w-16 items-center justify-center border-3 border-black bg-white shadow-[4px_4px_0px_#0A0A0A] transition-colors"
          >
            <LinkedinIcon size={28} />
          </motion.a>
        </motion.div>

        {/* Decorative blocks */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <div className="h-4 w-12 border-2 border-black bg-pink"></div>
          <div className="h-4 w-20 border-2 border-black bg-blue"></div>
          <div className="h-4 w-8 border-2 border-black bg-yellow"></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-3 border-black bg-white px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-sm font-bold tracking-widest uppercase">
          © 2026 Avneet Singh · Linz, Austria
        </p>
        <p className="font-mono text-xs tracking-wider font-bold text-black/50">
          Built with React & Framer Motion
        </p>
      </div>
    </footer>
  );
}

/* ─── App ─── */

export default function App() {
  const [activeProject, setActiveProject] = useState<PersonalProject | null>(null);

  return (
    <div className="min-h-screen bg-bg text-black relative z-0 selection:bg-yellow selection:text-black">
      <FloatingShapes />
      <Navbar />
      <Hero />
      <PersonalProjects onOpen={setActiveProject} />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <PersonalProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
