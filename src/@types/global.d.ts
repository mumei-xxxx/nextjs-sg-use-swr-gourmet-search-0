/**
 * @description API仕様
 * ホットペッパー | APIリファレンス | リクルートWEBサービス
 * https://webservice.recruit.co.jp/doc/hotpepper/reference.html
 */

interface ShopObj {
  id: string
  name: string
  station_name: string
  genre: {
    name: string
    catch: string
  }
}

interface HotpepperResponseType {
  results: {
    shop: ShopObj[]
  }
}

/**
 * @description エラー時のレスポンス
 * https://webservice.recruit.co.jp/doc/hotpepper/reference.html
 * 13.エラー時のレスポンス
 */
interface HotpepperErrorResponseType {
  results: {
    error: {
      message: string
      code: string
    }
  }
}
