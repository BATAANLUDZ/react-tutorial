import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryErrorResetBoundary } from 'react-query'
import { ErrorBoundaries } from './ErrorBoundaries'

export const SuspenseBoundaries = ({
  children,
  loading,
}: {
  children: JSX.Element
  loading: JSX.Element
}) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={ErrorBoundaries}>
          <Suspense fallback={loading}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
