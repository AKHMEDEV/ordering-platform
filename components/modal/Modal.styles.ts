import styled from "styled-components";

export const ModalWrapper = styled.div`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }

  .modalContent {
    background: #fff;
    padding: 40px 30px;
    border-radius: 16px;
    min-width: 400px;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.3s ease-in-out;
  }

  .closeBtn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #666;
    transition: color 0.3s ease;
  }

  .closeBtn:hover {
    color: #000;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    color: #2c3e50;
  }

  .formGroup {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  .formLabel {
    font-size: 14px;
    margin-bottom: 6px;
    color: #34495e;
    font-weight: 500;
  }

  .formInput {
    padding: 12px 14px;
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

  .submitBtn {
    width: 100%;
    padding: 12px 20px;
    background: #ff9b00;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
  }

  .submitBtn:hover {
    background: #e67e22;
    transform: translateY(-2px);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
