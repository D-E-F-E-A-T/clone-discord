import styled from "styled-components";

export const Container = styled.div`
 grid-area: UL;

 display: flex;
 flex-direction: column;
 

 padding: 3px 6px 0 16px;

 background-color: var(--secondary);
 max-height: 100vh;
overflow-y: scroll;

::-webkit-scrollbar {
    width: 7px;
}
::-webkit-scrollbar-thumb {
    background: var(--tertiary);
    border-radius: 4px;
}
::-webkit-scrollbar-track {
background-color: var(--secondary);
}
`;
export const Role = styled.span`
display: flex;
align-items: left;
margin-top: 20px;
text-transform: uppercase;
font-size: 12px;
font-weight: 500;

color: var(--gray);
`;
export const User = styled.div`
 margin-top: 5px;
 padding: 5px;

 display: flex;
 align-items: center;

 cursor: pointer;

 border-radius: 4px;
 background: transparent;
 transition: .2s;

 &:hover {
    background-color: var(--quinary);
    border-radius: 8px;
 }

 >strong {
     margin-left: 13px;
     font-weight: 500;
     color: white;
     opacity: 0.7;

     white-space: nowrap;
     text-overflow: ellipsis;
     overflow: hidden;
 }
 >span {
    margin-left: 9px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    padding: 4px 5px;
}
 >#bot {
     background-color: var(--discord);
     color: white;
  
     border-radius: 4px;

     text-transform: uppercase;
     font-weight: bold;
     font-size: 11px;
} 
>#disponivel {
    background-color: green;
}
>#ocupado {
    background-color: var(--notification);
}
>#ausente {
    background-color: var(--mention-detail);
}
`;
export const Separator = styled.span`
    height: 2px;
    width: 12px;
    
    align-self: center;
    margin: 0 7px;

    background-color: var(--quinary);
`;
export const Avatar = styled.div`
flex-shrink: 0;
width: 32px;
height: 32px;

border-radius: 50%;
background-color: var(--primary);
background-size: cover;

img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
}


&.bot {
    background-color: var(--mention-detail);
    }
`;