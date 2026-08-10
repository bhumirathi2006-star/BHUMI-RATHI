export interface Destination {
  id: string;
  name: string;
  nickName: string;
  tagline: string;
  description: string;
  category: 'Heritage' | 'Desert' | 'Lakes' | 'Nature' | 'Holy';
  image: string;
  gallery: string[];
  keyAttractions: string[];
  bestTimeToVisit: string;
  recommendedDays: number;
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  type: 'veg' | 'non-veg';
  image: string;
  popularAt: string;
}

export interface CulturalHighlight {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'Dance' | 'Art' | 'Music' | 'Craft';
}

export interface Festival {
  id: string;
  name: string;
  month: string;
  location: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
