export interface SlideImage {
  url: string;
  caption: string;
}

export interface ContentSection {
  title: string;
  enTitle?: string;
  content: string[]; // Array of paragraphs
  enContent?: string[];
}

export interface EcoSpot {
  id: string;
  title: string;
  enTitle: string;
  location: string;
  description: {
    cn: string;
    en: string;
  };
  visuals: SlideImage[];
  interaction?: {
    type: 'quiz' | 'calc' | 'sound' | 'trash' | 'pledge';
    label: string;
    details?: any;
  };
}

export interface Route {
  name: string;
  stops: string[];
}