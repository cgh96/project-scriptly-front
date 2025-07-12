export type UseMutationDataOptions<TData> = {
  onSuccess?: (data: TData) => void;
  onError?: (error: string) => void;
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
