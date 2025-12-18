import App from "./App"
import Error from "./Error"
import Home from "./Home"
import Shop from "./Shop"

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: 'shop', element: <Shop /> }
        ]
    },
    // {
    //     path: '/shop',
    //     element: <Shop />
    // }
]

export default routes