
import Link from 'next/link'
import Header from '../containers/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Link href="/users">
              <a>
                <div className="cardd p-4 m-3">
                  <p className="fs-2 p-0 m-0">Users</p>
                </div>
              </a>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link href="/todos">
              <a>
                <div className="cardd p-4 m-3">
                  <p className="fs-2 p-0 m-0">Todos</p>
                </div>
              </a>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link href="/posts">
              <a>
                <div className="cardd p-4 m-3">
                  <p className="fs-2 p-0 m-0">Posts</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
