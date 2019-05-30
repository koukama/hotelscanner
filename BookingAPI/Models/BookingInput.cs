namespace BookingAPI.Models
{
    public class BookingInput
    {
        public int hotelID { get; set; }
        public string ArrivalDate { get; set; }
        public string DepartureDate { get; set; }
        public int TotalAdults { get; set; }
        public int TotalKids { get; set; }
    }
}