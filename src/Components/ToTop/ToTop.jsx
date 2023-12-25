import styled from "styled-components";

const StyledA = styled.a`
  color: white;
  text-decoration: none;
  background: blue;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  position: fixed;
  top: ${(props) => (props.top ? "1rem" : "auto")};
  bottom: ${(props) => (props.top ? "auto" : "1rem")};
  right: 1rem;
`;

function ToTop() {
  return (
    <StyledA top href="#">
      T
    </StyledA>
  );
}

export default ToTop;
