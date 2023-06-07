using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace react_tutorial.Model
{
    [Table("TBL_M_Employee")]
    public partial class TBL_M_Employee
    {
        [Key]
        public int EmpID { get; set; }
        public string Picture { get; set; }
        [StringLength(50)]
        public string Company { get; set; }
        [StringLength(50)]
        public string EmpNum { get; set; }
        [StringLength(50)]
        public string Position { get; set; }
        [StringLength(50)]
        public string FirstName { get; set; }
        [StringLength(50)]
        public string MiddleName { get; set; }
        [StringLength(50)]
        public string LastName { get; set; }
        public int? SectionID { get; set; }
        [StringLength(50)]
        public string Shift { get; set; }
        [StringLength(50)]
        public string WorkMode { get; set; }
        [Column(TypeName = "date")]
        public DateTime? HiredDate { get; set; }
        [Column(TypeName = "date")]
        public DateTime? EndDate { get; set; }
        [StringLength(50)]
        public string ProjectID { get; set; }
        [StringLength(50)]
        public string Role { get; set; }
        [StringLength(50)]
        public string Status { get; set; }
        public string Password { get; set; }
        [StringLength(50)]
        public string PasswordStatus { get; set; }
    }
}
