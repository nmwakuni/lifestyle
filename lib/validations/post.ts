import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title is too long"),
  slug: z
    .string()
    .min(1, "Slug is required")
    .max(200, "Slug is too long")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens"),
  excerpt: z.string().max(500, "Excerpt is too long").optional(),
  content: z.string().min(1, "Content is required"),
  coverImage: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  published: z.boolean().default(false),
  featured: z.boolean().default(false),
  categoryId: z.string().uuid("Invalid category").optional(),
  tags: z.array(z.string().uuid()).optional(),
});

export const categorySchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  slug: z
    .string()
    .min(1, "Slug is required")
    .max(100, "Slug is too long")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens"),
  description: z.string().max(500, "Description is too long").optional(),
});

export const tagSchema = z.object({
  name: z.string().min(1, "Name is required").max(50, "Name is too long"),
  slug: z
    .string()
    .min(1, "Slug is required")
    .max(50, "Slug is too long")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens"),
});

export type PostFormData = z.infer<typeof postSchema>;
export type CategoryFormData = z.infer<typeof categorySchema>;
export type TagFormData = z.infer<typeof tagSchema>;
