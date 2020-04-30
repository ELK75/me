import styled from 'styled-components';

export default styled.div`
    animation: example 2s ease;
    animation-delay: 1s;

    @keyframes example {
      0%   {margin-top: 0;}
      50%  {margin-top: 1em;}
    }
`