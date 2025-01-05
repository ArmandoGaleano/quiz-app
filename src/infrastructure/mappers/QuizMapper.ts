// import { Question } from '@/domain/quiz/entities/question';
// import { Alternative } from '@/domain/quiz/entities/alternative';
// import { Keyword } from '@/domain/quiz/entities/keyword';
// import { Quiz } from '@/domain/quiz/entities/quiz';

// export class QuizMapper {
//   static toDomain(quizData: any): IQuizProps<Question, Alternative, Keyword> {
//     const question = new Question(quizData);
//     const alternatives = quizData.alternatives.map(
//       (altData) => new Alternative(altData),
//     );
//     const keywords = quizData.keywords.map((kwData) => new Keyword(kwData));

//     return new Quiz({
//       question,
//       alternatives,
//       keywords,
//     });
//   }
// }
