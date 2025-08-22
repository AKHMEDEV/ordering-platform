import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: #d9d9d9;

  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 60px;
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      gap: 40px;
    }
  }

  .left {
    flex: 1;
    max-width: 280px;
  }

  .logo {
    font-size: 32px;
    font-weight: bold;
    color: #000;
    margin: 0 0 20px 0;
    font-family: inherit;
  }

  .appButtons {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
  }

  .appButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 50px;
    border-radius: 8px;
    overflow: hidden;
    background: white;
    border: 1px solid #ddd;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .appButton img {
    width: 150px;
    height: 100px;
    object-fit: contain;
  }
  .appButton2 {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 50px;
    border-radius: 8px;
    overflow: hidden;
    background: white;
    border: 1px solid #ddd;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .appButton2 img {
    width: 210px;
    height: 200px;
    object-fit: contain;
  }

  .appButton:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  .appButton2:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .companyInfo {
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    margin: 0;
  }

  .center {
    flex: 1;
    max-width: 320px;
  }

  .newsletter {
    margin-bottom: 30px;
  }

  .newsletterTitle {
    font-size: 18px;
    font-weight: 600;
    color: #000;
    margin: 0 0 20px 0;
  }

  .form {
    display: flex;
    margin-bottom: 12px;
  }

  .emailInput {
    flex: 1;
    padding: 12px 16px;
    border: 1px solid #ddd;
    border-radius: 8px 0 0 8px;
    font-size: 14px;
    outline: none;
  }

  .emailInput::placeholder {
    color: #999;
  }

  .emailInput:focus {
    border-color: #ff9b00;
  }

  .subscribeBtn {
    background-color: #ff9b00;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 0 8px 8px 0;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .subscribeBtn:hover {
    background-color: #e68a00;
  }

  .spamText {
    font-size: 12px;
    color: #666;
    margin: 0;
  }

  .socialIcons {
    display: flex;
    gap: 16px;
  }

  .socialIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: white;
    border-radius: 12px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    overflow: hidden;
  }

  .socialIcon img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }

  .socialIcon:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .right {
    flex: 1;
    max-width: 400px;
  }

  .links {
    display: flex;
    gap: 60px;
  }

  @media (max-width: 768px) {
    .links {
      gap: 40px;
    }
  }

  .linksColumn {
    flex: 1;
  }

  .columnTitle {
    font-size: 16px;
    font-weight: 600;
    color: #000;
    margin: 0 0 20px 0;
  }

  .linkItem {
    display: block;
    font-size: 14px;
    color: #666;
    text-decoration: none;
    margin-bottom: 12px;
    transition: color 0.2s;
  }

  .linkItem:hover {
    color: #ff9b00;
  }

  .bottom {
    background-color: #1a1a1a;
    color: white;
  }

  .bottomContent {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 768px) {
    .bottomContent {
      flex-direction: column;
      gap: 16px;
      text-align: center;
    }
  }

  .copy {
    font-size: 14px;
    color: #ccc;
    margin: 0;
  }

  .bottomLinks {
    display: flex;
    gap: 24px;
  }

  @media (max-width: 768px) {
    .bottomLinks {
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
    }
  }

  .bottomLink {
    font-size: 14px;
    color: #ccc;
    text-decoration: none;
    transition: color 0.2s;
  }

  .bottomLink:hover {
    color: white;
  }
`;
