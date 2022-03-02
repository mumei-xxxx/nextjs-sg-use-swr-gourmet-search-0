import useSWR, { SWRResponse } from 'swr'

import { fetcher } from '@/libraries/fetcher'

/**
 * @description
 * 参考にしたコード
 * useSWR api-hooks サンプル
 * https://github.com/vercel/swr/tree/main/examples/api-hooks
 * SWR 定期的な再検証
 * https://swr.vercel.app/ja/docs/revalidation
 */
export const useShopDataSWR = (
  userSetKeyword: string,
  fallbackData: HotpepperResponseType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): SWRResponse<HotpepperResponseType, any> => {
  // 30秒ごとに自動更新。
  return useSWR(`api/gourmet/${userSetKeyword}`, fetcher, { fallbackData, refreshInterval: 30000 })
}
