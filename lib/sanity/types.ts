// Common types for Sanity documents

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface Page {
  _id: string;
  _type: 'page';
  title: string;
  slug: SanitySlug;
  description?: string;
  content?: any[]; // Portable Text
}

export interface Post {
  _id: string;
  _type: 'post';
  title: string;
  slug: SanitySlug;
  author?: string;
  mainImage?: SanityImage;
  publishedAt?: string;
  excerpt?: string;
  body?: any[]; // Portable Text
}

