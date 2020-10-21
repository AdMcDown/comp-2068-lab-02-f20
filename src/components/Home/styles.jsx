import styled from 'styled-components';

export default {
    Button: styled.button`
        margin: 15px auto;
        padding: 10px;
        color: yellow;
        background-color: blue;
        display: flex;
        justify-content: center;
        text-decoration: none;

        div {
            color: yellow;
        }
    
        :hover {
            div {
                color: purple;
                text-decoration: none;
            }
            
            background-color: lightgreen;
            padding: 15px;
        }
    `
}