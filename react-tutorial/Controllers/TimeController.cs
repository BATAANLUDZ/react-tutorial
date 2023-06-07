using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using react_tutorial.DTO;
using react_tutorial.DTO.Time;
using react_tutorial.Model;
using react_tutorial.Model.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace react_tutorial.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimeController : ControllerBase
    {
        OAMSContext _context;
        public TimeController(OAMSContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult Index([FromQuery] string employeeNo)
        {
            if (string.IsNullOrEmpty(employeeNo))
                return BadRequest();

            var employee = from user in _context.TBL_M_Employees
                           where user.EmpNum == employeeNo
                           select user;


            if (!employee.Any())
                return NotFound();

            var Project = (from project in _context.TBL_M_Projects
                           select new ProjectDDLDTO
                           { ProjectId = project.ProjectID, ProjectName = project.ProjectName })
                           .AsNoTracking().ToList();

            var Shifts = (from shift in _context.TBL_M_Shifts
                          select new ShiftDDLDTO
                          {
                              ID = shift.ID,
                              ShiftName = shift.SHIFTNAME
                          }).AsNoTracking().ToList();

            var timeStatus = (from log in _context.TBL_T_Logs
                              where log.EmpNum == employeeNo
                              orderby log.LogDate descending
                              select new { TimeInStatus = log.TimeIn, TimeOutStatus = log.TimeOut })
                .AsNoTracking().FirstOrDefault();

            var result = new TimeOnloadDTO()
            {
                Projects = Project,
                Shifts = Shifts,
                IsLoggedIn = timeStatus.TimeInStatus is null && timeStatus.TimeOutStatus is null ? false : true
            };

            return Ok(result);
        }
        [HttpPost]
        public IActionResult Post([FromBody] TimePostDTO time)
        {
            if (!ModelState.IsValid)
            {

                return BadRequest(ModelState);
            }

            var employee = _context.TBL_M_Employees.Where(e => e.EmpNum == time.EmployeeNo).FirstOrDefault();

            if (employee is null)
                return NotFound();

            var newLog = new TBL_T_Log()
            {
                EmpNum = time.EmployeeNo,
                WorkMode = time.WorkMode,
                Schedule = DateTime.Now.DayOfWeek.ToString(),
                Shift = time.ShiftID,
                LogDate = DateTime.Now,
                TimeStatus = time.IsTimeIn ? "Time In" : "Time Out",
                ProjectID = time.ProjectID,
            };

            if (time.IsTimeIn)
            {
                newLog.TimeIn = DateTime.Now.ToString("t");
                newLog.IPAddress_1 = time.IPAddress;
            }
            else
            {
                newLog.TimeOut = DateTime.Now.ToString("t");
                newLog.IPAddress_2 = time.IPAddress;
                newLog.Remarks = "Present";
            }

            employee.ProjectID = time.ProjectID;

            _context.TBL_T_Logs.Add(newLog);
            _context.TBL_M_Employees.Update(employee);
            _context.SaveChanges();


            return Ok(newLog);
        }

    }
}
