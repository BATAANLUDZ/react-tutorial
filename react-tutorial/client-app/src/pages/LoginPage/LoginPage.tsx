import { useAtom } from 'jotai'
import { RESET } from 'jotai/utils'
import { useForm } from 'react-hook-form'

import { tokenAtom } from '../../atoms'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { ButtonStyle } from '../../helpers/enums'
import { HandleLoginAsync } from '../../apis/login'

export default function LoginPage() {
  //   const [token, setToken] = useAtom(tokenAtom)
  const { register, handleSubmit } = useForm({
    defaultValues: { username: '', password: '' },
  })

  return (
    <div className="flex h-[93vh] justify-center items-center">
      <div className="inline-flex flex-col gap-3 ">
        <p className="text-red-800 text-[25px] font-shareMono font-bold">
          OAMS
        </p>
        <div className="flex flex-col gap-3 font-share">
          <Input
            {...register('username')}
            width={300}
            error={''}
            placeholder="Username"
          />
          <Input
            width={300}
            error={''}
            placeholder="Password"
            {...register('password')}
            type="password"
          />
          <Button
            text={'Login'}
            btnType={ButtonStyle.Secondary}
            className="font-shareMono "
            onClick={handleSubmit(({ username, password }) => {
              HandleLoginAsync(username, password)
            })}
          />
        </div>
      </div>
    </div>
  )
}
