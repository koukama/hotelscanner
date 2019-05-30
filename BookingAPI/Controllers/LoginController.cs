using Microsoft.AspNetCore.Mvc;
using BookingAPI.Services;
using BookingAPI.Entities;
using BookingAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;

namespace BookingAPI.Controllers
{
    public class LoginController : Controller
    {
        [HttpPost]
        public ActionResult PostLogin(Login login)
        {
            if (login.UserName == "admin" & login.Password == "azerty") {
                return Ok("Success");
            }
            else {
                return BadRequest("Password ou Login Incorrect");
            }
        }
        
    }
}