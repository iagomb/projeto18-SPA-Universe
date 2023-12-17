class Router {
    routes = {}
    addRoute(route, page){
        this.routes[route] = page
    }

    handleClickRoute(){
        const a = document.querySelectorAll('a')

        a.forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault()
                window.history.pushState({},'', e.target.href)
                this.handle()

                this.toggle()
                e.target.classList.add('active')
            })
        })

    }

    handle(){
        const {pathname} = window.location
        const route = this.routes[pathname] || this.routes[404]
        fetch(route)
            .then(data => data.text())
            .then(html => {
                document.getElementById('app').innerHTML = html
            })
    }

    toggle() {

        const selecionado = document.querySelectorAll('.active')
        selecionado.forEach(el => {
            el.classList.remove('active')
        })
    }
}

export default new Router();