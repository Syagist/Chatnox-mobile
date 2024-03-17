import {Provider} from "react-redux";
import store, {RootState, useAppDispatch, useAppSelector} from "@/store/store";
import {LoaderProvider} from "@/context/LoaderProvider";
import AppNavigator from "@/navigation/AppNavigator";
import {useEffect} from "react";
import {loadUserData} from "@/store/slices/authSlice";

export default function App() {

    return (
        <LoaderProvider>
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        </LoaderProvider>
    );
}
