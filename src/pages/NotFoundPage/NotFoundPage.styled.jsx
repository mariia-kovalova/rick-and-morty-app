import styled from '@emotion/styled';

export const PageContainer = styled.div`
  height: 70vh;
  text-align: center;
  &.page-msg {
    color: #294E96;
  font-size: 40px;
  }
`;
export const Overlay = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextNum = styled.p`
  
  font-size: 280px;
  display: inline-block;
  font-family: 'Anton', sans-serif;
  font-family: 'Combo', cursive;
  &.first-for {
    position: relative;
    left: 80px;
    color: #7F4E1A;
  }
  &.second-for {
    position: relative;
    right: 80px;
    color: #B6E6FB;
  }
`;
export const ImgSize = styled.img`
  height: 50%;
  width: 400px;
`;
export const H2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #294E96;
  font-size: 80px;
  font-family: 'Anton', sans-serif;
  font-family: 'Combo', cursive;
  span{
    color: #1ABED6;
  }
`;
export const ButtonBack = styled.button`
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: 'Anton', sans-serif;
  font-family: 'Combo', cursive;
  
  img{
    height: 100px;

    color: #1ABED6;
  }
`;



