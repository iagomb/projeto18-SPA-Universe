
import Router from "./router.js"

const router = Router

router.addRoute('/', '/page/home.html')
router.addRoute('/explore', '/page/explore.html')
router.addRoute('/universe', '/page/universe.html')
router.addRoute(404, '/page/404.html')

router.handleClickRoute()

router.handleClickRoute()

router.handle()