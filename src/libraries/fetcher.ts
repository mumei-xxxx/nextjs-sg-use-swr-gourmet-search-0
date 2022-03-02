/**
 * @description
 * useSWR のパラメータなどで使用する。
 * @param {string} [args] API URL
 * @returns {Promise<HotpepperResponseType>} API レスポンス
 */
export const fetcher = async (args: string): Promise<HotpepperResponseType> => {
  const response = await fetch(args)
  return (await response.json()) as HotpepperResponseType
}
