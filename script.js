const projectTemplates = {
  productivity: [
    { name: "Orbit List", tagline: "Turn your big goals into tiny missions with momentum built in.", mood: "Focused", audience: "Independent makers", problem: "Big productivity tools feel heavy, but small tasks still pile up.", features: ["Mission-sized task lists", "Gentle weekly planning", "A satisfying done-for-today ritual"], launch: "A lightweight planning sidekick for people who dislike complicated systems.", stack: "React + Supabase", time: "A weekend" },
    { name: "Quiet Queue", tagline: "The calmest place to sort, prioritize, and finish your work.", mood: "Calm", audience: "Remote teams", problem: "Async work gets noisy when every team uses different tools and labels.", features: ["Shared priority board", "Clear handoff notes", "A daily team snapshot"], launch: "Give small distributed teams one shared place to find their focus.", stack: "Svelte + Firebase", time: "2–3 weeks" }
  ],
  creative: [
    { name: "Nebula Note", tagline: "A quiet little app for turning scattered ideas into a cosmic to-do list.", mood: "Dreamy", audience: "Solo creators", problem: "People are overwhelmed by context switching and never remember where their ideas went.", features: ["Capture ideas with voice or text", "Auto-tag notes as you go", "Make a quick idea moodboard"], launch: "Your personal command center for creative minds in motion.", stack: "Next.js + Supabase", time: "A weekend" },
    { name: "Canvas Echo", tagline: "A visual notebook that catches ideas as they emerge and evolve.", mood: "Playful", audience: "Illustrators and artists", problem: "Inspiration rarely arrives in a neat format, and sketches get lost everywhere.", features: ["Sketch-to-note capture", "Moodboard clustering", "Idea remix prompts"], launch: "A flexible studio for visual thinkers who need freedom, not folders.", stack: "Vue + PocketBase", time: "2–3 weeks" }
  ],
  wellness: [
    { name: "Bloom Loop", tagline: "Gentle routines that help your energy find its rhythm again.", mood: "Grounded", audience: "Wellness seekers", problem: "People know what helps them feel better, but consistency is hard to sustain.", features: ["Flexible habit check-ins", "Tiny reset prompts", "A private reflection journal"], launch: "Self-care planning that respects real life and celebrates small steps.", stack: "Astro + Supabase", time: "A weekend" },
    { name: "Sunrise Thread", tagline: "A mindful dashboard for slower mornings and better resets.", mood: "Restorative", audience: "Busy parents", problem: "Wellness plans can ask too much, too soon, from already busy people.", features: ["Two-minute morning rituals", "Mood and energy notes", "Supportive weekly recap"], launch: "A soft reset for anyone who wants a calmer start, not a perfect routine.", stack: "React + SQLite", time: "2–3 weeks" }
  ],
  social: [
    { name: "Circle Pulse", tagline: "A social space designed for meaningful updates, not endless noise.", mood: "Warm", audience: "Friends and communities", problem: "People want real connection, but noisy feeds make it harder to keep up.", features: ["Small private circles", "Low-pressure updates", "Simple shared event plans"], launch: "A low-noise corner of the internet for the people you actually know.", stack: "Next.js + Firebase", time: "2–3 weeks" },
    { name: "Afterglow", tagline: "Make small, thoughtful moments with the people who matter most.", mood: "Inviting", audience: "Long-distance friends", problem: "Group plans fade away when the tools are too complex or generic.", features: ["Shared memory prompts", "Easy date planning", "A little moments archive"], launch: "Make staying close feel as easy as sending a note.", stack: "Expo + Supabase", time: "A weekend" }
  ],
  education: [
    { name: "Tiny Atlas", tagline: "Explore a new subject one curious five-minute detour at a time.", mood: "Curious", audience: "Lifelong learners", problem: "Learning platforms often feel like another long course to finish.", features: ["Bite-size learning paths", "Visual concept maps", "A daily curiosity card"], launch: "For curious people who want to learn something new between everything else.", stack: "Astro + Markdown", time: "A weekend" },
    { name: "Study Sprite", tagline: "Turn your notes into playful, personal revision games.", mood: "Bright", audience: "Students", problem: "Rereading notes feels passive, and making study materials takes too long.", features: ["Flashcards from pasted notes", "Quick quiz rounds", "Progress that feels encouraging"], launch: "An easy way to make exam revision feel more active and a lot less dull.", stack: "React + IndexedDB", time: "2–3 weeks" }
  ],
  gaming: [
    { name: "Pocket Quest", tagline: "A tiny daily adventure that fits between the rest of your life.", mood: "Adventurous", audience: "Casual gamers", problem: "Many games ask for long sessions when players only have a few minutes.", features: ["One-minute daily quests", "Collectible world map", "Gentle streak-free progress"], launch: "A cozy micro-adventure for the little pockets of time in your day.", stack: "Phaser + Vite", time: "A weekend" },
    { name: "Dungeon Draft", tagline: "Build a wildly different tiny dungeon with every run.", mood: "Mischievous", audience: "Roguelike fans", problem: "Making a fun game prototype is hard when the first level takes forever to design.", features: ["Procedural room cards", "Unexpected item combinations", "Shareable run seeds"], launch: "A fast, replayable browser game with a new story every time.", stack: "Godot + GDScript", time: "2–3 weeks" }
  ],
  sustainability: [
    { name: "Second Season", tagline: "Find a new home for the good things you no longer need.", mood: "Hopeful", audience: "Local neighborhoods", problem: "Useful items often go to waste because finding a nearby recipient is awkward.", features: ["Neighbor-to-neighbor listings", "Easy pickup windows", "A local reuse map"], launch: "Make passing things along feel easier than throwing them out.", stack: "MapLibre + Supabase", time: "2–3 weeks" },
    { name: "Green Minute", tagline: "Small planet-friendly swaps, chosen for your actual routine.", mood: "Optimistic", audience: "Curious beginners", problem: "Climate advice can feel overwhelming when it arrives as a giant to-do list.", features: ["One tiny weekly action", "Personalized swap ideas", "Progress without guilt"], launch: "A practical first step for people who want to help without needing to be perfect.", stack: "SvelteKit + SQLite", time: "A weekend" }
  ],
  food: [
    { name: "Fridge Poet", tagline: "Tell it what's in your fridge. Get a meal worth looking forward to.", mood: "Resourceful", audience: "Home cooks", problem: "Food gets wasted when leftover ingredients don't suggest an obvious meal.", features: ["Ingredient-first recipe ideas", "Use-it-soon reminders", "Flexible substitution tips"], launch: "A friendly kitchen companion that helps you cook with what you already have.", stack: "Next.js + Edamam", time: "2–3 weeks" },
    { name: "Supper Club", tagline: "Find your next favorite meal around the corner from home.", mood: "Sociable", audience: "Local food lovers", problem: "Small independent food spots are hard to discover beyond the usual review lists.", features: ["Neighborhood food map", "Community-made mini guides", "Save a place for later"], launch: "A local-first guide to the places your friends can't stop talking about.", stack: "Mapbox + Astro", time: "A weekend" }
  ]
};

const categoryNames = { productivity: "PRODUCTIVITY", creative: "CREATIVE", wellness: "WELLNESS", social: "SOCIAL", education: "LEARNING", gaming: "GAMING", sustainability: "PLANET", food: "FOOD" };
const categories = document.querySelectorAll(".category-chip");
const card = document.querySelector(".idea-card");
const generateBtn = document.getElementById("generateBtn");
const saveBtn = document.getElementById("saveBtn");
const copyBtn = document.getElementById("copyBtn");
const toast = document.getElementById("toast");
let currentCategory = "all";
let currentProject = null;
let lastProjectName = "";
let ideaNumber = 0;
let toastTimer;
const storageKey = "pixel-aurora-saved-ideas";

function allProjects() {
  return Object.entries(projectTemplates).flatMap(([category, projects]) => projects.map((project) => ({ ...project, category })));
}
function pickProject() {
  const pool = currentCategory === "all" ? allProjects() : (projectTemplates[currentCategory] || [] ).map((project) => ({ ...project, category: currentCategory }));
  const alternatives = pool.filter((project) => project.name !== lastProjectName);
  return (alternatives.length ? alternatives : pool)[Math.floor(Math.random() * (alternatives.length || pool.length))];
}
function renderProject(project) {
  currentProject = project;
  lastProjectName = project.name;
  ideaNumber += 1;
  document.getElementById("ideaNumber").textContent = String(ideaNumber).padStart(3, "0");
  document.getElementById("projectCategory").textContent = categoryNames[project.category] || "A LITTLE OF EVERYTHING";
  document.getElementById("moodLabel").textContent = `✧ ${project.mood}`;
  document.getElementById("projectName").textContent = project.name;
  document.getElementById("tagline").textContent = project.tagline;
  document.getElementById("problemText").textContent = project.problem;
  document.getElementById("launchText").textContent = project.launch;
  document.getElementById("stackLabel").textContent = project.stack;
  document.getElementById("timeLabel").textContent = project.time;
  document.getElementById("audienceLabel").textContent = project.audience;
  const featureList = document.getElementById("featureList");
  featureList.replaceChildren(...project.features.map((feature) => {
    const item = document.createElement("li");
    item.textContent = feature;
    return item;
  }));
  updateSavedButton();
  card.classList.remove("is-changing");
  void card.offsetWidth;
  card.classList.add("is-changing");
}
function generateIdea() { renderProject(pickProject()); }
function getSaved() {
  try { return JSON.parse(localStorage.getItem(storageKey) || "[]"); }
  catch { return []; }
}
function isSaved(project) { return getSaved().some((saved) => saved.name === project?.name); }
function updateSavedButton() {
  const saved = isSaved(currentProject);
  saveBtn.classList.toggle("is-saved", saved);
  saveBtn.textContent = saved ? "♥" : "♡";
  saveBtn.setAttribute("aria-label", saved ? "Remove this idea from saved ideas" : "Save this idea");
  const count = getSaved().length;
  document.querySelector("#savedCount span").textContent = `${count} saved`;
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2200);
}
function projectAsText(project) {
  return `# ${project.name}\n\n${project.tagline}\n\nCategory: ${categoryNames[project.category]}\nMood: ${project.mood}\nAudience: ${project.audience}\nBuild with: ${project.stack}\nTime to MVP: ${project.time}\n\n## The opportunity\n${project.problem}\n\n## First features\n${project.features.map((feature) => `- ${feature}`).join("\n")}\n\n## Launch angle\n${project.launch}`;
}

categories.forEach((button) => button.addEventListener("click", () => {
  categories.forEach((chip) => { chip.classList.remove("active"); chip.setAttribute("aria-pressed", "false"); });
  button.classList.add("active");
  button.setAttribute("aria-pressed", "true");
  currentCategory = button.dataset.category;
  generateIdea();
}));
generateBtn.addEventListener("click", generateIdea);
saveBtn.addEventListener("click", () => {
  const saved = getSaved();
  if (isSaved(currentProject)) {
    localStorage.setItem(storageKey, JSON.stringify(saved.filter((item) => item.name !== currentProject.name)));
    showToast("Removed from your saved ideas");
  } else {
    saved.unshift(currentProject);
    localStorage.setItem(storageKey, JSON.stringify(saved));
    showToast("Idea saved for later ♥");
  }
  updateSavedButton();
});
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(projectAsText(currentProject));
    showToast("Project idea copied to clipboard");
  } catch {
    showToast("Clipboard access unavailable in this browser");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && !["BUTTON", "INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    generateIdea();
  }
  if (event.key.toLowerCase() === "s" && !["BUTTON", "INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) saveBtn.click();
});

generateIdea();
