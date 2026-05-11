import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Umais Jafry",
  DESCRIPTION: "Portfolio and projects of Umais Jafry, a Python & Automation Developer.",
  AUTHOR: "Umais Jafry",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked and freelance experience.",
}


// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects including autonomous agents, visual macros, and custom game engines.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },

  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "lorddxnte603@gmail.com",
    HREF: "mailto:lorddxnte603@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "LordDxnte",
    HREF: "https://github.com/LordDxnte"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Umais Jafry",
    HREF: "https://www.linkedin.com/in/umais-jafry-ba81b33a0/",
  },
]
