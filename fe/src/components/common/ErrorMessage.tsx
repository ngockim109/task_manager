export interface ErrorMessageProps {
  errorMessage: string | null
}
const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return <p className="text-sm text-destructive">{errorMessage}</p>
}

export default ErrorMessage
