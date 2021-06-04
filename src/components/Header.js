import React from 'react'
import PropTypes from "prop-types";
import Octicon from 'react-octicon';
import styled from 'styled-components';

import Search from './Search';

function Header(props) {
    const {onChangeUsername} = props;

    return (
        <Wrapper>
            <Octicon name="mark-github" mega/>
            <Search onChangeUsername={onChangeUsername}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

Header.propTypes = {
    onChangeUsername: PropTypes.func.isRequired
};

export default Header;
