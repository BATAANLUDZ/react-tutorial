using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using react_tutorial.DTO;
using react_tutorial.DTO.Time;
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
        public IActionResult Index(string employeeNo)
        {
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

    }
}
