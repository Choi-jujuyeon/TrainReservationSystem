import React from "react";
import styled from "styled-components";

const InputBox = ({ inputs }) => {
    return (
        <StyledInputBox>
            {inputs.map((input, index) => (
                <input
                    key={index}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={input.value}
                    onChange={input.onChange}
                />
            ))}
        </StyledInputBox>
    );
};

const StyledInputBox = styled.div`
    width: 100%;
    height: auto;
    gap: 16px;
    display: flex;
    flex-direction: column;

    input {
        height: 48px;
        padding: 14px;
        border: 1px solid #c5c6cc;
        border-radius: 12px;
        font-size: 16px;

        &:focus {
            border-color: #007bff;
            outline: none;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }
    }

    input::placeholder {
        color: #8f9098;
        font-size: 14px;
    }
`;

export default InputBox;
