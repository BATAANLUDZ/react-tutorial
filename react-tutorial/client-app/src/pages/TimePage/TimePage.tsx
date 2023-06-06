import { useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Toggle } from '../../components/Toggle/Toggle'
import { ButtonStyle } from '../../helpers/enums'
import { useDate } from '../../hooks/useDate'

export default function TimePage() {
  const date = useDate()
  const [workMode, setWorkMode] = useState<boolean>(false)

  return (
    <div className="h-full flex justify-center items-center">
      <div className="border-[1px] border-gray-300 border-opacity-40 border-solid rounded-[100px] shadow-xl inline-flex flex-wrap items-center flex-col gap-3 w-[50vw] py-10">
        <div>
          <p className="text-[40px] text-red-800">{`${date.date}`}</p>
        </div>
        <div className="flex">
          <p className="text-[100px] font-bold">{`${date.timeOnly}`}</p>
        </div>
        <div>
          <Toggle checked={workMode} onChange={setWorkMode} />
        </div>
        <div>
          <Button
            className="h-[100px] w-[200px] text-[40px]"
            text="Time-in"
            btnType={ButtonStyle.Secondary}
            onClick={() => alert(date.timeOnly)}
          />
        </div>
      </div>
    </div>
  )
}
