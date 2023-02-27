import styled from 'styled-components';

export const HomeContainer = styled.main`
  width: 100%;
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
  }
`;
