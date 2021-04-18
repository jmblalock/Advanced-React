import NProgrss from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgrss.start());
Router.events.on('routeChangeComplete', () => NProgrss.done());
Router.events.on('routeChangeError', () => NProgrss.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
