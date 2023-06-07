using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace react_tutorial.DTO.Time
{
    public class TimePostDTO
    {
        [Required(ErrorMessage = "Employee number is required")]
        public string EmployeeNo { get; set; }
        [Required(ErrorMessage = "Status is required")]
        public string Status { get; set; }

        public string Remarks { get; set; }
        [Required(ErrorMessage = "Project is required")]
        public int ProjectID { get; set; }
        [Required(ErrorMessage = "Shift is required")]
        public int ShiftID { get; set; }
        [Required(ErrorMessage = "IP Address is required")]
        public string IPAddress { get; set; }
        [Required(ErrorMessage = "WorkMode is required")]
        public string WorkMode { get; set; }

    }
}
