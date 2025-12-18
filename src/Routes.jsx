import App from "./App"
import Error from "./Error"

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
    }
]

export default routes