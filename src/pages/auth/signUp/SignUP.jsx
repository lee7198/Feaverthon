import { React, useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isSamePassword, setIsSamePassword] = useState(true);

  // 비밀번호 입력 칸 변화를 감지함
  function inputPassword(e) {
    setPassword(e.target.value);
  }

  // 비밀번호 확인 칸 변화를 감지함
  function checkPassword(e) {
    if (password === e.target.value) {
      setIsSamePassword(true);
    } else {
      setIsSamePassword(false);
    }
  }

  // 이메일 유효성 검사
  function validateEmail(emailToCheck) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(emailToCheck);
  }

  // 이메일 입력 칸 변화를 감지함
  function handleEmailChange(event) {
    setEmail(event.target.value);
    setIsValidEmail(validateEmail(email));
  }

  // 이메일 중복 체크 로직 만들어야함

  return (
    <div>
      <h1>SignUp</h1>
      <form>
        <span>Email</span>
        <input type="email" placeholder="Email" onChange={handleEmailChange} />
        {!isValidEmail && <span>이메일 형식이 올바르지 않습니다.</span>}
        <input
          type="password"
          placeholder="Password"
          onChange={inputPassword}
        />
        <input
          type="password"
          placeholder="Password Check"
          onChange={checkPassword}
        />
        {!isSamePassword && <span>비밀번호가 일치하지 않습니다.</span>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignUp;
