import {Provider} from "react-redux";
import store from "@/store/store";
import {LoaderProvider} from "@/context/LoaderProvider";
import AppNavigation from "@/navigation/AppNavigation";

export default function App() {

    return (
        <LoaderProvider>
            <Provider store={store}>
                <AppNavigation/>
            </Provider>
        </LoaderProvider>
    );
}
