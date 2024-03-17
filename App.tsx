import {Provider} from "react-redux";
import store from "@/store/store";
import {LoaderProvider} from "@/context/LoaderProvider";
import AppNavigator from "@/navigation/AppNavigator";

export default function App() {
    return (
        <LoaderProvider>
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        </LoaderProvider>
    );
}
