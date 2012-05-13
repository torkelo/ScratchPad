using System.Collections.Generic;
using System.Web.Http;
using BBoneTrader.Web.Models;

namespace BBoneTrader.Web.Controllers
{
    public class AuctionsController : ApiController
    {
        public IList<Auction> List()
        {
            return new List<Auction>()
                    {
                        new Auction()
                            {
                                Id = 1,
                                Title = "Old wooden table",
                                Description = "Buy it",
                                MaxBid = 100,
                                Bids = 2,
                            },
                            new Auction()
                            {
                                Id = 2,
                                Title = "Old iphone",
                                Description = "Buy my old iphone",
                                MaxBid = 200,
                                Bids = 3
                            },
                            new Auction()
                            {
                                Id = 3,
                                Title = "Test auction",
                                Description = "Do not bid on this!",
                                MaxBid = 50,
                                Bids = 0
                            }
                    };
        }

        public void Create(CreateAuctionCommand auction)
        {

        }
    }

    public class CreateAuctionCommand
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int MinBid { get; set; }
    }
}