import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
function Page404() {
  const navigate = useNavigate();
  const goToMain = useCallback(() => {
    return () => navigate(`/albums`);
  }, []);
  return (
    <div>
      <div>404 СТРАНИЦА НЕ НАЙДЕНА</div>
      <a onClick={goToMain()}>ВЕРНУТЬСЯ НА ГЛАВНУЮ</a>
    </div>
  );
}

export default Page404;
