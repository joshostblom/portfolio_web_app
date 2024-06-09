function LocalNavbar() {
    return (
        <div>
            <div className="flex bg-slate-200 dark:bg-slate-800 p-3 rounded-lg">
                <h1 className="font-bold" href="/">Joshua Ostblom</h1>
                <nav>
                    <a className="px-2" href="/">Home</a>
                    <a className="px-2" href="/resume">Resume</a>
                    <a className="px-2" href="/projects">Projects</a>
                </nav>
            </div>
        </div>
    );
}

export default LocalNavbar;