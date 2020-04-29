import styled from 'styled-components'

export default styled.p`
    font-size: ${props => props.fontSize || "2em"};
    color: ${props => props.color || "white"};
    font-weight: ${props => props.weight || "200"};
`