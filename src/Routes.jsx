import About from "./About"
import App from "./App"
import Checkout from "./Checkout"
import Error from "./Error"
import Home from "./Home"
import Item from "./Item"
import Shop from "./Shop"

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: 'shop', element: <Shop /> },
            { path: 'about', element: <About /> },
            { path: 'checkout', element: <Checkout /> },
            { path: 'shop/:category/:id', element: <Item />},
        ]
    },
    // {
    //     path: '/checkout',
    //     element: <Checkout />
    // }
    // {
    //     path: '/shop',
    //     element: <Shop />
    // }
]

export default routes