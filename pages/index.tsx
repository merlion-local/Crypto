import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/block/latest');
  }, [router]);
  return null;
}
// Компонент Home — это главная страница (pages/index.tsx).

// При монтировании компонента (useEffect)
//  вызывается router.replace('/block/latest'), то есть:

// происходит автоматический редирект.

// используется replace, а не push,
//  чтобы не сохранять главную страницу в истории браузера (это правильно).


//  Почему return null?
// Ты не рендеришь ничего, потому что переход происходит мгновенно. 


// 🛠 Альтернатива: серверный редирект
// Если хочешь, чтобы редирект происходил на сервере,
//  без отображения даже null, можно использовать getServerSideProps:


// export async function getServerSideProps() {
//   return {
//     redirect: {
//       destination: '/block/latest',
//       permanent: false,
//     },
//   };
// }

// export default function Home() {
//   return null;
// }
