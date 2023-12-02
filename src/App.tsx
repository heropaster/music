import {GlobalStyle} from "./globalStyles.js";
import {AppRoutes} from "./routes";
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "./services/queryClient";

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AppRoutes/>
                <GlobalStyle/>
            </QueryClientProvider>
        </>
    );
}

export default App;
