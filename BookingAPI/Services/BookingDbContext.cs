using Microsoft.EntityFrameworkCore;
using BookingAPI.Entities;

namespace BookingAPI.Services
{
    public class BookingDbContext: DbContext
    {
        public DbSet<Hotel> Hotels { get; set; }
        public DbSet<Room> Rooms { get; set; }

        public DbSet<Category> Categories { get; set; }

        public DbSet<Booking> Bookings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Booking>()
                .HasIndex(p => new { p.LastName, p.FirstName, p.Email, p.StartDate, p.EndDate, p.RoomRefBookingId })
                .IsUnique(true);
        }

        public BookingDbContext(
            DbContextOptions<BookingDbContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}