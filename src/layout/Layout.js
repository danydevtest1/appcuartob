import BarraMenu from "../components/BarraMenu";

function Layout({children}){
    return(
        <div className="container-fluid">
            <div>
               <BarraMenu/>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout;