import styled from "styled-components";
import { Form, Card, Container } from "reactstrap";


const teal = "#094b50";
const gray = "#ccc";
const orange = "#d86736"
const orangeborder = `4px solid orange`;
const tealborder = `2px solid ${teal}`;

export const MainWrapper = styled(Container)`
background-image:white;
`
// put element name after styled. 
export const CardWrapper = styled.article`
:hover{
    cursor:pointer;
    .card{
        border:${tealborder};
        background:${teal}
    }
}
text-align:center;
img{
    width:80px;
}
.card{
    border-width:2px;
    background-color:orange; 
}
.card-header{
    background-color: ${props => props.isSelected ? teal : orange}; 
    color: ${props => props.isSelected ? "white" : "#212529"};
    font-weight:800;
    padding: .75rem;
}
.card-body{
    padding:1.25rem .5rem;
    background-color: ${props => props.isSelected ? teal : orange}; 
    p,h2,h3{
        color:${props => props.isSelected ? "white" : "black"};
        }
}
`

//because we trying to implement style in an existing rectstrap 
//component we put this component name inside ()
//insted of just puting an element name after styled.

export const DetailsWrapper = styled(Card)`

background-color: ${teal};
border: ${orangeborder};
text-align:center;
padding: 1rem;
margin: 1.5rem 0;
img{
    width:150px;
    margin:0 auto;

}
p,h2,h3{
color:white;
}
`

export const FormWrapper = styled(Form)`

input.form-control{
    width:350px;
}
button{
    background: ${teal};
}
`