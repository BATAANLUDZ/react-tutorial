import { useSetAtom } from 'jotai'
import { useForm } from 'react-hook-form'

import { tokenAtom } from '../../atoms'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { ButtonStyle } from '../../helpers/enums'
import { HandleLoginAsync } from '../../apis/login'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const setToken = useSetAtom(tokenAtom)
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: { username: '', password: '' },
  })

  const { mutate: login } = useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string
      password: string
    }) => HandleLoginAsync(username, password),
    onSuccess: (data) => {
      if (!data.isSuccess) {
        toast.error(data.message, { position: 'bottom-right' })
        setValue('username', '')
        setValue('password', '')
      }
      setToken(data.data || '')
    },
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
            onClick={handleSubmit(login)}
          />
        </div>
      </div>
    </div>
  )
}
