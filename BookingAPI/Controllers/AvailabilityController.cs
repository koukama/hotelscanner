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
    public class AvailabilityController : Controller
    {
        private BookingDbContext _context;

        public AvailabilityController(BookingDbContext context)
        {
            _context = context;
        }

        public IActionResult GetAvailability(BookingInput bookingInput)
        {
            var maxPeople = bookingInput.TotalAdults + bookingInput.TotalKids;
            var sql = string.Format(@"SELECT A.id, B.Name as name, A.CategoryefId, A.HotelRefId, A.Photo,  B.MaxPeople as maxPeople, B.Price as price
FROM Rooms as A
INNER JOIN categories as B
ON B.id = A.CategoryefId
WHERE B.MaxPeople >= {0} 
AND (A.Id NOT IN (SELECT RoomRefBookingId
    FROM Bookings
    WHERE 
        (Bookings.StartDate <= '{1}' AND Bookings.EndDate >= '{2}') OR
        (Bookings.StartDate <= '{1}' AND Bookings.EndDate >= '{1}' AND Bookings.StartDate < '{2}') OR
        (Bookings.StartDate > '{1}' AND Bookings.StartDate <= '{2}' AND Bookings.StartDate < '{2}')
    AND A.id is NOT NULL))", maxPeople, bookingInput.ArrivalDate, bookingInput.DepartureDate);
            var availableRooms = _context.Rooms
                .Include(e => e.Category)
                .Include(e => e.Hotel)
                .FromSql(sql)
                .ToList();

            
            Console.WriteLine(sql);
            return Ok(availableRooms);
        }
    }
}