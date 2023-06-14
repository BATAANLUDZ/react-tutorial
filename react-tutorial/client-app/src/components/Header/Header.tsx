import { NavLink } from 'react-router-dom'
import { MenuType } from '../../types/index'
import { motion } from 'framer-motion'

interface IHeaderProps {
  userName: string
  menus: MenuType[]
}

export const Header = (props: IHeaderProps) => {
  return (
    <div className="max-h-[8vh] h-[10vh]  flex px-[7em]">
      <span className="grow flex items-center text-[35px] font-bold font-fuzy">
        OAMS
      </span>
      <ul className="grow flex items-center">
        {props.menus.map((m: MenuType, index: number) => (
          <motion.li key={index} className="leading-[8vh] rounded-b-[30px]">
            <NavLink
              to={m.path}
              className={({ isActive }) =>
                isActive
                  ? 'bg-black h-full active block text-white px-5 rounded-b-[30px] shadow-md'
                  : 'font-normal px-5'
              }
            >
              {m.name}
            </NavLink>
          </motion.li>
        ))}
      </ul>
      <div className="flex items-center">
        <span>{props.userName}</span>
      </div>
    </div>
  )
}
