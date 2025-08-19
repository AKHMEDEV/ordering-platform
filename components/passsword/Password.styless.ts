import styled from "styled-components";

export const PasswordWrapper = styled.div`
  .passwordWrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .formInput {
    width: 100%;
    padding: 12px 40px 12px 14px; /* o‘ng tarafga icon uchun joy */
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 14px;
    outline: none;
    transition: all 0.3s ease;
  }

  .formInput:focus {
    border-color: #ff9b00;
    box-shadow: 0 0 6px rgba(255, 155, 0, 0.4);
  }

  .icon {
    position: absolute;
    right: 12px;
    cursor: pointer;
    color: #666;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon:hover {
    color: #000;
  }
`;
