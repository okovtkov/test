import '../../globals.css';

interface Props {
  pageProps: any;
  Component: any;
}

export default function App({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}
