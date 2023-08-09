import "./Header.css"

function Header() {
    return (<header className="header">
        <img src="/img/new-header.jpg" alt="Org" />
        <div className="contenido">
            <div className="info__container">
                <h2>Let's start</h2>
                <p>Welcome to TaskHub! You can manage your teamwork and assign tasks for each member.</p>
            </div>
            <button type="button" class="btn btn-light">New Project</button>
        </div>
    </header>);
}

export default Header