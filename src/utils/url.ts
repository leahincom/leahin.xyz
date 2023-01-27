import cjkSlug from "cjk-slug";
import slug from "slugify";

export default function url(category: string, title?: string): string {
  const path = `/${slug(category, { lower: true })}`;
  return !title ? path : `${path}/${cjkSlug(title)}`;
}
