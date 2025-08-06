import { z } from 'zod';

// Contact form validation
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Location data validation
export const locationSchema = z.object({
  name: z.string(),
  address: z.string(),
  phone: z.string(),
  hours: z.string(),
  services: z.array(z.string()),
});

export type Location = z.infer<typeof locationSchema>;

// News article validation
export const newsArticleSchema = z.object({
  headline: z.string(),
  date: z.string(),
  summary: z.string(),
});

export type NewsArticle = z.infer<typeof newsArticleSchema>;

// Job posting validation
export const jobPostingSchema = z.object({
  title: z.string(),
  department: z.string(),
  location: z.string(),
  salary: z.string(),
  description: z.string(),
});

export type JobPosting = z.infer<typeof jobPostingSchema>;

// Leadership validation
export const leaderSchema = z.object({
  name: z.string(),
  title: z.string(),
  bio: z.string(),
  expertise: z.array(z.string()),
  education: z.string(),
});

export type Leader = z.infer<typeof leaderSchema>;

// History milestone validation
export const milestoneSchema = z.object({
  year: z.string(),
  title: z.string(),
  description: z.string(),
});

export type Milestone = z.infer<typeof milestoneSchema>;

// API response validation
export const apiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.unknown().optional(),
});

export type ApiResponse = z.infer<typeof apiResponseSchema>;
