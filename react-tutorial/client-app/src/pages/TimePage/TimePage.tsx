import { useState } from 'react'
import { Button } from '../../components/Button/Button'
import { ButtonStyle } from '../../helpers/enums'
import { useDate } from '../../hooks/useDate'
import { useQuery } from 'react-query'
import { GetIP, HandleOnLoad } from '../../apis/time'
import { DropDown } from '../../components/DropDown/DropDown'
import { DropDownType, Project, Shift } from '../../types'
import { Toggle } from '../../components/Toggle/Toggle'

export default function TimePage() {
  const date = useDate()
  const [workMode, setWorkMode] = useState<boolean>(false)
  const [shifts, setShifts] = useState<DropDownType[]>([] as DropDownType[])
  const [selectedShift, setSelectedShift] = useState<DropDownType>()
  const [projects, setProjects] = useState<DropDownType[]>([] as DropDownType[])
  const [selectedProject, setSelectedProject] = useState<DropDownType>()
  const { data } = useQuery({ queryKey: ['workMode'], queryFn: GetIP })

  const { data: initialData, isLoading } = useQuery({
    queryKey: ['timePage', 'CT12032'],
    queryFn: () => HandleOnLoad('CT12032'),
    onSuccess: (data) => {
      const ddlShifts = data.shifts.map((s: Shift) => {
        return {
          text: s.shiftName,
          value: s.id,
        } as DropDownType
      })

      setShifts([...ddlShifts])
      setSelectedShift({ text: 'Select Shift', value: 0 })

      const ddlProjects = data.projects.map((p: Project) => {
        return {
          text: p.projectName,
          value: p.projectId,
        } as DropDownType
      })

      setProjects([...ddlProjects])
      setSelectedProject({ text: 'Select Project', value: 0 })
    },
  })

  if (isLoading) return <h1>loading</h1>

  return (
    <div className="h-full flex justify-center items-center">
      <div className=" inline-flex flex-wrap items-center flex-col w-[50vw] py-10">
        <div>
          <p className="font-bold text-[40px] text-red-800 font-fuzy">{`${date.date}`}</p>
        </div>
        <div className="flex">
          <p className="text-[100px] font-maniac font-bold">{`${date.timeOnly}`}</p>
        </div>
        <div className="mb-2 font-fuzy">
          <Toggle checked={workMode} onChange={setWorkMode} />
        </div>
        <div className="flex justify-center gap-1 mb-2 font-fuzy">
          <DropDown
            data={shifts}
            value={selectedShift!}
            onChange={setSelectedShift}
            width={120}
          />

          <DropDown
            data={projects}
            value={selectedProject!}
            onChange={setSelectedProject}
            width={400}
          />
        </div>
        <div>
          <Button
            className="h-[60px] text-[35px] font-fuzy text-bold"
            text={initialData?.isLoggedIn ? 'Log-out' : 'Log-in'}
            btnType={
              initialData?.isLoggedIn
                ? ButtonStyle.Secondary
                : ButtonStyle.Primary
            }
            onClick={() => alert(date.timeOnly)}
          />
        </div>
      </div>
    </div>
  )
}
