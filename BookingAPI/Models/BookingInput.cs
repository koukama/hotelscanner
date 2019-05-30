namespace BookingAPI.Models
{
    public class BookingInput
    {
        public string ArrivalDate { get; set; }
        public string DepartureDate { get; set; }
        public int TotalAdults { get; set; }
        public int TotalKids { get; set; }
    }
}