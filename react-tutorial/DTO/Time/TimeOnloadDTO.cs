using react_tutorial.DTO.Time;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace react_tutorial.DTO
{
    public class TimeOnloadDTO
    {
        public List<ProjectDDLDTO> Projects { get; set; }
        public List<ShiftDDLDTO> Shifts { get; set; }

        public bool IsLoggedIn { get; set; }
    }
}
