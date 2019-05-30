using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace BookingAPI.Entities
{
    public class Room
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(255)]
        public string Photo { get; set; }

        [ForeignKey("Hotel")]
        public int HotelRefId { get; set; }
        public Hotel Hotel { get; set; }

        [ForeignKey("Category")]
        public int CategoryefId { get; set; }
        public Category Category { get; set; }

        public ICollection<Booking> Bookings { get; set; }
    }
}