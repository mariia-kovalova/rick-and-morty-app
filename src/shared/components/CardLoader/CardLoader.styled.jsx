import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { desktop } from 'shared/constants/deviceSizes';

const teleportDust = keyframes`
  0% {
      box-shadow: rgba(0, 0, 0, 0) 30px 30px, rgba(0, 0, 0, 0) 40px 40px,
        #000 50px 75px, #000 55px 50px, #000 70px 100px, #000 80px 95px,
        #000 110px 45px, #000 90px 35px;
    }
    25% {
      box-shadow: #000 30px 45px, #000 40px 60px, #000 50px 90px, #000 55px 65px,
        rgba(0, 0, 0, 0) 70px 120px, rgba(0, 0, 0, 0) 80px 120px,
        #000 110px 70px, #000 90px 60px;
    }
    26% {
      box-shadow: #000 30px 45px, #000 40px 60px, #000 50px 90px, #000 55px 65px,
        rgba(0, 0, 0, 0) 70px 40px, rgba(0, 0, 0, 0) 80px 20px, #000 110px 70px,
        #000 90px 60px;
    }
    50% {
      box-shadow: #000 30px 70px, #000 40px 80px, rgba(0, 0, 0, 0) 50px 100px,
        #000 55px 80px, #000 70px 60px, #000 80px 45px, #000 110px 95px,
        #000 90px 85px;
    }
    51% {
      box-shadow: #000 30px 70px, #000 40px 80px, rgba(0, 0, 0, 0) 50px 45px,
        #000 55px 80px, #000 70px 60px, #000 80px 45px, #000 110px 95px,
        #000 90px 85px;
    }
    75% {
      box-shadow: #000 30px 95px, #000 40px 100px, #000 50px 60px,
        rgba(0, 0, 0, 0) 55px 95px, #000 70px 80px, #000 80px 70px,
        rgba(0, 0, 0, 0) 110px 120px, rgba(0, 0, 0, 0) 90px 110px;
    }
    76% {
      box-shadow: #000 30px 95px, #000 40px 100px, #000 50px 60px,
        rgba(0, 0, 0, 0) 55px 35px, #000 70px 80px, #000 80px 70px,
        rgba(0, 0, 0, 0) 110px 25px, rgba(0, 0, 0, 0) 90px 15px;
    }
    100% {
      box-shadow: rgba(0, 0, 0, 0) 30px 120px, rgba(0, 0, 0, 0) 40px 120px,
        #000 50px 75px, #000 55px 50px, #000 70px 100px, #000 80px 95px,
        #000 110px 45px, #000 90px 35px;
    }
`;

export const TeleportDust = styled.div`
  position: absolute;
  top: 28%;
  left: 10%;
  animation: ${teleportDust} 0.5s infinite linear;
  background: transparent;
  border-radius: 25%;
  display: block;
  height: 10px;
  width: 2px;
  opacity: 0.5;
  transform: scale(1.4);

  @media screen and (min-width: ${desktop}) {
    top: 0%;
    left: 15%;
    transform: scale(2.5);
  }
`;
