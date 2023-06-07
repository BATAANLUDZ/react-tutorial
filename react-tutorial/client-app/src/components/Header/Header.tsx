import { NavLink } from 'react-router-dom'
import { MenuType } from '../../types/index'
import { motion } from 'framer-motion'

interface IHeaderProps {
  userName: string
  menus: MenuType[]
}

export const Header = (props: IHeaderProps) => {
  return (
    <div className="max-h-[8vh] h-[10vh] rounded shadow-md border-[1px] border-gray-300 border-opacity-40 border-solid flex px-[7em]">
      <ul className="grow flex items-center">
        {props.menus.map((m: MenuType, index: number) => (
          <motion.li
            key={index}
            className="leading-[8vh]"
            whileHover={{ background: 'gray', color: 'white' }}
          >
            <NavLink
              to={m.path}
              className={({ isActive }) =>
                isActive
                  ? 'bg-black h-full active block text-white px-5'
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
