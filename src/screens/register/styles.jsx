import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 400px;
    height: 520px;
    background-color: #f8c471;
    border-radius: 10px;
`;

export const Subtitle = styled.h2`
    font-family: Corbel;
    color: #000;
`;

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 700px;
`;
export const ContainerInput = styled.div`
    width: 90%;
    height: 55px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const Input = styled.input`
    width: 90%;
    height: 35px;
    border-radius: 50px;
    border: none;
    background-color: #f8f9f9;
    padding-left: 20px;
    font-family: Corbel;
    :focus-visible {
        outline: 1px solid #f8f0f0;
    }
`;
export const Button = styled.button`
    width: 70%;
    height: 40px;
    border: none;
    margin: 5px 0 5px 0;
    background-color: #d35400;
    border-radius: 50px;
    color: #f8f9f9;
    font-family: Corbel;
    font-weight: bold;
    :hover {
        background-color: #f8f9f9;
        color: #d35400;
        cursor: pointer;
    }
`;
export const Error = styled.p`
    font-size: 12px;
    color: red;
    margin: 5px 0 0 0;
    font-family: "Trebuchet MS";
    text-align: center;
`;
