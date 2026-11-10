const projectTemplates = {
  all: [
    {
      name: "Nebula Note",
      tagline: "A quiet little app for turning scattered ideas into a cosmic to-do list.",
      stack: "Next.js + Supabase",
      mood: "Dreamy",
      palette: "Aurora Pink",
      audience: "Solo creators",
      problem: "People are overwhelmed by context switching and never remember where their ideas went.",
      launch: "Position it as the personal command center for creative minds in motion.",
      features: [
        "Smart capture from voice and text",
        "Auto-tagging without friction",
        "Instant mood-based summaries"
      ]
    },
    {
      name: "Pocket Harbor",
      tagline: "A cozy digital dock for the small rituals that keep your week afloat.",
      stack: "React + Firebase",
      mood: "Calm",
      palette: "Lagoon Blue",
      audience: "Busy professionals",
      problem: "Modern life is full of tiny tasks that quietly pile up and create stress.",
      launch: "Sell it as the calmest way to organize life without turning planning into work.",
      features: [
        "Habit dashboards with gentle nudges",
        "Mood-linked routines",
        "Shared accountability circles"
      ]
    },
    {
      name: "Signal Bloom",
      tagline: "Build a creative feedback loop that turns raw inspiration into polished work.",
      stack: "Vite + Postgres",
      mood: "Playful",
      palette: "Sunset Glow",
      audience: "Design teams",
      problem: "Creative teams lose momentum when feedback is scattered across too many tools.",
      launch: "Frame it as a lightweight studio assistant for teams that move fast.",
      features: [
        "Snippet critique boards",
        "Version-aware mood notes",
        "Auto-summarized feedback threads"
      ]
    },
    {
      name: "Drift Board",
      tagline: "Turn your chaotic ideas into visual boards that feel like a creative storm map.",
      stack: "Svelte + Prisma",
      mood: "Energetic",
      palette: "Neon Mint",
      audience: "Writers and researchers",
      problem: "Big ideas get lost when they exist across notes, bookmarks, and random tabs.",
      launch: "Market it as the visual home for curiosity and research threads.",
      features: [
        "Infinite idea nodes",
        "Searchable concept clusters",
        "Exportable research kits"
      ]
    }
  ],
  productivity: [
    {
      name: "Orbit List",
      tagline: "Turn your goals into tiny missions with momentum built in.",
      stack: "Next.js + Supabase",
      mood: "Focused",
      palette: "Electric Indigo",
      audience: "Bootstrapped founders",
      problem: "Big productivity tools feel heavy, but small tasks still accumulate without friction.",
      launch: "Position it as the minimal planning companion for ambitious people who dislike clutter.",
      features: [
        "Mission-based task blocks",
        "Adaptive weekly planning",
        "One-click recovery for dropped tasks"
      ]
    },
    {
      name: "Quiet Queue",
      tagline: "The calmest place to sort, prioritize, and finish your work.",
      stack: "React + Firebase",
      mood: "Focused",
      palette: "Cloud Slate",
      audience: "Remote teams",
      problem: "Async work becomes noisy when everyone uses different systems and labels.",
      launch: "Package it as a shared clarity layer for distributed teams.",
      features: [
        "Priority scoring",
        "Team-level task handoff",
        "Status snapshots for everyone"
      ]
    }
  ],
  creative: [
    {
      name: "Canvas Echo",
      tagline: "A visual notebook that captures ideas as they emerge and evolve.",
      stack: "Vue + PocketBase",
      mood: "Playful",
      palette: "Coral Pop",
      audience: "Illustrators and artists",
      problem: "Creativity thrives in motion, but inspiration rarely arrives in a neat format.",
      launch: "Sell it as a lightweight studio for visual thinkers who need freedom, not structure.",
      features: [
        "Sketch-to-note conversion",
        "Moodboard clustering",
        "Idea remix templates"
      ]
    },
    {
      name: "Muse Mender",
      tagline: "Collaborative inspiration tracking for creators building from spark to finish.",
      stack: "Svelte + Prisma",
      mood: "Bold",
      palette: "Solar Gold",
      audience: "Creative directors",
      problem: "Creative teams lose the thread when inspiration is trapped in meetings and screenshots.",
      launch: "Position it as the living memory of a creative process.",
      features: [
        "Reference vaults",
        "Mood sliders",
        "Build-in-progress prompts"
      ]
    }
  ],
  wellness: [
    {
      name: "Bloom Loop",
      tagline: "Gentle routines that help your energy find its rhythm again.",
      stack: "Next.js + Postgres",
      mood: "Grounded",
      palette: "Mint Mist",
      audience: "Wellness seekers",
      problem: "People know what helps them feel better, but consistency is hard without structure.",
      launch: "Position it as the sustainable self-care planner that respects real life.",
      features: [
        "Habit check-ins",
        "Stress-recovery prompts",
        "Daily reflection journal"
      ]
    },
    {
      name: "Sunrise Thread",
      tagline: "A mindful dashboard for routines, recovery, and calm mornings.",
      stack: "React + Supabase",
      mood: "Restorative",
      palette: "Peach Dawn",
      audience: "Busy parents",
      problem: "Wellness plans fail when they ask too much too early.",
      launch: "Package it as a soft reset for people who need sustainable guidance.",
      features: [
        "Micro rituals",
        "Sleep and mood tracking",
        "Supportive weekly summaries"
      ]
    }
  ],
  social: [
    {
      name: "Circle Pulse",
      tagline: "A social space designed for meaningful updates, not endless noise.",
      stack: "Next.js + Firebase",
      mood: "Warm",
      palette: "Rose Quartz",
      audience: "Friends and communities",
      problem: "Social apps reward volume, but people actually want clarity and connection.",
      launch: "Position it as the low-noise social layer built for real communities.",
      features: [
        "Quiet updates",
        "Interest-based circles",
        "Event planning tools"
      ]
    },
    {
      name: "Afterglow",
      tagline: "Create simple, thoughtful moments with the people who matter most.",
      stack: "React + PocketBase",
      mood: "Inviting",
      palette: "Lavender Glow",
      audience: "Small communities",
      problem: "People keep losing momentum in group planning because the tools are too complex or too generic.",
      launch: "Sell it as a social planning app that feels personal instead of performative.",
      features: [
        "Shared planning boards",
        "Memory prompts",
        "Friendly check-in system"
      ]
    }
  ]
};

const categoryButtons = document.querySelectorAll(".chip");
const projectNameEl = document.getElementById("projectName");
const taglineEl = document.getElementById("tagline");
const stackEl = document.getElementById("stackLabel");
const problemEl = document.getElementById("problemText");
const launchEl = document.getElementById("launchText");
const featureListEl = document.getElementById("featureList");
const moodEl = document.getElementById("moodLabel");
const paletteEl = document.getElementById("paletteLabel");
const audienceEl = document.getElementById("audienceLabel");
const generateBtn = document.getElementById("generateBtn");

let currentCategory = "all";

const pickRandom = (items) => items[Math.floor(Math.random() * items.length)];

function renderProject(project) {
  projectNameEl.textContent = project.name;
  taglineEl.textContent = project.tagline;
  stackEl.textContent = project.stack;
  problemEl.textContent = project.problem;
  launchEl.textContent = project.launch;
  moodEl.textContent = project.mood;
  paletteEl.textContent = project.palette;
  audienceEl.textContent = project.audience;

  featureListEl.innerHTML = project.features
    .map((feature) => `<li>${feature}</li>`)
    .join("");
}

function generateRandomProject() {
  const categoryPool = projectTemplates[currentCategory] || projectTemplates.all;
  const project = pickRandom(categoryPool);
  renderProject(project);
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active");
    currentCategory = button.dataset.category;
    generateRandomProject();
  });
});

generateBtn.addEventListener("click", generateRandomProject);

generateRandomProject();




















































































































































