using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace react_tutorial.Model
{
    [Table("TBL_M_Project")]
    public partial class TBL_M_Project
    {
        [Key]
        public int ProjectID { get; set; }
        public string ProjectName { get; set; }
    }
}
