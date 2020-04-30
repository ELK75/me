import styled from 'styled-components';


export default styled.div`
    .img {
        filter: brightness(0.7);
        transition: filter 0.8s ease-out 0s;
    }

    img:hover {
        filter: brightness(1);
    }
`