import React from 'react'

import { useShopDataSWR } from '@/infrastructure/hooks/useShopDataSWR'
import { useUserInputKeywordMutator } from '@/infrastructure/recoil/useUserInputKeywordState'
import { fetcher } from '@/libraries/fetcher'

interface SearchFormProps {
  userSetKeyword: string
  fallbackData: HotpepperResponseType
}
/**
 * @description 検索フォームコンポーネント
 * useSWR で制御しているデータを更新する。
 */
export const SearchForm: React.FC<SearchFormProps> = ({ userSetKeyword, fallbackData }) => {
  const { setSearchKeyword } = useUserInputKeywordMutator()

  const { mutate } = useShopDataSWR(userSetKeyword, fallbackData)

  const formRef: React.RefObject<HTMLFormElement> = React.useRef<HTMLFormElement>(null)

  const handlerOnSubmitSearch = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      seachWord: { value: string }
    }

    // ユーザーが入力したキーワード
    const seachWordValue: string = target.seachWord.value

    // RecoilのsetState
    setSearchKeyword(seachWordValue)

    // バウンドミューテーション
    // フォームに同一キーワードが入っている状態でclickボタンを複数押下したときに、
    // 厳密にデータが最新か検証を行う場合は必要。
    const mutationData = await fetcher(`api/gourmet/${seachWordValue}`)

    mutate(mutationData).catch((error) => {
      throw error
    })
  }

  return (
    <>
      <form ref={formRef} onSubmit={handlerOnSubmitSearch}>
        <input type="search" name="seachWord" placeholder="Enter keyword …" />
        <button>click</button>
      </form>
    </>
  )
}
