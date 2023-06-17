using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using react_tutorial.DTO.Login;
using System;
using System.Collections.Generic;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using react_tutorial.DTO;

namespace react_tutorial.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public AuthController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDTO user)
        {
            if (user is null)
                return BadRequest("Invalid client request");

            var userInfo = ValidateUserCredentials(user.UserName, user.Password);

            var result = new ResultDTO<string>
            {
                IsSuccess = userInfo is null ? false : true,
                Data = userInfo is null ? null : GenerateJwtToken(userInfo),
                Message = userInfo is null ? "User not Found" : "Login Success"
            };

            return Ok(result);
        }
        private UserDTO ValidateUserCredentials(string userName, string password)
        {
            // Call the stored procedure to fetch user information
            using (var connection = new SqlConnection(_configuration.GetConnectionString("OAMSConnectionString")))
            {
                var parameters = new { USERNAME = userName, PASSWORD = password };
                var result = connection.QueryFirstOrDefault<UserDTO>("GetUserInfo", parameters, commandType: CommandType.StoredProcedure);
                return result;
            }
        }

        private string GenerateJwtToken(UserDTO result)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var secretKey = _configuration["JwtSettings:SecretKey"];
            var key = Encoding.ASCII.GetBytes(secretKey);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                 new Claim("EmpNum", result.EmpNum),
                 new Claim("FullName", result.FullName),
                 new Claim("Position", result.Position),
                 new Claim("Shift", result.Shift),
                 new Claim("ProjectID", result.ProjectID.ToString()),
                 new Claim("WorkMode", result.WorkMode),
                 // Add more claims as needed
            }),
                 Expires = DateTime.UtcNow.AddDays(1),
                 Issuer = _configuration["JwtSettings:Issuer"],
                 Audience = _configuration["JwtSettings:Audience"],
                 SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return tokenString;
        }

    }
}