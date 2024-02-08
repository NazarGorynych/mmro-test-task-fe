export type CreateActionValues = {
  cover: string;
  name: string;
  description: string;
  initialRate: number;
  category: {
    technique: boolean;
    sport: boolean;
    book: boolean;
  };
  startDate: Date;
  endDate: Date;
};
