import { v4 } from "uuid";
import { useRandomRating } from "../../hooks/useRandomRating";

export interface IReviews {
  id: string
  name: string
  text: string
  rating: number
  date: string
}


export const reviews: IReviews[] = [
  {
    id: v4(),
    name: "Samantha D.",
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    rating: useRandomRating(),
    date: "Posted on August 14, 2023"
  },
  {
    id: v4(),
    name: "Alex M.",
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    rating: useRandomRating(),
    date: "Posted on August 15, 2023"
  },
  {
    id: v4(),
    name: "Ethan R.",
    text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    rating: useRandomRating(),
    date: "Posted on August 16, 2023"
  },
  {
    id: v4(),
    name: "Olivia P.",
    text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    rating: useRandomRating(),
    date: "Posted on August 17, 2023"
  },
  {
    id: v4(),
    name: "Liam K.",
    text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    rating: useRandomRating(),
    date: "Posted on August 18, 2023"
  },
  {
    id: v4(),
    name: "Ava H.",
    text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    rating: useRandomRating(),
    date: "Posted on August 19, 2023"
  }
]