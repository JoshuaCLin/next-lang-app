import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import { Spin } from "antd";


const RouteGuard: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if(typeof localStorage === undefined) return;
    const user = localStorage.getItem('user');
    const password = localStorage.getItem('password');

    const checkIsLogin = () => {
      if (user === "pg123" && password === "pg123123" || router.pathname.includes('login')) {
        setIsLogin(true)
      } else {
        setIsLogin(false)
        router.push('/login')
      }
    }

    checkIsLogin();

    const preventAccess = () => setIsLogin(false)
    router.events.on('routeChangeStart', preventAccess);
    router.events.on('routeChangeComplete', checkIsLogin);

    return () => {
      router.events.off('routeChangeStart', preventAccess);
      router.events.off('routeChangeComplete', checkIsLogin);
    };
  }, [router])

  return isLogin ? children : (<div id="loading">
    <div style={{ width: "100%" }}>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </div>
  </div>)
};

export default RouteGuard