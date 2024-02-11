export interface IErrorResponse {
  code: string
  error: string | Record<string, string>[]
}
