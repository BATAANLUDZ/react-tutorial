using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace react_tutorial.Model
{
    [Table("TBL_M_Shift")]
    public partial class TBL_M_Shift
    {
        [Key]
        public int ID { get; set; }
        [StringLength(50)]
        public string SHIFTNAME { get; set; }
    }
}
