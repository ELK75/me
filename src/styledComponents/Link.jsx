import styled from 'styled-components';

export default styled.a`
    font-weight: ${props => props.fontWeight || "200"};
    font-size: ${props => props.fontSize || "1.5em"};
    margin-bottom: '1em';
    display: inline-block;
    color: var(--color-text);
    :hover {
        color: var(--color-secondary);
    }
}
`