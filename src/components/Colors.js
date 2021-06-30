import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ButtonColors = styled.button`
    margin: 5px;
`;

const Colors = ({setColor}) => {

    const handleClick = e =>{
        setColor({
            colors: e.target.name
        })
    }

    return ( 
        <div className="center-align">
             <ButtonColors onClick={handleClick} className="btn-floating btn-large waves-effect waves-light pink accent-4" name="pink accent-4"></ButtonColors>
             <ButtonColors onClick={handleClick} className="btn-floating btn-large waves-effect waves-light teal accent-4" name="teal accent-4"></ButtonColors>
             <ButtonColors onClick={handleClick} className="btn-floating btn-large waves-effect waves-light cyan accent-4" name="cyan accent-4"></ButtonColors>
             <ButtonColors onClick={handleClick} className="btn-floating btn-large waves-effect waves-light green accent-4" name="green accent-4"></ButtonColors>
             <ButtonColors onClick={handleClick} className="btn-floating btn-large waves-effect waves-light blue-grey" name="blue-grey"></ButtonColors>
             <ButtonColors onClick={handleClick} className="btn-floating btn-large waves-effect waves-light white" name="white"></ButtonColors>

        </div>
     );
}

Colors.propTypes = {
    setColor: PropTypes.func.isRequired
}
 
export default Colors;