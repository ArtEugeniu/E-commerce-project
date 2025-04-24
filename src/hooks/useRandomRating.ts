

export const useRandomRating = () => {
  const randomRating = (): number => {
    const base = Math.floor(Math.random() * 3) + 3; 
    const isHalf = Math.random() > 0.5; 
    return isHalf && base < 5 ? base + 0.5 : base; 
  }

  return randomRating();
}