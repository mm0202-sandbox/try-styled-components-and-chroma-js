import React from "react";
import styled from "styled-components";
import chroma from "chroma-js";
import SampleButton from "./SampleButton";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #76ff96
`;

const Wrapper = styled.section`
  padding: 4rem;
  background: ${chroma('#000000').brighten(2).hex()};
  text-align: center;
`;

export default function Sandbox() {
    return <Wrapper>
        <Title>
            Hello World!
        </Title>
        <SampleButton>Sample button</SampleButton>
    </Wrapper>
}