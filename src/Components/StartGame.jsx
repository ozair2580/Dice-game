import styled from "styled-components";
import ButtonComp from "./ButtonComp";
const StartGame = ({data}) => {
  return (
    <Container>
      <InsideContainer>
        <Imagecontainer>
        <img src="/dices 1.png" alt="" />
        </Imagecontainer>
        <HeadingContainer>
          <h1 className="heading">DICE GAME</h1>
          <ButtonComp data={data}/>
         
        </HeadingContainer>
      </InsideContainer>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  display: flex;
  padding: 180px 129px 154px 129px;
  width: 1440px;
  height: 856px;
`;

const InsideContainer= styled.div`
display:  flex;
width: 1182px;
height: 522px;
`;

const Imagecontainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 649px;
    height: 522px;
`
const HeadingContainer=styled.div`
    width: 528px;
    height: 188px;
    display: flex;
    
    align-self: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    .heading{
       font-size: 96px;
       font-family: poppins;
    }
    
    
`
