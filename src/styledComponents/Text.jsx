import styled from 'styled-components'

export default styled.p`

    font-size: ${props => {
        if (props.custom) {
            return props.size;
        }
        const sizes = {
            'xl': '3.5em',
            'lg': '2em',
            'md': '1.5em',
            'sm': '1.2em',
            'xs': '1em'
        }
        return sizes[props.size] || "1.2em"
    }};

    color: ${props => props.color || "var(--color-text)"};
    font-weight: ${props => props.weight || "200"};
`