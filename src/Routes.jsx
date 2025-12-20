import App from "./App"
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
            { path: 'shop/:category/:id', element: <Item />}
        ]
    },
    // {
    //     path: '/shop',
    //     element: <Shop />
    // }
]

export default routes