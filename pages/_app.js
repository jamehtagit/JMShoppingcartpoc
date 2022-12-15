import Layout from '../components/Layout';
import '../styles/globals.css';
import { QueryClient, QueryClientProvider,Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";

const queryClient = new QueryClient({
	defaultOptions: {
	  queries: {
		staleTime: Infinity,
	  },
	},
  })
  
  if (typeof window !== "undefined") {
	const localStoragePersistor = createWebStoragePersistor({
	storage: window.localStorage,
	});
  
	persistQueryClient({
	  queryClient,
	  persistor: localStoragePersistor,
	});
  }

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Layout>
			<QueryClientProvider client={queryClient}>
    			
      				<Component {...pageProps} />
      				<ReactQueryDevtools initialIsOpen={false} />
      			
  			</QueryClientProvider>
			</Layout>
		</>
	);
}

export default MyApp;
