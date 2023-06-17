import { FallbackProps } from 'react-error-boundary'
import { Button } from '../components/Button/Button'
import { ButtonStyle } from './enums'

export const ErrorBoundaries = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col gap-3 font-shareMono">
        <p className="text-[20px]">Error: {error.message}</p>
        <div className="text-center">
          <Button
            text="Reload"
            onClick={resetErrorBoundary}
            btnType={ButtonStyle.Secondary}
          />
        </div>
      </div>
    </div>
  )
}
