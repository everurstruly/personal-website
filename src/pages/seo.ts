export const website = {
  name: "Oghenetefa Okotete",
  description: `This is the personal website of Oghenetefa Okotete, where I share my projects, blog posts, and more.`,
  email: "oghenetefa@gmail.com",
} as const;

export const socialLinks = {
  twitter: {
    title: "twitter-x",
    href: "https://twitter.com/everurstruly",
  },
  github: {
    title: "github",
    href: "https://github.com/everurstruly",
  },
  linkedin: {
    title: "linkedin",
    href: "https://linkedin.com/in/everurstruly",
  },
} as const;

export type Metadata = {
  title: string;
  description: string;
};
