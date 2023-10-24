import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

export const IndexView = () => {
  return (
    <>
      <div className='w-full flex justify-center gap-10'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Pyatnashki</h1>
      <div className="card">
        <p>
          Фреймворки используются исключительно для быстрого написания самого интерфейса красивого и развертывания проекта в сети
        </p>
        <p>
         Все логически блоки проекта - нативный и написаны на чистом js(разве что с типизацией строгой, благодаря ts)
        </p>
      </div>
      <a href="/input"><button>Начать</button></a>
    </>
  )
}
