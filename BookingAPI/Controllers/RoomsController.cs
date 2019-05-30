using Microsoft.AspNetCore.Mvc;
using BookingAPI.Services;
using BookingAPI.Entities;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;

namespace BookingAPI.Controllers
{
    [Route("api/[controller]")]
    public class RoomsController : Controller
    {
        private BookingDbContext _context;

        public RoomsController(BookingDbContext context)
        {
            _context = context;
        }

        
        [HttpPost]
        public ActionResult PostRoom(Room room)
        {
            
            try {
                 _context.Rooms.Add(room);
                 _context.SaveChanges();

                return CreatedAtAction(nameof(GetRoomItem), new { id = room.Id }, room);
            }
            catch (DbUpdateException e) {
                Console.WriteLine("DB Execption: {0}", e.Message);
                return BadRequest("Adding Room error (the booking maybe already exists)");
            }
           
        }

        [HttpGet("{id}")]
        public ActionResult<Room> GetRoomItem(int id)
        {
            var item =  _context.Rooms.Find(id);

            if (item == null)
            {
                return NotFound();
            }

            return item;
        }


        [HttpPut("{id}")]
        public ActionResult PutRoomItem(int id, Room room)
        {
            if (id != room.Id)
            {
                return BadRequest();
            }

            _context.Entry(room).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteRoomItem(int id)
        {
            var room = _context.Rooms.Find(id);

            if (room == null)
            {
                return NotFound();
            }

            _context.Rooms.Remove(room);
            _context.SaveChanges();

            return NoContent();
        }

    }
}