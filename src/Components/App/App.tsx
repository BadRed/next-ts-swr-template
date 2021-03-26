import styled from '@emotion/styled';
const StyledHeader = styled.h1`
  color: hotpink;
`;

export function App() {
  return (
    <>
      <header>
        <StyledHeader>Header</StyledHeader>
      </header>
      <main>Body here</main>
      <footer>Footer</footer>
    </>
  );
}
