import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import Text from "../Text";
//import Input from "../Input";
import Margin from "../Margin";
import Button from "../Button";
import Toast from "../Toast";

const LoginModalWrapper = styled.div`
  width: 300px;
  height: 140px;
  padding-top: 12px;
  border-radius: 20px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  z-index: 9;
`;

const ElementWrapper = styled.div`
  display: inline;
  text-align: center;
  justify-content: ${(props) => props.justify};
  width: 100%;
`;

const StyledText = styled(Text)`
  color: ${(props) => props.color};
  font-weight: 700;
  margin: auto;
`;

const StyledButton = styled(Button)`
  width: 100px;
  height: 28px;
  display: flex;
  font-size: 12px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: auto;
  border: 1.6px solid #bdd4e7;
  background-color: #fff;
  font-weight: 550;
  color: #bdd4e7;
  cursor: pointer;
  &:hover {
    background-color: #bdd4e7;
    color: #fff;
  }
`;

export default function LoginModal() {
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false); // 저장 완료 토스트 메시지용 State
  const router = useRouter();

  useEffect(() => {
    if (active) {
      setTimeout(() => setActive(false), 2000);
    }
  }, [active]);

  const requestLogin = () => {
    setActive((active) => !active);
    if (password === "fine0517") {
      {
        console.log("연결성공");
        active && <Toast msg={"연결에 성공했습니다."} width={"100%"} />;
      }
      router.push("/secret");
    } else {
      {
        console.log("연결실패");
        active && <Toast msg={"연결에 실패했습니다."} width={"100%"} />;
      }
    }
  };

  return (
    <LoginModalWrapper>
      <ElementWrapper>
        <StyledText color="#000" size="14">
          "INHA_UNIV_2022G"에 대한 암호 입력
        </StyledText>
        <Margin size="12" />
        {/* <Input
          password
          placeholder="비밀번호를 입력해주세요."
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        /> */}
        <Margin size="10" />
        <StyledButton onClick={requestLogin}>연결하기</StyledButton>

        {active && <Toast msg={"연결중"} width={"100%"} />}
      </ElementWrapper>
    </LoginModalWrapper>
  );
}
