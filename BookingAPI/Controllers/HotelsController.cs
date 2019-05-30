using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using BookingAPI.Services;
using BookingAPI.Entities;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;

namespace BookingAPI.Controllers
{
     [Route("api/[controller]")]
    public class HotelsController : Controller
    {
        private BookingDbContext _context;

        public HotelsController(BookingDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [EnableCors("Default")]
        public IActionResult GetHotels()
        {
            return Ok(_context.Hotels.Include(e => e.Rooms));
        }

        [HttpPost]
        public ActionResult PostHotel(Hotel hotel)
        {
            
            try {
                 _context.Hotels.Add(hotel);
                 _context.SaveChanges();

                return CreatedAtAction(nameof(GetHotelItem), new { id = hotel.Id }, hotel);
            }
            catch (DbUpdateException e) {
                Console.WriteLine("DB Execption: {0}", e.Message);
                return BadRequest("Adding Hotel error (the booking maybe already exists)");
            }
           
        }

        [HttpGet("{id}")]
        public ActionResult<Hotel> GetHotelItem(int id)
        {
            var item =  _context.Hotels
                .Include(e => e.Rooms)
                .ThenInclude(c => c.Category)
                .SingleOrDefault(x => x.Id == id);

            if (item == null)
            {
                return NotFound();
            }

            return item;
        }


        [HttpPut("{id}")]
        public ActionResult PutHotelItem(int id, Hotel hotel)
        {
            if (id != hotel.Id)
            {
                return BadRequest();
            }

            _context.Entry(hotel).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteHotelItem(int id)
        {
            var hotel = _context.Hotels.Find(id);

            if (hotel == null)
            {
                return NotFound();
            }

            _context.Hotels.Remove(hotel);
            _context.SaveChanges();

            return NoContent();
        }

    }
}