import React,{useState} from 'react'
import styled from 'styled-components';
import { Button } from '../GlobalStyles';
import Heading from '../Heading/Heading';

const Card = ({Title,Subtitle,img,alt,ImgTitle,ButtonLabelOne,CardIconOne,CardIconTwo,Edit,Delete}) => {
    const [active, setActive] = useState(true);
    const [ButtonLabelTwo, setButtonLabelTwo] = useState("Ended");

    let months= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    // let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dateBuilder = (d) => {


    // let day = days[d.getDay()];
    let date = d.getDate()+1;
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${month}  ${date} , ${year}`
    }

  return (
    <TaskCard>
        <ColOne>
            <CardHeading>
                <Heading level={2}> {Title} </Heading>
                <SubTitle>
                    <Heading level={4} opacity > {Subtitle} </Heading> 
                    <Heading level={4}>{dateBuilder(new Date())}</Heading>
                </SubTitle>
            </CardHeading>
             <CardImgage>
               <img src={img} alt={alt} />
               <Heading level={4}> {ImgTitle} </Heading>
             </CardImgage>
        </ColOne>
        <ColTwo>
            <Button>{ButtonLabelOne}</Button>
            <CardAction>
                <HoverIcons className='HoverIcons'>
                <HoverIcon><img src={CardIconOne} alt={alt} /></HoverIcon>
                <HoverIcon><img src={CardIconTwo} alt={alt} /></HoverIcon>
                <HoverIcon><img src={Edit} alt={alt} /></HoverIcon>
                <HoverIcon><img src={Delete} alt={alt} /></HoverIcon>
                </HoverIcons>
                <Button active = {active} onClick={() => {setButtonLabelTwo("Completed"); setActive(!active);}}
                primary
                color
                justify
                >{ButtonLabelTwo}
               </Button>
            </CardAction>
        </ColTwo>
    </TaskCard>
  )
}


const TaskCard = styled.div`
background: #FFFFFF;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
border-radius: 4px;
padding: 15px;
display: flex;
justify-content: space-between;
cursor: pointer;

&:hover{
    .HoverIcons{
        opacity: 1;
    }
}
@media screen and (max-width: 475px) {
     flex-direction: column;
 }
`;

const SubTitle = styled.div`
display: flex;
grid-gap: 5px;
`;
const CardImgage = styled.div`
display: flex;
align-items: center;
grid-gap: 10px;
`;
const CardHeading = styled.div`
display: flex;
flex-direction: column;
grid-gap: 5px;
`;

const ColOne = styled.div`
display: flex;
flex-direction: column;
grid-gap: 20px;
`;

const ColTwo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
`;

const CardAction = styled.div`
display: flex;
grid-gap: 10px;
`;
const HoverIcons = styled.div`
display: flex;
grid-gap: 10px;
opacity: 0;
`;
const HoverIcon = styled.div`
width: 12px;
height: 12px;
`;

export default Card
