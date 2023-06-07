using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace react_tutorial.Model
{
    [Table("TBL_T_Log")]
    public partial class TBL_T_Log
    {
        [Key]
        public int LogID { get; set; }
        [Required]
        [StringLength(50)]
        public string EmpNum { get; set; }
        [StringLength(50)]
        public string WorkMode { get; set; }
        [StringLength(50)]
        public string Schedule { get; set; }
        [StringLength(50)]
        public string Shift { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime LogDate { get; set; }
        [StringLength(50)]
        public string TimeIn { get; set; }
        [StringLength(50)]
        public string TimeOut { get; set; }
        [StringLength(50)]
        public string TimeStatus { get; set; }
        [StringLength(50)]
        public string ProjectID { get; set; }
        [StringLength(50)]
        public string Remarks { get; set; }
        [StringLength(50)]
        public string IPAddress_1 { get; set; }
        [StringLength(50)]
        public string IPAddress_2 { get; set; }
    }
}
