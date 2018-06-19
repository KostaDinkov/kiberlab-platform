import styled,{css} from 'styled-components'

export const Button =  styled.button`
    font-size:20px;
    border-radius:3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: #BF5677;
    border: 2px solid #BF5677;
    
`

export const PrimaryButton = Button.extend`
    background:#BF5677;
        color:white;

`