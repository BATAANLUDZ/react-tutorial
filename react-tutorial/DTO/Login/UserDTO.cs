using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace react_tutorial.DTO.Login
{
    public class UserDTO
    {
        public string EmpNum { get; set; }
        public string FullName { get; set; }
        public string Position { get; set; }
        public string Shift { get; set; }
        public int ProjectID { get; set; }
        public string WorkMode { get; set; }
    }
}
