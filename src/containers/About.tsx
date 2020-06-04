import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: green;
`;

class About extends React.Component<{}, {}> {
  content = "this is About page";

  render() {
    return <Container>{this.content}</Container>;
  }
}

export default About;
