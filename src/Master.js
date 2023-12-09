import { Link, Outlet } from "react-router-dom";

function Master()
{
    return(<div>
        <header>
         <ul>
            <li><Link to="/first">First</Link></li>
            <li><Link to="/second">Second</Link></li>
            <li><Link to="/third">Third</Link></li>
         </ul>
        </header>
        <section>
            <Outlet />
        </section>
        <footer>
            <center>&copy;2023 by SCS</center>
        </footer>
    </div>)
}

export default Master;