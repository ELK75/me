import styled from 'styled-components';

export default styled.a`
    font-weight: ${props => props.fontWeight || "200"};
    font-size: ${props => props.fontSize || "1.5em"};
    color: var(--color-text);
    :hover {
        color: var(--color-secondary);
    }
}
`