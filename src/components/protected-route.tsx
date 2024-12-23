/* 
로그인 함 => protected route를 볼 수 있음
로그인 하지 않음 => 로그인 / 계정 생성 페이지로 redirect 
*/

import React from "react";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  // 로그인 상태 확인
  const user = auth.currentUser;
  console.log(user);
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return children;
}
