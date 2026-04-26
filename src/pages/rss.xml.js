import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = import.meta.glob('./posts/*.md', { eager: true });

  const items = Object.values(posts).map((post) => ({
    title: post.frontmatter.title,
    description: post.frontmatter.description || "",
    pubDate: post.frontmatter.pubDate || new Date(),
    link: post.url,
  }));

  return rss({
    title: "Delilah’s Journey",
    description: "My journey as a life insurance agent — growth, failure, and success.",
    site: context.site,
    items,
  });
}