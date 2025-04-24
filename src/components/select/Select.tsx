import Select from "react-select";
import { useSort } from "../../context/sortContext";

export interface IOption {
  value: string
  label: string
}

interface ISelectProps {
  options: IOption[]
}

export const customSelectStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: '#f0f0f0',
    borderRadius: '62px',
    borderColor: 'transparent',
    padding: '5px 10px',
    color: '#000',
    fontWeight: '700',
    border: state.isFocused ? '1px solid #000' : '1px solid transparent',
    transition: 'border 0.2s ease-in-out',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#000' : state.isFocused ? '#e0f7fa' : 'white',
    color: state.isSelected ? '#fff' : '#000',
    padding: '10px',
    borderRadius: '20px'
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: '20px',
    boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.46)',
    padding: '2px 5px'
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: '#000',
    pointerEvents: 'none',
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    backgroundColor: 'transparent',
  }),
};

const SelectComponent: React.FC<ISelectProps> = ({ options }) => {
  const { selectedOption, setSelectedOption } = useSort()



  const customTheme = (theme: any) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: theme.colors.neutral90,
    },
  });

  const handleChange = (selected: IOption | null) => {
    if (selected) {
      setSelectedOption(selected);
    }
  };

  return (
    <Select value={selectedOption} options={options} onChange={handleChange} styles={customSelectStyles} theme={customTheme} />
  )
}

export default SelectComponent;