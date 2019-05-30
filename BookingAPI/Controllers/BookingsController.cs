using Microsoft.AspNetCore.Mvc;
using BookingAPI.Services;
using BookingAPI.Entities;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;

namespace BookingAPI.Controllers
{
    [Route("api/[controller]")]
    public class BookingsController : Controller
    {
        private BookingDbContext _context;

        public BookingsController(BookingDbContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public ActionResult<Booking> GetBookingsItem(long id)
        {
            var bookingItem =  _context.Bookings.Find(id);

            if (bookingItem == null)
            {
                return NotFound();
            }

            return bookingItem;
        }
        

        [HttpGet]
        public ActionResult GetBookings()
        {
            return Ok(_context.Bookings);
        }

        [HttpPost]
        public ActionResult PostBookings(Booking booking)
        {
            
            try {
                 _context.Bookings.Add(booking);
                 _context.SaveChanges();

                return CreatedAtAction(nameof(GetBookingsItem), new { id = booking.Id }, booking);
            }
            catch (DbUpdateException e) {
                Console.WriteLine("DB Execption: {0}", e.Message);
                return BadRequest("Booking error, please check your inputs (the booking maybe already exists)");
            }
           
        }
    }
}