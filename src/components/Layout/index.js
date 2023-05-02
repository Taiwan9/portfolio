import './index.scss';
import Sidebar from '../sidebar'
import { Outlet } from 'react-router-dom';

const Layout = ()=>{
    return (
        <div className='App'>
            <Sidebar/>
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>

                <Outlet></Outlet>

                <span className='tags botton-tags'>&lt;body&gt;
                    <br/>
                    <span className='botton-tag-html'>&lt;html&gt;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout