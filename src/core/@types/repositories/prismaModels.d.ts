type QuestionModelProps = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  questionStatement: string;
  active: boolean;
  type: string;
  createdAt: Date;
  updatedAt: Date;
};

type AlternativeModelProps = {
  id: string;
  questionId: string;
  text: string;
  isCorrect: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type KeywordModelProps = {
  id: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
};
