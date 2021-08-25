
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../containers/Header'
import { setToggle } from '../redux/actions'

export default function Home() {
  const dispatch = useDispatch()
  return (
    <div className="d-flex">
      <Header />
      <div className="container">
        <button className="butn m-3 mb-0" onClick={() => setToggle(dispatch)}><FontAwesomeIcon icon={faAlignJustify} /></button>
        <div className="row mt-5">
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
