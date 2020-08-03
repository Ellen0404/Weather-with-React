import styled from "styled-components";
import { Form, Card } from "reactstrap";


const teal = "#008080";
const gray = "#ccc";
const border = `2px solid ${gray}`;
const tealborder = `2px solid ${teal}`;

// put element name after styled. 
export const CardWrapper = styled.article`
:hover{
    cursor:pointer;
    .card{
        border-color:${teal}
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
    background-color: ${props => props.isSelected ? teal : gray}; 
    color: ${props => props.isSelected ? "white" : "#212529"};
    font-weight:800;
    padding: .75rem;
}
.card-body{
    padding:1.25rem .5rem;
}
`

//because we trying to implement style in an existing rectstrap 
//component we put this component name inside ()
//insted of just puting an element name after styled.

export const DetailsWrapper = styled(Card)` 
border: ${tealborder};
text-align:center;
padding: 1rem;
margin: 1.5rem 0;
img{
    width:150px;
    margin:0 auto;

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