import styled  from "styled-components";
const ButtonComp = ({data}) => {
    return (
        <Button>
            <button onClick={()=>data(true)}>Play Now</button>
        </Button>
    );
};

export default ButtonComp;



const Button=styled.div`
    width: 100%;
   display: flex;
   flex-direction: row-reverse;
   align-items: center;
   button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 146px;
    height: 30px;
    background-color: black;
    border-radius: 5px;
    color: white;
    transition: 0.4s ease-in;

   }
   button:hover{
      color: black;
      background-color: white;
      border: 1px solid black;
      transition: 0.3s ease-in;
   }
`