export type UseMutateDataOptions<TData> = {
  /** 성공 시 호출 */
  onSuccess?: (data: TData) => void;
  /** 에러 시 호출 */
  onError?: (error: string) => void;
  /** 성공 또는 에러 시 호출 */
  onSettled?: (data: TData | null, error: string | null) => void;
};

export type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export type UseFetchDataOptions = {
  immediate?: boolean; // 즉시 실행할지 여부
  deps?: React.DependencyList; // 의존성 배열
};
