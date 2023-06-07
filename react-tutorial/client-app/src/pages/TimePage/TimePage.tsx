import { useEffect, useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Toggle } from '../../components/Toggle/Toggle'
import { ButtonStyle } from '../../helpers/enums'
import { useDate } from '../../hooks/useDate'

async function HandleOnLoad() {
  try {
    const res = await fetch(
      'https://localhost:44319/api/Time?employeeNo=CT12032',
    )
    const data = await res.json()

    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

export default function TimePage() {
  const date = useDate()
  const [workMode, setWorkMode] = useState<boolean>(false)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(async () => {
      await HandleOnLoad()
    })()
  }, [])

  return (
    <div className="h-full flex justify-center items-center font-pt">
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
