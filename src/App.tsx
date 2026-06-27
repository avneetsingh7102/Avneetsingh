import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
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
  slug: "defect" | "chess" | "fire" | "robot";
  status: "deployed" | "wip";
  color: string;
  accent: string;
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  techStack: { category: string; items: string[] }[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  videoUrl?: string;
  posterUrl?: string;
};

const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    slug: "defect",
    status: "deployed",
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
    slug: "chess",
    status: "deployed",
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
  {
    slug: "fire",
    status: "wip",
    color: "bg-pink",
    accent: "text-pink",
    emoji: "🔥",
    title: "Fire & Smoke Detection",
    tagline: "Real-time safety monitoring for factory floors",
    description:
      "Computer vision classifier that flags fire and smoke from industrial CCTV feeds the moment they appear. Reuses the YOLOv8 + ONNX foundation from my defect work, retargeted for safety.",
    longDescription:
      "An always-on safety net for industrial environments. The model continuously watches CCTV feeds and raises an alert the instant flame or smoke patterns appear — long before traditional sensors would trigger. Built on the same YOLOv8 + ONNX Runtime pipeline I used for steel defect detection, but trained on fire/smoke datasets and tuned for low-false-positive operation in noisy factory scenes. Currently iterating on dataset curation, edge-deployment quantisation, and a multi-camera dashboard for plant managers.",
    techStack: [
      { category: "Computer Vision", items: ["YOLOv8", "OpenCV", "ONNX Runtime", "PyTorch"] },
      { category: "Data", items: ["FireNet dataset", "Custom labelling", "Augmentation"] },
      { category: "Backend", items: ["Python", "Flask", "RTSP ingest"] },
      { category: "Target", items: ["Edge devices", "Multi-camera dashboard"] },
    ],
    highlights: [
      "Detects flame + smoke separately for better incident classification",
      "Targets <100ms latency on Raspberry Pi-class hardware",
      "Tuned for noisy industrial scenes — minimises false positives",
      "Foundation reused from production-ready defect detection pipeline",
    ],
  },
  {
    slug: "robot",
    status: "deployed",
    color: "bg-yellow",
    accent: "text-black",
    emoji: "🤖",
    title: "Voice-Controlled Robot Arm",
    tagline: "State a goal in plain English — it plans, acts & self-checks",
    description:
      "Tell a simulated Franka-Panda arm a goal in plain language — \"sort everything into its colour bucket\". A Groq LLM turns it into a plan, a Python controller runs it collision-free in PyBullet, and the robot verifies its own work — looping until the goal is actually done.",
    longDescription:
      "A robot arm you command with a sentence. Speech (Whisper) or text becomes a goal; a Groq-hosted LLM reads the goal and the scene and returns high-level actions — never raw coordinates — while deterministic code turns those into collision-safe motion and senses the moment an object lands. The idea I'm most proud of is a human one: the brain tells a one-shot TASK (\"drop the hammer\") from an open-ended JOB (\"sort everything\"). A task is finished the instant it acts; a job loops plan → act → re-check → fix until the world matches the goal, with hard caps so it never loops forever. One brain runs five scenes — sorting, stacking, a kitchen, a workshop and painting. Honest status: the decision-making and self-correcting control loop are solid; grasping irregular shapes is still the weak link, so end-to-end accuracy isn't high yet — which is exactly what I'm improving next.",
    techStack: [
      { category: "Voice → Text", items: ["Whisper"] },
      { category: "Reasoning", items: ["Groq LLM (llama-3.3-70b)", "Task vs Job intent", "Prompt design"] },
      { category: "Simulation", items: ["PyBullet", "Franka-Panda arm"] },
      { category: "Control", items: ["Python", "Closed-loop verify/retry", "Contact-based grasping"] },
      { category: "Memory", items: ["Persistent lessons", "Skill library"] },
      { category: "Demo", items: ["Gradio", "Hugging Face Spaces"] },
    ],
    highlights: [
      "Task vs Job — tells a one-shot order from an open-ended mission, and loops only when it needs to",
      "Closed loop — observes the real result, retries failures, and stops itself when the goal holds",
      "Bounded autonomy — hard caps on planning rounds and time so a job never runs away",
      "One brain, five scenes — sorter, builder, kitchen, workshop and painter",
      "Honest: the control loop is reliable; grasping accuracy is the next thing to improve",
    ],
    githubUrl: "https://github.com/avneetsingh7102/Voice-Controlled-Robot-Arm",
    liveUrl: `${import.meta.env.BASE_URL}robot-demo.mp4`,
    liveLabel: "Demo video",
    videoUrl: `${import.meta.env.BASE_URL}robot-demo.mp4`,
    posterUrl: `${import.meta.env.BASE_URL}robot-poster.jpg`,
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

/* ─── Project Artifacts (animated visual previews on cards) ─── */

function DefectArtifact({ size = "card" }: { size?: "card" | "modal" }) {
  const isModal = size === "modal";
  return (
    <div className={`relative w-full ${isModal ? "aspect-[21/9]" : "aspect-[16/9]"} bg-black border-b-3 border-black overflow-hidden`}>
      <svg
        viewBox="0 0 320 180"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <pattern id="steel-hatch" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
            <rect width="10" height="10" fill="#1a1a1a" />
            <line x1="0" y1="0" x2="0" y2="10" stroke="#2c2c2c" strokeWidth="3" />
          </pattern>
          <pattern id="steel-dots" patternUnits="userSpaceOnUse" width="22" height="22">
            <circle cx="2" cy="2" r="0.6" fill="#4a4a4a" />
          </pattern>
        </defs>
        <rect width="320" height="180" fill="url(#steel-hatch)" />
        <rect width="320" height="180" fill="url(#steel-dots)" />

        {/* Crosshair center */}
        <g opacity="0.35">
          <line x1="160" y1="78" x2="160" y2="102" stroke="#FFD60A" strokeWidth="1" />
          <line x1="148" y1="90" x2="172" y2="90" stroke="#FFD60A" strokeWidth="1" />
          <circle cx="160" cy="90" r="3" fill="none" stroke="#FFD60A" strokeWidth="1" />
        </g>

        {/* Detection box 1 — Crazing (pink) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ transformOrigin: "65px 56px" }}
        >
          <rect x="30" y="35" width="70" height="42" fill="rgba(255,77,109,0.10)" stroke="#FF4D6D" strokeWidth="2.5" />
          {/* Corner ticks */}
          <line x1="30" y1="35" x2="38" y2="35" stroke="#FF4D6D" strokeWidth="4" />
          <line x1="30" y1="35" x2="30" y2="43" stroke="#FF4D6D" strokeWidth="4" />
          <line x1="100" y1="77" x2="92" y2="77" stroke="#FF4D6D" strokeWidth="4" />
          <line x1="100" y1="77" x2="100" y2="69" stroke="#FF4D6D" strokeWidth="4" />
        </motion.g>

        {/* Detection box 2 — Pitted (blue) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.5 }}
          style={{ transformOrigin: "197px 107px" }}
        >
          <rect x="170" y="80" width="55" height="55" fill="rgba(67,97,238,0.10)" stroke="#4361EE" strokeWidth="2.5" />
          <line x1="170" y1="80" x2="178" y2="80" stroke="#4361EE" strokeWidth="4" />
          <line x1="170" y1="80" x2="170" y2="88" stroke="#4361EE" strokeWidth="4" />
          <line x1="225" y1="135" x2="217" y2="135" stroke="#4361EE" strokeWidth="4" />
          <line x1="225" y1="135" x2="225" y2="127" stroke="#4361EE" strokeWidth="4" />
        </motion.g>

        {/* Detection box 3 — Scratch (yellow) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.8 }}
          style={{ transformOrigin: "265px 57px" }}
        >
          <rect x="240" y="40" width="50" height="35" fill="rgba(255,214,10,0.12)" stroke="#FFD60A" strokeWidth="2.5" />
          <line x1="240" y1="40" x2="248" y2="40" stroke="#FFD60A" strokeWidth="4" />
          <line x1="240" y1="40" x2="240" y2="48" stroke="#FFD60A" strokeWidth="4" />
          <line x1="290" y1="75" x2="282" y2="75" stroke="#FFD60A" strokeWidth="4" />
          <line x1="290" y1="75" x2="290" y2="67" stroke="#FFD60A" strokeWidth="4" />
        </motion.g>

        {/* Scanning line */}
        <motion.line
          x1="0" x2="320"
          stroke="#FFD60A"
          strokeWidth="1.5"
          opacity="0.55"
          initial={{ y1: 0, y2: 0 }}
          animate={{ y1: [0, 180, 0], y2: [0, 180, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Class labels (top corners) */}
      <div className="absolute top-2 left-2 font-mono text-[0.5rem] md:text-[0.6rem] font-bold tracking-widest uppercase bg-pink text-white px-1.5 py-0.5 border-2 border-black shadow-[2px_2px_0px_#0A0A0A]">
        Crazing · 0.92
      </div>
      <div className="absolute top-2 right-2 font-mono text-[0.5rem] md:text-[0.6rem] font-bold tracking-widest uppercase bg-yellow text-black px-1.5 py-0.5 border-2 border-black shadow-[2px_2px_0px_#0A0A0A]">
        Scratch · 0.76
      </div>
      <div className="absolute bottom-2 left-2 font-mono text-[0.5rem] md:text-[0.6rem] font-bold tracking-widest uppercase bg-blue text-white px-1.5 py-0.5 border-2 border-black shadow-[2px_2px_0px_#0A0A0A]">
        Pitted · 0.87
      </div>

      {/* Live indicator bottom-right */}
      <div className="absolute bottom-2 right-2 inline-flex items-center gap-1 font-mono text-[0.5rem] md:text-[0.6rem] font-bold tracking-widest uppercase bg-black text-white px-1.5 py-0.5 border-2 border-yellow">
        <motion.span
          className="inline-block h-1 w-1 rounded-full bg-yellow"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        YOLOv8 · 160fps
      </div>
    </div>
  );
}

function ChessArtifact({ size = "card" }: { size?: "card" | "modal" }) {
  const isModal = size === "modal";
  /* Mini board state for a small visual — Knight on f3 about to move to e5 */
  const board: string[][] = [
    ["♜", "", "", "♛", "♚", "", "", "♜"],
    ["♟", "♟", "♟", "", "", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "♟", "", "", ""],
    ["", "", "", "", "♙", "", "", ""],
    ["", "", "", "", "", "♘", "", ""],
    ["♙", "♙", "♙", "♙", "", "♙", "♙", "♙"],
    ["♖", "", "♗", "♕", "♔", "♗", "♘", "♖"],
  ];

  return (
    <div className={`relative w-full ${isModal ? "aspect-[21/9]" : "aspect-[16/9]"} bg-bg border-b-3 border-black overflow-hidden flex items-center justify-center px-6`}>
      {/* Soft grid background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "linear-gradient(#0A0A0A14 1px, transparent 1px), linear-gradient(90deg, #0A0A0A14 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }} />

      {/* Voice command bubble (top-left) */}
      <motion.div
        initial={{ opacity: 0, x: -10, y: -6 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="absolute top-2 left-2 inline-flex items-center gap-1.5 font-mono text-[0.55rem] md:text-[0.65rem] font-bold tracking-widest uppercase bg-pink text-white px-2 py-1 border-2 border-black shadow-[2px_2px_0px_#0A0A0A] z-10"
      >
        {/* mini waveform */}
        <span className="flex items-end gap-[2px] h-3">
          {[3, 8, 5, 10, 4].map((h, i) => (
            <motion.span
              key={i}
              className="block w-[2px] bg-white"
              animate={{ height: [`${h}px`, `${h + 4}px`, `${h}px`] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.08 }}
            />
          ))}
        </span>
        “Knight f3”
      </motion.div>

      {/* Mini board */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 220, damping: 22 }}
        className="relative grid grid-cols-8 border-2 border-black shadow-[4px_4px_0px_#0A0A0A] bg-white"
        style={{ width: isModal ? "32%" : "55%", maxWidth: "260px" }}
      >
        {board.flat().map((piece, i) => {
          const row = Math.floor(i / 8);
          const col = i % 8;
          const dark = (row + col) % 2 === 1;
          /* f3 → e5: f3 is col=5,row=5 (index 5*8+5=45). e5 is col=4,row=3 (3*8+4=28). */
          const isFrom = i === 45;
          const isTo = i === 28;
          return (
            <div
              key={i}
              className={`aspect-square relative flex items-center justify-center text-[0.55rem] md:text-[0.75rem] leading-none ${
                dark ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {isFrom && (
                <motion.span
                  className="absolute inset-[2px] ring-2 ring-pink"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
              )}
              {isTo && (
                <motion.span
                  className="absolute inset-[2px] ring-2 ring-yellow"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: 0.6 }}
                />
              )}
              <span className="relative z-[1]">{piece}</span>
            </div>
          );
        })}

        {/* Move arrow from f3 to e5 (SVG overlay) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 8 8"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <marker id="arrowhead-chess" markerWidth="3" markerHeight="3" refX="2" refY="1.5" orient="auto">
              <path d="M0,0 L3,1.5 L0,3 z" fill="#FF4D6D" />
            </marker>
          </defs>
          <motion.line
            x1="5.5" y1="5.5"  /* center of f3 */
            x2="4.5" y2="3.5"  /* center of e5 */
            stroke="#FF4D6D"
            strokeWidth="0.18"
            strokeLinecap="round"
            markerEnd="url(#arrowhead-chess)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.9 }}
          />
        </svg>
      </motion.div>

      {/* Status badge (bottom-right) */}
      <div className="absolute bottom-2 right-2 inline-flex items-center gap-1 font-mono text-[0.5rem] md:text-[0.6rem] font-bold tracking-widest uppercase bg-black text-white px-1.5 py-0.5 border-2 border-yellow">
        <motion.span
          className="inline-block h-1 w-1 rounded-full bg-yellow"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        Voice · ON
      </div>

      {/* Difficulty pills (bottom-left) */}
      <div className="absolute bottom-2 left-2 hidden sm:flex items-center gap-1">
        {["Beg", "Int", "Adv", "Master"].map((lvl, i) => (
          <span
            key={lvl}
            className={`font-mono text-[0.5rem] md:text-[0.55rem] font-bold tracking-widest uppercase px-1.5 py-0.5 border-2 border-black ${
              i === 2 ? "bg-yellow text-black" : "bg-white text-black/50"
            }`}
          >
            {lvl}
          </span>
        ))}
      </div>
    </div>
  );
}

function FireSmokeArtifact({ size = "card" }: { size?: "card" | "modal" }) {
  const isModal = size === "modal";
  return (
    <div className={`relative w-full ${isModal ? "aspect-[21/9]" : "aspect-[16/9]"} bg-black border-b-3 border-black overflow-hidden`}>
      <svg
        viewBox="0 0 320 180"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <pattern id="floor-hatch" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
            <rect width="10" height="10" fill="#1a1a1a" />
            <line x1="0" y1="0" x2="0" y2="10" stroke="#2c2c2c" strokeWidth="3" />
          </pattern>
          <radialGradient id="fire-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF4D6D" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#FFD60A" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="smoke-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD60A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="320" height="180" fill="url(#floor-hatch)" />

        {/* Factory silhouette */}
        <g fill="#0c0c0c" stroke="#262626" strokeWidth="0.8">
          <rect x="20" y="120" width="50" height="40" />
          <rect x="35" y="100" width="20" height="20" />
          <rect x="80" y="135" width="35" height="25" />
          <rect x="225" y="115" width="65" height="45" />
          <rect x="245" y="95" width="25" height="20" />
          <polygon points="155,150 170,120 185,150" />
        </g>

        {/* Fire glow + flicker */}
        <motion.ellipse
          cx="170" cy="105" rx="42" ry="32"
          fill="url(#fire-glow)"
          animate={{ opacity: [0.85, 1, 0.7, 1, 0.9] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Smoke glow above the fire */}
        <motion.ellipse
          cx="170" cy="55" rx="55" ry="28"
          fill="url(#smoke-glow)"
          animate={{ opacity: [0.4, 0.7, 0.4], cy: [55, 50, 55] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* FIRE bounding box */}
        <motion.g
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ transformOrigin: "170px 105px" }}
        >
          <rect x="138" y="86" width="64" height="42" fill="rgba(255,77,109,0.10)" stroke="#FF4D6D" strokeWidth="2.5" />
          <line x1="138" y1="86" x2="146" y2="86" stroke="#FF4D6D" strokeWidth="4" />
          <line x1="138" y1="86" x2="138" y2="94" stroke="#FF4D6D" strokeWidth="4" />
          <line x1="202" y1="128" x2="194" y2="128" stroke="#FF4D6D" strokeWidth="4" />
          <line x1="202" y1="128" x2="202" y2="120" stroke="#FF4D6D" strokeWidth="4" />
        </motion.g>

        {/* SMOKE bounding box */}
        <motion.g
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.6 }}
          style={{ transformOrigin: "170px 50px" }}
        >
          <rect x="118" y="32" width="104" height="38" fill="rgba(255,214,10,0.10)" stroke="#FFD60A" strokeWidth="2.5" strokeDasharray="6 4" />
        </motion.g>

        {/* Smoke particles rising */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={i}
            cx={155 + i * 8}
            cy={82}
            r="1.6"
            fill="#FFD60A"
            opacity="0.55"
            animate={{ cy: [82, 30], opacity: [0.55, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.7, ease: "easeOut" }}
          />
        ))}
      </svg>

      {/* Labels */}
      <div className="absolute top-2 left-2 font-mono text-[0.5rem] md:text-[0.6rem] font-bold tracking-widest uppercase bg-pink text-white px-1.5 py-0.5 border-2 border-black shadow-[2px_2px_0px_#0A0A0A]">
        🔥 Fire · 0.94
      </div>
      <div className="absolute top-2 right-2 font-mono text-[0.5rem] md:text-[0.6rem] font-bold tracking-widest uppercase bg-yellow text-black px-1.5 py-0.5 border-2 border-black shadow-[2px_2px_0px_#0A0A0A]">
        Smoke · 0.87
      </div>
      <div className="absolute bottom-2 left-2 font-mono text-[0.5rem] md:text-[0.6rem] font-bold tracking-widest uppercase bg-black text-white px-1.5 py-0.5 border-2 border-yellow">
        CCTV-04 · Factory A
      </div>
      {/* Building / WIP indicator instead of LIVE */}
      <div className="absolute bottom-2 right-2 inline-flex items-center gap-1 font-mono text-[0.5rem] md:text-[0.6rem] font-bold tracking-widest uppercase bg-black text-yellow px-1.5 py-0.5 border-2 border-yellow">
        <motion.span
          className="inline-block h-1 w-1 rounded-full bg-yellow"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        Training · v0.3
      </div>
    </div>
  );
}

function RoboticArmArtifact({ size = "card" }: { size?: "card" | "modal" }) {
  const isModal = size === "modal";
  return (
    <div className={`relative w-full ${isModal ? "aspect-[21/9]" : "aspect-[16/9]"} bg-bg border-b-3 border-black overflow-hidden`}>
      {/* Subtle grid backdrop, same as chess */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "linear-gradient(#0A0A0A14 1px, transparent 1px), linear-gradient(90deg, #0A0A0A14 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }} />

      {/* Pipeline overlay: voice → LLM → arm */}
      <svg
        viewBox="0 0 320 180"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <marker id="arrow-robot" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="#0A0A0A" />
          </marker>
        </defs>

        {/* Stage connectors */}
        <motion.line
          x1="78" y1="92" x2="120" y2="92"
          stroke="#0A0A0A" strokeWidth="2"
          markerEnd="url(#arrow-robot)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <motion.line
          x1="184" y1="92" x2="226" y2="92"
          stroke="#0A0A0A" strokeWidth="2"
          markerEnd="url(#arrow-robot)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 1.0 }}
        />

        {/* === Robot arm (right side) === */}
        <motion.g
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {/* Base */}
          <rect x="252" y="138" width="40" height="14" fill="#FFD60A" stroke="#0A0A0A" strokeWidth="2" />
          <rect x="260" y="128" width="24" height="10" fill="#0A0A0A" />
          {/* Joint 1 */}
          <circle cx="272" cy="128" r="4" fill="#FF4D6D" stroke="#0A0A0A" strokeWidth="2" />
          {/* Animated arm segments — slight oscillation */}
          <motion.g
            animate={{ rotate: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "272px 128px" }}
          >
            <line x1="272" y1="128" x2="272" y2="92" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" />
            <circle cx="272" cy="92" r="4" fill="#FF4D6D" stroke="#0A0A0A" strokeWidth="2" />
            <motion.g
              animate={{ rotate: [0, 14, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "272px 92px" }}
            >
              <line x1="272" y1="92" x2="296" y2="74" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" />
              {/* Gripper */}
              <g transform="translate(296,74)">
                <line x1="0" y1="0" x2="0" y2="-6" stroke="#0A0A0A" strokeWidth="2" />
                <line x1="-4" y1="-6" x2="4" y2="-6" stroke="#0A0A0A" strokeWidth="2.5" />
                <line x1="-4" y1="-6" x2="-4" y2="-2" stroke="#0A0A0A" strokeWidth="2.5" />
                <line x1="4" y1="-6" x2="4" y2="-2" stroke="#0A0A0A" strokeWidth="2.5" />
              </g>
            </motion.g>
          </motion.g>

          {/* Target cube (red) under the gripper */}
          <motion.g
            initial={{ y: 6, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 1.5 }}
          >
            <rect x="236" y="138" width="14" height="14" fill="#FF4D6D" stroke="#0A0A0A" strokeWidth="2" />
          </motion.g>
        </motion.g>
      </svg>

      {/* Stage 1: voice bubble (top-left) */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="absolute top-3 left-3 inline-flex flex-col gap-1"
      >
        <span className="inline-flex items-center gap-1.5 font-mono text-[0.5rem] md:text-[0.6rem] font-bold tracking-widest uppercase bg-pink text-white px-2 py-1 border-2 border-black shadow-[2px_2px_0px_#0A0A0A]">
          <span className="flex items-end gap-[2px] h-3">
            {[3, 7, 4, 9, 3].map((h, i) => (
              <motion.span
                key={i}
                className="block w-[2px] bg-white"
                animate={{ height: [`${h}px`, `${h + 4}px`, `${h}px`] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.08 }}
              />
            ))}
          </span>
          Voice
        </span>
        <span className="font-mono text-[0.55rem] md:text-[0.65rem] font-bold bg-white text-black px-2 py-1 border-2 border-black shadow-[2px_2px_0px_#0A0A0A]">
          “pick the red cube”
        </span>
      </motion.div>

      {/* Stage 2: LLM task plan (middle) */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex flex-col gap-1 items-center"
      >
        <span className="font-mono text-[0.5rem] md:text-[0.6rem] font-bold tracking-widest uppercase bg-yellow text-black px-2 py-1 border-2 border-black shadow-[2px_2px_0px_#0A0A0A]">
          LLM · Plan
        </span>
        <div className="font-mono text-[0.5rem] md:text-[0.6rem] leading-tight bg-black text-white px-2 py-1 border-2 border-black shadow-[2px_2px_0px_#0A0A0A] text-left max-w-[110px]">
          1. locate(red)<br/>
          2. grip()<br/>
          3. lift(20)
        </div>
      </motion.div>

      {/* WIP indicator */}
      <div className="absolute bottom-2 right-2 inline-flex items-center gap-1 font-mono text-[0.5rem] md:text-[0.6rem] font-bold tracking-widest uppercase bg-black text-yellow px-1.5 py-0.5 border-2 border-yellow">
        <motion.span
          className="inline-block h-1 w-1 rounded-full bg-yellow"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        Webots · Sim
      </div>

      {/* Pipeline label bottom-left */}
      <div className="absolute bottom-2 left-2 font-mono text-[0.5rem] md:text-[0.6rem] font-bold tracking-widest uppercase bg-white text-black px-1.5 py-0.5 border-2 border-black">
        Whisper → LLM → Webots
      </div>
    </div>
  );
}

function ProjectArtifact({ slug, size }: { slug: PersonalProject["slug"]; size?: "card" | "modal" }) {
  if (slug === "defect") return <DefectArtifact size={size} />;
  if (slug === "chess") return <ChessArtifact size={size} />;
  if (slug === "fire") return <FireSmokeArtifact size={size} />;
  return <RoboticArmArtifact size={size} />;
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

      <div className="flex-1 flex flex-col">
        {/* Visual artifact — full-bleed at the top of card content */}
        <ProjectArtifact slug={project.slug} />

        <div className="p-6 md:p-8">
        {/* Live / WIP badge + emoji row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl md:text-4xl" aria-hidden>
              {project.emoji}
            </span>
            {project.status === "deployed" ? (
              <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] font-bold tracking-widest uppercase border-2 border-black bg-yellow px-2.5 py-1 shadow-[2px_2px_0px_#0A0A0A]">
                <motion.span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-black"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
                Live
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] font-bold tracking-widest uppercase border-2 border-black bg-black text-yellow px-2.5 py-1 shadow-[2px_2px_0px_#0A0A0A]">
                <motion.span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-yellow"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                Building
              </span>
            )}
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
            {project.githubUrl && (
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
            )}
            {project.liveUrl ? (
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
            ) : (
              <span className="font-mono text-[0.55rem] font-bold tracking-widest uppercase text-black/50 px-2 border-2 border-black/20 py-1.5">
                Demo soon
              </span>
            )}
          </div>
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
          /* data-lenis-prevent: stops Lenis from hijacking wheel/touch inside the modal,
             so this container's overflow-y-auto scroll behaves natively. */
          data-lenis-prevent
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm px-4 py-10 md:py-16"
          onClick={onClose}
          onWheel={(e) => e.stopPropagation()}
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

            {/* Full-bleed artifact preview at the top of the modal — a real demo
                video when the project has one, otherwise the animated artifact. */}
            <div className="pl-8 md:pl-12">
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  poster={project.posterUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full aspect-[21/9] object-cover bg-black border-b-3 border-black"
                />
              ) : (
                <ProjectArtifact slug={project.slug} size="modal" />
              )}
            </div>

            <div className="pl-8 md:pl-12 pr-6 md:pr-10 py-8 md:py-12">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl md:text-5xl" aria-hidden>
                  {project.emoji}
                </span>
                {project.status === "deployed" ? (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] font-bold tracking-widest uppercase border-2 border-black bg-yellow px-2.5 py-1 shadow-[2px_2px_0px_#0A0A0A]">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
                    Deployed · {project.liveLabel}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] font-bold tracking-widest uppercase border-2 border-black bg-black text-yellow px-2.5 py-1 shadow-[2px_2px_0px_#0A0A0A]">
                    <motion.span
                      className="inline-block h-1.5 w-1.5 rounded-full bg-yellow"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                    Work in progress
                  </span>
                )}
              </div>

              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">
                {project.title}
              </h2>
              <p className={`mt-2 font-mono text-xs md:text-sm font-bold tracking-wider uppercase ${project.accent}`}>
                {project.tagline}
              </p>

              {/* Action buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                {project.liveUrl ? (
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
                ) : (
                  <span className="inline-flex items-center gap-2 px-5 py-3 font-mono text-xs md:text-sm font-bold uppercase tracking-wider border-3 border-black/30 bg-bg text-black/40 cursor-not-allowed">
                    <Rocket size={16} />
                    Demo coming soon
                  </span>
                )}
                {project.githubUrl && (
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
                )}
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
                  {project.status === "deployed"
                    ? "Recruiter? Try it live and read the code."
                    : "Currently building — code & demo will land here as it ships."}
                </p>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black font-mono text-xs font-bold uppercase tracking-wider bg-white shadow-[2px_2px_0px_#0A0A0A] hover:bg-yellow transition-colors"
                    >
                      <GithubIcon size={14} /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 border-2 border-black font-mono text-xs font-bold uppercase tracking-wider ${project.color} shadow-[2px_2px_0px_#0A0A0A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all`}
                    >
                      <Rocket size={14} /> Live
                    </a>
                  )}
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
            Projects I built end-to-end on my own time — designed, coded, and either live on the
            internet or actively being built. Shipped work sits at the top; what I'm building now
            sits below. Click any card to see the tech stack and links.
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

  /* Smooth, lerped scroll for that "high-FPS" feel. Pairs cleanly with Framer Motion's useScroll. */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    /* Hand off in-page anchor links to Lenis so #section jumps stay smooth */
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -60 });
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

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
