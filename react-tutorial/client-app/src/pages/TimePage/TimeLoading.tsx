import { Skeleton } from '@mui/material'

export default function TimeLoading() {
  return (
    <div className="h-full flex justify-center items-center">
      <div className=" inline-flex flex-wrap items-center flex-col w-[50vw] py-10">
        <div className="mb-[10px]">
          <Skeleton
            variant="rounded"
            width={550}
            height={50}
            animation="wave"
          />
        </div>
        <div className="flex mb-[10px]">
          <Skeleton
            variant="rounded"
            width={550}
            height={150}
            animation="wave"
          />
        </div>
        <div className="mb-2">
          <Skeleton variant="rounded" width={80} height={50} animation="wave" />
        </div>
        <div className="flex justify-center gap-1 mb-2">
          <Skeleton
            variant="rounded"
            width={210}
            height={40}
            animation="wave"
          />
          <Skeleton
            variant="rounded"
            width={210}
            height={40}
            animation="wave"
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            width={150}
            height={80}
            animation="wave"
          />
        </div>
      </div>
    </div>
  )
}
