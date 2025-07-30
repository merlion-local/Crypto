import { ThemeProvider, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '../store';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '../store/theme';
// Файл _app.tsx — это глобальный компонент-обёртка, который управляет
//  инициализацией всех страниц приложения.
//позволяет:
//Сохранять глобальное состояние между переходами на страницы
// Добавлять общие стили или layout-компоненты
// Внедрять провайдеры (Redux, Theme, Auth и т.д.)
// Перехватывать ошибки всего приложения

export default function App({ Component, pageProps }: AppProps)
// Component — это любая страница,
//  которую ты открываешь (например, /block/[number]).
// pageProps — это пропсы, переданные этой странице,
//  включая результат из getStaticProps или getServerSideProps.
{
  return (
    <>
    {/* – добавляет шрифты и настраивает мета-теги для всех страниц. */}
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" 
          rel="stylesheet" 
        />
      </Head>

      {/* – подключает Redux, чтобы все компоненты могли использовать
       useAppDispatch и useAppSelector. */}
      <Provider store={store}>

        <ThemeProvider theme={theme}> 
          {/* – задаёт глобальную MUI-тему и сбрасывает
           базовые стили (CssBaseline). */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

// В Next.js это специальный системный файл:

// _app.tsx → глобальный компонент приложения

// _document.tsx → кастомизация html, body, SSR

// _error.tsx → собственная страница ошибки