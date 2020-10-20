import styled from 'styled-components';

export default {
    Button: styled.button`
        margin: 0 auto;
        padding: 10px;
        color: yellow;
        background-color: blue;
        display: flex;
        justify-content: center;
    
        :hover {
            text-decoration: none;
            background-color: lightgreen;
            color: purple;
            padding: 15px;
        }
    `
};