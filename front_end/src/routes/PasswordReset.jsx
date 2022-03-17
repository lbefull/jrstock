import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { passwordReset } from "../api/user";
import "./background.css";

export default function PasswordReset() {
  const [name, setName] = useState(null);
  const [email, setEamil] = useState(null);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  // 이름 입력받기
  const inputName = (e) => {
    setName(e.target.value);
  };

  // 이메일 입력받기
  const inputEmail = (e) => {
    setEamil(e.target.value);
  };

  // 비밀번호 재설정 요청
  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      await passwordReset({ name, email });
      alert(`${email}로 임시 비밀번호가 발송되었습니다.`);
      navigate({ pathname: "/login" });
    } catch (e) {
      setIsError(true);
      console.log(e);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-img">
        <div className="max-w-lg w-full border-2 p-12 rounded-md bg-white">
          <div>
            <h2 className="text-3xl font-extrabold text-indigo-900 text-center">
              JRstock
            </h2>
          </div>
          <div>
            <h2 className="text-xl mt-8 font-extrabold text-indigo-900">
              비밀번호 찾기
            </h2>
          </div>
          <div>
            <p className="text-indigo-900">
              가입 시 등록한 이메일과 이름을 입력해주세요.
            </p>
            <p className="text-indigo-900">
              이메일을 통해 재설정된 비밀번호가 발송됩니다.
            </p>
          </div>
          {isError && (
            <div>
              <p className="text-red-600 mt-8">
                사용자 정보가 올바르지 않습니다.
              </p>
            </div>
          )}
          <form className="mt-5" onSubmit={resetPassword}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm">
              <div className="my-5">
                <label htmlFor="password">이름</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-indigo-900 placeholder-gray-900 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-900 focus:border-indigo-900 focus:z-10 sm:text-sm"
                  placeholder="Name"
                  onChange={inputName}
                />
              </div>
              <div className="my-5">
                <label htmlFor="email-address">이메일</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-indigo-900 placeholder-gray-900 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-900 focus:border-indigo-900 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={inputEmail}
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-4">
              <div className="col-span-3 pr-2">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-900 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-900"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                  비밀번호 재발급 받기
                </button>
              </div>

              <div
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-300 hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-900 hover:cursor-pointer"
                onClick={function () {
                  navigate({ pathname: "/login" });
                }}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                취소
              </div>
            </div>
          </form>

          <div className="flex justify-center mt-8">
            <p>아직 계정이 없으신가요?&nbsp;</p>
            <Link to="/signup" className="text-blue-600 hover:text-blue-900">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
