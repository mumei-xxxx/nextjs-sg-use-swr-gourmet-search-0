import React from 'react'
import { atom, SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil'

/**
 * @description
 * 参考:
 * 「3種類」で管理するReactのState戦略
 * https://zenn.dev/yoshiko/articles/607ec0c9b0408d#recoil%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9Fglobal-state%E3%81%AE%E7%AE%A1%E7%90%86
 */

/**
 * @description ユーザーが入力したキーワードを定義するAtom
 */
export const userInputKeywordState = atom<string>({
  key: 'UserInputKeyword',
  default: ''
})

/**
 * @description ユーザーが入力したキーワード
 */
export const useUserInputKeywordState = (): string => {
  return useRecoilValue(userInputKeywordState)
}

interface UseUserInputKeywordMutatorType {
  setSearchKeyword: (x: string) => void
}

/**
 * @description ユーザーが入力したキーワードをセットする関数
 */
export const useUserInputKeywordMutator = (): UseUserInputKeywordMutatorType => {
  const setState: SetterOrUpdater<string> = useSetRecoilState(userInputKeywordState)
  const setSearchKeyword = React.useCallback(
    (x: string) => {
      setState(x)
    },
    [setState]
  )

  return { setSearchKeyword }
}
