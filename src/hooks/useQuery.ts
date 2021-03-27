import QueryString from 'query-string';

export function useQuery(): any {
  return QueryString.parse(window.location.search)
}
