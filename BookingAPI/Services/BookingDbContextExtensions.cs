using System.Collections.Generic;
using System.Linq;
using BookingAPI.Entities;

namespace BookingAPI.Services
{
    public static class BookingDbContextExtensions
    {
        public static void CreateSeedData
               (this BookingDbContext context)
          {
               //Hotels
               if (context.Hotels.Any())
                    return;

               var hotels = new List<Hotel>()
               {
                    new Hotel()
                    {
                         Name = "Hôtel Paris Lafayette",
                         Address = "23 Rue des Messageries, 75010 Paris",
                         Tel = "111111111"
                    },
                    new Hotel()
                    {
                         Name = "Hotel de la paix",
                         Address = "18 Rue de la paix, 75009 Paris",
                         Tel = "111111111"
                    },
                    new Hotel()
                    {
                         Name = "Hotel Mahmoud",
                         Address = "12 Rue d'Eprenesnil, 78400 Chatou",
                         Tel = "111111111"
                    }
               };

               //Category
               var categories = new List<Category>()
               {
                    new Category()
                    {
                         Name = "Chambre simple",
                         MaxPeople = "1",
                         Price = "50"
                    },
                    new Category()
                    {
                         Name = "Chambre double",
                         MaxPeople = "2",
                         Price = "80"
                    },
                    new Category()
                    {
                         Name = "Chambre triple",
                         MaxPeople = "3",
                         Price = "100"
                    },
                    new Category()
                    {
                         Name = "Suite",
                         MaxPeople = "5",
                         Price = "180"
                    },
               };

               //Rooms
               var rooms = new List<Room>()
               {
                    new Room()
                    {
                         Photo = "https://t-ec.bstatic.com/images/hotel/max1280x900/143/143388450.jpg"
                    },
                    new Room()
                    {
                         Photo = "https://t-ec.bstatic.com/images/hotel/max1280x900/143/143388450.jpg"
                    },
                    new Room()
                    {
                         Photo = "https://t-ec.bstatic.com/images/hotel/max1280x900/143/143388450.jpg",
                    }
               };
               
               rooms[0].Hotel = hotels[1];
               rooms[1].Hotel = hotels[1];
               rooms[2].Hotel = hotels[1];

               rooms[0].Category = categories[0];
               rooms[1].Category = categories[0];
               rooms[2].Category = categories[1];

               var bookings = new List<Booking>()
               {
                    new Booking()
                    {
                         FirstName = "Asmae",
                         LastName = "LAHMAR",
                         Email = "asmae.amzani@gmail.com",
                         StartDate = "12/08/2019",
                         EndDate = "17/08/2019"
                    },
                    new Booking()
                    {
                         FirstName = "JAD",
                         LastName = "AMZANI",
                         Email = "jijo@gmail.com",
                         StartDate = "19/08/2019",
                         EndDate = "20/08/2019"
                    }   
               };

               bookings[0].Room = rooms[0];
               bookings[1].Room = rooms[1];

               context.AddRange(categories);
               context.AddRange(hotels);
               context.AddRange(rooms);
              // context.AddRange(bookings);
               context.SaveChanges();
          }
    }
}