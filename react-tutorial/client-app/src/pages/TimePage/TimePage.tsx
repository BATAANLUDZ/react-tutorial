import { useState } from 'react'
import { Button } from '../../components/Button/Button'
import { ButtonStyle } from '../../helpers/enums'
import { useDate } from '../../hooks/useDate'
import { useQuery } from 'react-query'
import { HandleOnLoad } from '../../apis/time'
import { DropDown } from '../../components/DropDown/DropDown'
import { DropDownType, Project, Shift } from '../../types'

export default function TimePage() {
  const date = useDate()
  const [workMode, setWorkMode] = useState<boolean>(false)
  const [shifts, setShifts] = useState<DropDownType[]>([] as DropDownType[])
  const [selectedShift, setSelectedShift] = useState<DropDownType>()
  const [projects, setProjects] = useState<DropDownType[]>([] as DropDownType[])
  const [selectedProject, setSelectedProject] = useState<DropDownType>()

  const { data, isLoading } = useQuery({
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
      setSelectedShift(ddlShifts[0])

      const ddlProjects = data.projects.map((p: Project) => {
        return {
          text: p.projectName,
          value: p.projectId,
        } as DropDownType
      })

      setProjects([...ddlProjects])
      setSelectedProject(ddlProjects[0])
    },
  })

  if (isLoading) return <h1>loading</h1>

  return (
    <div className="h-full flex justify-center items-center font-pt">
      <div className="border-[1px] border-gray-300 border-opacity-40 border-solid rounded-[100px] shadow-xl inline-flex flex-wrap items-center flex-col w-[50vw] py-10">
        <div>
          <p className="text-[40px] text-red-800">{`${date.date}`}</p>
        </div>
        <div className="flex">
          <p className="text-[100px] font-bold">{`${date.timeOnly}`}</p>
        </div>
        <div>
          <p className="text-[30px] font-bold text-red-800">WFH</p>
        </div>
        <div className="flex justify-center gap-1 mb-2">
          <DropDown
            data={shifts}
            value={selectedShift!}
            onChange={setSelectedShift}
            width={100}
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
            className="h-[100px] w-[200px] text-[40px]"
            text="Time-in"
            btnType={data ? ButtonStyle.Secondary : ButtonStyle.Primary}
            onClick={() => alert(date.timeOnly)}
          />
        </div>
      </div>
    </div>
  )
}
