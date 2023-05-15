import styled from '@emotion/styled';
import homeLeft from '../../shared/images/homeLeftBW.jpg';
import homeRight from '../../shared/images/homeRightBW.jpg';
import portalGif from '../../shared/images/portalGif.gif';

export const HiddenTittle = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const StyledDiv = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  & .container-left {
    background-image: url(${homeLeft});
    opacity: 0.8;
    height: 804px;
    width: 640px;
  }
  & .container-right {
    background-image: url(${homeRight});
    opacity: 0.7;
    height: 804px;
    width: 640px;
  }

  @-webkit-keyframes rotor {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-moz-keyframes rotor {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @-o-keyframes rotor {
    from {
      -o-transform: rotate(0deg);
    }
    to {
      -o-transform: rotate(360deg);
    }
  }
  @keyframes rotor {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .button-wrap {
    width: 320px;
    height: 320px;
    display: inline-block;

    position: absolute;

    .clicker {
      text-transform: uppercase;
      /* Inner circle */
      width: 300px;
      height: 300px; /* 20px smaller b/c of margin below */
      margin: 10px;
      background: url(${portalGif});
      background-size: contain;
      border-radius: 50%;

      /* Overlays this circle on the .circle */
      z-index: 2;
      position: absolute;

      /* centers the text: adjust to desired size */
      padding: 22px 10px;
      text-align: center;

      /* shadow */
      -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.5);
      -o-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.5);
      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.5);
    }
    .circle {
      /** outer circle **/
      width: 320px;
      height: 320px;
      border-radius: 50%;

      /** image = wedge **/
      background-image: linear-gradient(
        45deg,
        transparent 0%,
        transparent 30%,
        ${({ theme }) => theme.accent} 30%,
        ${({ theme }) => theme.accent} 70%,
        transparent 70%,
        transparent 100%
      );

      /*** outer circle position: under */
      z-index: 1;
      position: absolute;
    }
    .clicker:hover + .circle,
    .clicker:active + .circle {
      -webkit-animation: rotor 1.5s linear 0s infinite normal;
      -mox-animation: rotor 1.5s linear 0s infinite normal;
      -o-animation: rotor 1.5s linear 0s infinite normal;
      animation: rotor 1.5s linear 0s infinite normal;
    }
  }
`;

export const SectionHome = styled.section``;