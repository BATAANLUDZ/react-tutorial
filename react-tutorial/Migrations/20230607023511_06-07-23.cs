using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace react_tutorial.Migrations
{
    public partial class _060723 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TBL_M_Employee",
                columns: table => new
                {
                    EmpID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Picture = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Company = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    EmpNum = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Position = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    FirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    MiddleName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    SectionID = table.Column<int>(type: "int", nullable: true),
                    Shift = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    WorkMode = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    HiredDate = table.Column<DateTime>(type: "date", nullable: true),
                    EndDate = table.Column<DateTime>(type: "date", nullable: true),
                    ProjectID = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Role = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PasswordStatus = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TBL_M_Employee", x => x.EmpID);
                });

            migrationBuilder.CreateTable(
                name: "TBL_M_Employee_Emails",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmpNum = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TBL_M_Employee_Emails", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "TBL_M_Project",
                columns: table => new
                {
                    ProjectID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProjectName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TBL_M_Project", x => x.ProjectID);
                });

            migrationBuilder.CreateTable(
                name: "TBL_M_Shift",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SHIFTNAME = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TBL_M_Shift", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "TBL_T_Log",
                columns: table => new
                {
                    LogID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmpNum = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    WorkMode = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Schedule = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Shift = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    LogDate = table.Column<DateTime>(type: "datetime", nullable: false),
                    TimeIn = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    TimeOut = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    TimeStatus = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    ProjectID = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Remarks = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    IPAddress_1 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    IPAddress_2 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TBL_T_Log", x => x.LogID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TBL_M_Employee");

            migrationBuilder.DropTable(
                name: "TBL_M_Employee_Emails");

            migrationBuilder.DropTable(
                name: "TBL_M_Project");

            migrationBuilder.DropTable(
                name: "TBL_M_Shift");

            migrationBuilder.DropTable(
                name: "TBL_T_Log");
        }
    }
}
