import styled from "styled-components";
import Select from "react-select";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const CustomSelect = styled(Select)`
  width: 200px;

  & .SelectRegion__control {
    background-color: ${({ theme }) => theme.colors.elements};
    color: ${({ theme }) => theme.colors.text};
    border: unset;
    box-shadow: unset;
  }

  & .SelectRegion__value-container {
    padding: 15px 22px;
  }

  & .SelectRegion__single-value {
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }

  & .SelectRegion__menu {
    background-color: ${({ theme }) => theme.colors.elements};
    color: ${({ theme }) => theme.colors.text};
  }
  & .SelectRegion__option {
    padding: 5px 25px;
  }

  & .SelectRegion__option--is-focused {
    background-color: rgba(0, 0, 0, 15%);
  }

  & .SelectRegion__option--is-selected {
    background-color: rgba(0, 0, 0, 15%);
    color: ${({ theme }) => theme.colors.text};
  }

  & .SelectRegion__indicator {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const IndicatorSeparator = () => {
  return null;
};

interface SelectRegionProps {
  onChange: (value: string) => void;
  [props: string]: any;
}

const SelectRegion = ({ onChange, ...props }: SelectRegionProps) => {
  const handleChange = (option: any) => {
    if (option) {
      onChange(option.value);
    } else {
      onChange("");
    }
  };

  return (
    <CustomSelect
      options={options}
      classNamePrefix="SelectRegion"
      components={{ IndicatorSeparator }}
      placeholder="Filter by Region"
      isClearable={true}
      onChange={handleChange}
      {...props}
    />
  );
};

export default SelectRegion;
