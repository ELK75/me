import styled from 'styled-components';

export default styled.div`
    .arrow {
        margin-left: 0.5em;
        transition: margin-left 0.3s linear;
    }

    .link:hover > .arrow {
        margin-left: .8em;
    }
`