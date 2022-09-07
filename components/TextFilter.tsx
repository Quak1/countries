import styled from "styled-components";

interface TextFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 28px;

  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  border: unset;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 480px;
`;

const Input = styled.input`
  padding: 0;
  flex: 1;
  border: none;
  outline: none;
  background-color: unset;
  padding-left: 20px;

  color: ${({ theme }) => theme.colors.text};
  &::placeholder {
    color: ${({ theme }) => theme.colors.fadedText};
  }
`;

const Icon = styled.span`
  font-size: 30px;
`;

const TextFilter = ({ value, onChange }: TextFilterProps) => {
  return (
    <Container>
      <Icon className="material-symbols-outlined">search</Icon>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a country..."
      />
    </Container>
  );
};

export default TextFilter;
