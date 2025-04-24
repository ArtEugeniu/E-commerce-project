import './SelectedImage.scss';

interface ISelectedImageProps {
  selectedImage: string
}

const SelectedImage: React.FC<ISelectedImageProps> = ({ selectedImage }) => {

  return (
    <div className="selected-image">
      <img src={selectedImage} alt="product image" />
    </div>
  )
}

export default SelectedImage;