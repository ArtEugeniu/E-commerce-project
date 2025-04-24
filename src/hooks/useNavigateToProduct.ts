import { useNavigate } from "react-router-dom";

export const useNavigateToProduct = () => {
  const navigate = useNavigate();

  return (id: number) => {
    navigate(`/category/${id}`)
  }
}