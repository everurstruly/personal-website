export const website = {
  name: "Oghenetefa Okotete",
  description: `This is the personal website of Oghenetefa Okotete, where I share my projects, blog posts, and more.`,
  creator: "oghenetefa@gmail.com",
  email: "oghenetefa@gmail.com",
} as const;

export const socials = [
  {
    title: "twitter-x",
    href: "https://twitter.com/markhorn_dev",
  },
  {
    title: "github",
    href: "https://github.com/markhorn-dev",
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/markhorn-dev",
  },
] as const;

export const socialLinks = {
  twitter: {
    title: "twitter-x",
    href: "https://twitter.com/everustruly",
  },
  github: {
    title: "github",
    href: "https://github.com/everustruly",
  },
  linkedin: {
    title: "linkedin",
    href: "https://linkedin.com/in/everustruly",
  },
} as const;

export type Metadata = {
  title: string;
  description: string;
};
