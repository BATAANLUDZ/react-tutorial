import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { ButtonStyle } from '../../helpers/enums'

export default function LoginPage() {
  return (
    <div className="flex h-[93vh] justify-center items-center">
      <div className="inline-flex flex-col gap-3 ">
        <p className="text-red-800 text-[25px] font-marker font-bold">OAMS</p>
        <div className="flex flex-col gap-3 font-kalam">
          <Input type="text" width={300} error={''} placeholder="Username" />
          <Input type="text" width={300} error={''} placeholder="Password" />
          <Button text={'Login'} btnType={ButtonStyle.Secondary} />
        </div>
      </div>
    </div>
  )
}
