using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace react_tutorial.Model
{
    public partial class TBL_M_Employee_Email
    {
        [Key]
        public int ID { get; set; }
        [StringLength(50)]
        public string EmpNum { get; set; }
        [StringLength(50)]
        public string Email { get; set; }
    }
}
