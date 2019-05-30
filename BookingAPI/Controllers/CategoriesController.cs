using Microsoft.AspNetCore.Mvc;
using BookingAPI.Services;
using Microsoft.EntityFrameworkCore;
using System.Linq;


namespace BookingAPI.Controllers
{
    [Route("api/[controller]")]
    public class CategoriesController : Controller
    {
        private BookingDbContext _context;

        public CategoriesController(BookingDbContext context)
        {
            _context = context;
        }

        public IActionResult GetCategories()
        {
            return Ok(_context.Categories.Include(e => e.Rooms));
        }
    }
}