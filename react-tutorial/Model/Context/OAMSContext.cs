using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using react_tutorial.Model;

#nullable disable

namespace react_tutorial.Model.Context
{
    public partial class OAMSContext : DbContext
    {
        public OAMSContext()
        {
        }

        public OAMSContext(DbContextOptions<OAMSContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TBL_M_Employee> TBL_M_Employees { get; set; }
        public virtual DbSet<TBL_M_Employee_Email> TBL_M_Employee_Emails { get; set; }
        public virtual DbSet<TBL_M_Project> TBL_M_Projects { get; set; }
        public virtual DbSet<TBL_M_Shift> TBL_M_Shifts { get; set; }
        public virtual DbSet<TBL_T_Log> TBL_T_Logs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("name=OAMSConnectionString");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
