import styled from 'styled-components';

export default styled.div`
    font-size: ${props => props.fontSize || '0.9em'};
    display: inline-block;
    border-radius: 3px;
    margin-right: 0.5rem;
    margin-bottom: 1em;
    padding: 0.2rem 0.6rem;
    background: transparent;
    color: var(--color-secondary);
    border: 2px solid var(--color-secondary);

`