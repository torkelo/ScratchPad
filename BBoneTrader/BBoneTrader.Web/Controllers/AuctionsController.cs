using System.Collections.Generic;
using System.Web.Http;
using BBoneTrader.Web.Models;
using Raven.Client;
using System.Threading.Tasks;
using Raven.Client.Linq;
using System;

namespace BBoneTrader.Web.Controllers
{    

    public class AuctionsController : RavenDbApiController
    {        
        public IEnumerable<Auction> List()
        {
            return Session.Query<Auction>()
                .Customize(x => x.WaitForNonStaleResults());
        }

        public void Create(NewAuctionCommand command)
        {            
            Session.Store(new Auction() 
            {
                Title = command.Title,
                Description = command.Description,
                MinBid = command.MinBid
            });
        }
    }

    public class NewAuctionCommand
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int MinBid { get; set; }
    }
}