import cjkSlug from "cjk-slug";
import slug from "slugify";

export default function slugify(category: string, title: string): string {
  return `/${slug(category, { lower: true })}/${cjkSlug(title)}`;
}
