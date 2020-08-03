import styled from "styled-components";

const teal = "#008080";
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
    background-color: ${props => props.isSelected ? teal : null}; 
    font-weight:800;
    padding: .75rem;
}
.card-body{
    padding:1.25rem .5rem;
}
`