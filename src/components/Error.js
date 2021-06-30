import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const MessageText = styled.p`
    margin-top: 10px;
    text-align: center;
    text-transform: uppercase;
    color: white;
    background-color: #b71c1c;
    font-size: 16px;
`;

const Error = ({message}) => ( <MessageText>{message}</MessageText> );

Error.propTypes = {
    message: PropTypes.string.isRequired
}
 
export default Error;