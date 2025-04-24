import { IReviews } from "../assets/data/reviews"


export const useSortetReviews = (order: string, reviewsList: IReviews[]) => {
  return reviewsList.sort((a: IReviews, b: IReviews) => {
    const dateA = new Date(a.date.replace('Posted on ', ''));
    const dateB = new Date(b.date.replace('Posted on ', ''));

    return order === 'latest' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
  })
}