using Microsoft.AspNetCore.Mvc;
using BookingAPI.Services;
using BookingAPI.Entities;
using BookingAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;

namespace BookingAPI.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        [HttpPost]
        public ActionResult PostLogin(Login login)
        {
            Console.Write(login.UserName);
            Console.Write(login.Password);
            if (string.Compare(login.UserName, "admin") == 0 & string.Compare(login.Password,("admin")) == 0) {
                return Ok("Success");
            }
            else {
                return BadRequest("Password ou Login Incorrect");
            }
        }
        
    }
}