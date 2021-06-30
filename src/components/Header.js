import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const TitleHeader = styled.h1`
    text-align: center;
`;

const Header = ({title}) => ( 
    <TitleHeader>{title}</TitleHeader> );
 
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;