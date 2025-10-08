import rss from "@astrojs/rss";
import { getCollection, type CollectionEntry } from "astro:content";
import { website } from "./seo";

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const blog = (
    (await getCollection("blog")) as CollectionEntry<"blog">[]
  ).filter((post) => !post.data.draft);

  const projects = (
    (await getCollection("projects")) as CollectionEntry<"projects">[]
  ).filter((project) => !project.data.draft);

  const items = [...blog, ...projects].sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );

  return rss({
    title: website.name,
    description: website.description,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.id}/`,
    })),
  });
}
