import styled from 'styled-components';

const Table = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
`;

const Tr = styled.tr`
  border: 1px solid black;
`;

const Td = styled.td`
  text-align: center;
  border: 1px solid black;
  padding: 0.5rem;
`;

const Th = styled(Td)`
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: black;
  color: white;
  border-color: white;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: red;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

export { Table, Tr, Td, Th, Button };
