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
    align-items: flex-end;
    justify-content: space-between;
  }
`;

export const HomeContent = styled.section`
  width: 100%;
  max-width: 400px;
  margin: 2.75rem 0;
  text-align: center;

  @media (min-width: 768px) {
    width: 100%;
    margin: 0;
    max-width: 480px;
    text-align: left;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;

  color: #141414;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

export const HomeDescription = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 1.5rem;

  color: #696969;

  @media (min-width: 768px) {
    margin: 2.5rem 0;
  }
`;

export const HomeButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  background-color: #141414;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    filter: opacity(0.7);
  }

  @media (min-width: 768px) {
    margin-bottom: 3rem;
    padding: 1rem 2rem;
  }
`;

export const HomeImageContainer = styled.div`
  width: 100%;
  margin: 2.5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    width: 100%;
    margin: 0;
    max-width: 470px;
    justify-content: space-between;
  }
`;

export const HomeImageWrapper = styled.img`
  width: 100%;
`;

export const HomeImage = styled.img`
  width: 100%;
  height: auto;
`;
