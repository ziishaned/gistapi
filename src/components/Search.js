import React from 'react';
import Octicon from 'react-octicon';
import styled from 'styled-components';

const Search = (props) => {
    const {onChangeUsername} = props;

    return (
        <Wrapper>
            <InputBox>
                <Octicon name="search"/>
                <Input
                    placeholder="Search Gists for the username"
                    onChange={(event) => onChangeUsername(event.target.value)}
                />
            </InputBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

export default Search
