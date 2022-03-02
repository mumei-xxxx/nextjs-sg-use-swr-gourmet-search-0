import type { AppProps /*, AppContext */ } from 'next/app'
import { RecoilRoot } from 'recoil'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

// eslint-disable-next-line import/no-default-export
export default MyApp
