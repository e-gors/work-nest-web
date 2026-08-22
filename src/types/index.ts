import type { ComponentType } from "react";

export type WorkersProps = {
  id: string;
  full_name: string;
  profession: string;
  category: string;
  avatar_url: string;
  cover_url: string;
  rating: number;
  review_count: number;
  experience_years: number;
  hourly_rate: number;
  service_radius_km: number;
  bio: string;
  address: string;
  distance_km: number;
  available: boolean;
  verified: boolean;
  completed_jobs: number;
  skills: string[];
  portfolio: string[];
};

export type StatProps = {
  value: string;
  label: string;
};

export type CategoryProps = {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
  bg: string;
};

const ROLE = Object.freeze({
  HOMEOWNER: "home_owner",
  CUSTOMER: "customer",
  ELECTRICIAN: "electrician",
} as const);

type UserRole = (typeof ROLE)[keyof typeof ROLE];

export type TestimonialProps = {
  name: string;
  role: UserRole;
  avatar: string;
  text: string;
};

export type StepProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};
