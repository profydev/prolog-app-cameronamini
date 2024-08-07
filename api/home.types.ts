export type PageData = {
  meta: {
    title: string;
    description: string;
    image: string;
  };
  sections: SectionData[];
};

export type SectionData = {
  sectionType: string;
  theme: string;
  title: string;
  subtitle?: string;
  image?: {
    src: string;
    width: number;
    height: number;
  };
};
