import styled from 'styled-components'


const Link = styled.a`
    position: relative;
    background: linear-gradient(to right, DeepSkyBlue, SlateBlue 50%, #00AFEF 50%);
    background-size: 200% 100%;
    background-position: 100%;
    background-clip: text;
    color: #00AFEF;
    font-weight: 600;
    text-decoration: none;
    transition: background-position 250ms ease;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &::before {
        content: '';
        position: absolute;
        background: linear-gradient(to right, DeepSkyBlue 20%, SlateBlue);
        width: 0;
        height: 2px;
        right: 0;
        bottom: 0;
        transition: width 500ms cubic-bezier(0.25, 1, 0.5, 1);
    }
    &:hover,
    &:focus {
        background-position: 0 50%;
    }
    @media (hover: hover) and (pointer: fine) {
        &:hover::before {
            width: 100%;
            left: 0;
            right: auto;
        }
    }
    @media (focus: focus) and (pointer: fine) {
        &:focus::before {
            width: 100%;
            left: 0;
            right: auto;
        }
    }
`

export default Link
