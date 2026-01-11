export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface GearItem {
  name: string;
  level: string;
  quality: string;
  desc: string;
}

export interface NewsItem {
  type: string;
  title: string;
  date: string;
}